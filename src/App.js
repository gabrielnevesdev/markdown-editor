import { useEffect, useState } from "react"
import "./App.css"
import ToolBar from "./components/tool-bar"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import io from "socket.io-client"
import htmlToPdfmake from 'html-to-pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import pdfMake from 'pdfmake';
import Modal from 'react-modal'
import DropzoneComponent from "./components/dropzone"
import FileList from "./components/fileList"
import {uniqueId} from "lodash"
import filesize from "filesize"
import axios from "./services/axios"

Modal.setAppElement('#root')

function App() {
  const [markdownText, setMarkdownText] = useState("")
  const [documentTitle, setDocumentTitle] = useState(window.location.href.split("/")[4])
  const [socket, setSocket] = useState()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [files, setFiles] = useState([])

 const handleUpload = (files) => {
   const uploads = files.map(file => ({
      file,
      id: uniqueId(),
      name: file.name,
      readableSize: filesize(file.size),
      preview: URL.createObjectURL(file),
      progress: 0,
      url: null,
      error: null,
      uploaded: false,
   }))
    setFiles(files => [...files, ...uploads])
    uploads.forEach(processUpload)
}
const updateFile = (id, data) => {
  setFiles(files => {
    const index = files.findIndex(file => file.id === id)
    const file = files[index]
    const updatedFile = { ...file, ...data }
    return [...files.slice(0, index), updatedFile, ...files.slice(index + 1)]
})
}
  const processUpload = (upload) => {
    const data = new FormData()
    data.append("file", upload.file)
    data.append("title", documentTitle)
    axios.post("/upload", data,{
      onUploadProgress: progressEvent => {
        const progress = parseInt(Math.round((progressEvent.loaded * 100) / progressEvent.total))
        updateFile(upload.id, {progress})
      }
    }).then(response => {
      updateFile(upload.id, { uploaded: true, url: response.data.file.path })
    })
    .catch(error => {
      updateFile(upload.id, { error: error.response.data.message })
    })
  }

  const handleDownloadPdf = async () => {
    const pdfDocment = document.getElementById('to-pdf');
    //html to pdf format
    var html = htmlToPdfmake(pdfDocment.innerHTML);

    const documentDefinition = { content: html };
    pdfMake.vfs = pdfFonts.pdfMake.vfs;
    pdfMake.createPdf(documentDefinition).open();

  };
  const handleModalClose = () => {
    setIsModalOpen(false)
  }
  const handleModalOpen = () => {
    setIsModalOpen(true)
  }
  useEffect(() => {
    const s = io("http://localhost:3001")
    setSocket(s)

    return () => {
      s.disconnect()
    }
  }, [])

  useEffect(() => {
    if (socket == null) return
    socket.on("markdown-content", (data) => {
      console.log(data)
      setMarkdownText(data.target)
    })
    return () => {
      socket.off("markdown-content")
    }

  }, [socket])

  useEffect(() => {
    if (socket == null) return
    if (markdownText === "") {
      socket.emit("getDocument", documentTitle)
    }
    socket.once("document", data => {
      console.log(data)
      setMarkdownText(data)
    })
    return () => {
      socket.off("getDocument")
      socket.off("document")
    }
  }, [markdownText, documentTitle, socket])

  useEffect(() => {
    if (socket == null) return
    const text = {
      title: documentTitle,
      data: markdownText
    }
    const interval = setInterval(() => {
      console.log("salvando dados")
      socket.emit("document-save", text)
    }, 30000)
    return () => {
      clearInterval(interval)
    }
  }, [documentTitle, markdownText, socket])

  const handleMarkdownChange = (event) => {
    setMarkdownText(event.target.value)
    const e = {
      target: event.target.value
    }
    socket.emit("markdown", e)

    socket.on("markdown-content", (data) => {
      console.log(data)
      setMarkdownText(data.target)
    })
  }

  return (
    <div className="App">
      <Modal isOpen={isModalOpen} onRequestClose={handleModalClose}>
        <DropzoneComponent onUpload={handleUpload}/>
        {!!files.length > 0 && (
        <FileList files={files}/>
        )}
      </Modal>

      <header className="App-header">
        <h1>Colaborative Markdown Editor</h1>
      </header>
      <div className="App-body">
        {/* TextArea para digitar o Markdown */}
        <div className="markdown-editor">
          <div className="header"> <h2>Markdown Text</h2> </div>
          <ToolBar func={handleDownloadPdf} modal={handleModalOpen} />
          <textarea
            className="editor"
            rows={15}
            cols={70}
            value={markdownText}
            onChange={handleMarkdownChange}
            style={{ resize: 'none' }}></textarea>
        </div>
        <div className="App-preview">
          <div className="header"> <h2>Preview</h2> </div>
          <div className="rendered-preview" id="to-pdf">
            <ReactMarkdown remarkPlugins={[remarkGfm]} children={markdownText} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App