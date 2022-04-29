import {useState} from "react"
import MarkdownIt from "markdown-it"
import FileSaver from "file-saver"
import "./App.css"
import InputMd from "./components/inputMD"

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
      <div className="container">
        <h2 className="app-heading text-center
                       display-4 my-3">
          Colaborative MarkDown Editor
        </h2>
        <div className="row">
          <div className="col col-sm-12 col-md-6">
    
            {/* Card for the markdown editor */}
          <InputMd markdownText={markdownText} onChange={handleMarkdownChange}/>
          </div>
          <div className="col col-sm-12 col-md-6">
    
            {/* Card for the markdown editor */}
            <div className="card bg-white rendered-output">
              <h4 className="card-title text-center">
                Output
              </h4>
    
              {/* Textarea for the markdown editor */}
              <div className="card-body">
                <div
    
                  // Change the HTML to be displayed according
                  // to the render produced by MarkdownIt
                  dangerouslySetInnerHTML={{ __html: htmlText }}
                  className="rendered-html-output"
                >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default App