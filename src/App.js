import { useEffect, useState } from "react"
import "./App.css"
import ToolBar from "./components/tool-bar"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import io from "socket.io-client"
const socket = io("http://localhost:3001")

function App() {
  const [markdownText, setMarkdownText] = useState("")
  const [documentTitle, setDocumentTitle] = useState("GET")

  useEffect(() => {
    if(markdownText == "" && documentTitle) {
      socket.emit("getDocument", documentTitle)
        socket.on("document", data=>{
          console.log(data)
          setMarkdownText(data)
        })
    }
    socket.on("markdown-content", (data) => {
      console.log(data)
      setMarkdownText(data.target)
    })
  },[socket])

  setInterval(()=>{
    const data = {
      title: documentTitle,
      data: markdownText
    }
    socket.emit("setDocument", data)
  }
  ,20000)

  const handleMarkdownChange = (event) => {
    setMarkdownText(event.target.value)
    const e ={
      target: event.target.value
    }
    socket.emit("markdown", e)
   
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Colaborative Markdown Editor</h1>
      </header>
      <div className="App-body">
        {/* TextArea para digitar o Markdown */}
        <div className="markdown-editor">
          <div className="header"> <h2>Markdown Text</h2> </div>
          <ToolBar />
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
          <div className="rendered-preview">
            <ReactMarkdown remarkPlugins={[remarkGfm]} children={markdownText} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App