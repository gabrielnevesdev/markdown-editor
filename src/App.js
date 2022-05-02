import {useState} from "react"
import MarkdownIt from "markdown-it"
import FileSaver from "file-saver"
import "./App.css"
import ToolBar from "./components/tool-bar"


function App(){
  const [markdownText, setMarkdownText] = useState("")
  const [htmlText, setHtmlText] = useState("")
  const [fileName, setFileName] = useState("untitled-note")

  const handleMarkdownChange = (event) => {
    setMarkdownText(event.target.value)
    const md = new MarkdownIt()
    const html = md.render(event.target.value)

    setHtmlText(html)
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
          <ToolBar html={htmlText}/>
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
            <div dangerouslySetInnerHTML={{__html: htmlText}} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App