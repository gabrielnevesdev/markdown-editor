import { BsFillFileEarmarkPdfFill, BsTypeItalic, 
  BsTypeBold, BsTable, 
  BsTypeStrikethrough, BsCodeSlash, 
  BsLink45Deg, BsDownload} from "react-icons/bs"
import { MdTitle } from "react-icons/md"
import handleToolBar from "../../util/handleToolBar";
import "./tool-bar.css"
import downloadFile from "../../util/save";

function ToolBar() {
  var ta = document.querySelector("textarea");
  return (
    <div className="tool-bar" >
      <abbr title="download"><BsDownload className="tool" onClick={()=>{downloadFile(ta.value)}}/></abbr>
      <abbr title="Export rendered content to PDF"><BsFillFileEarmarkPdfFill className="tool PDF"/></abbr>
      <abbr title="Bold"><BsTypeBold className="tool" onClick={() => { handleToolBar("bold") }} /></abbr>
      <abbr title="Italic"><BsTypeItalic className="tool" onClick={() => { handleToolBar("italic") }} /></abbr>
      <abbr title="Striketrough"><BsTypeStrikethrough className="tool" onClick={() => { handleToolBar("strike") }} /></abbr>
      <abbr title="Code"><div className="code-tool-bar">
        <BsCodeSlash className="tool" />
        <div className="code-tool">
          <ul>
            <li onClick={() => { handleToolBar("code", "line") }}>In line</li>
            <li onClick={() => { handleToolBar("code", "block") }}>Blocks</li>
          </ul>
        </div>
      </div></abbr>
      <abbr title="Headers"><div className="headers">
        <MdTitle className="tool" />
        <div className="list">
          <ul>
            <li onClick={() => { handleToolBar("header", "1") }}>Header 1</li>
            <li onClick={() => { handleToolBar("header", "2") }}>Header 2</li>
            <li onClick={() => { handleToolBar("header", "3") }}>Header 3</li>
            <li onClick={() => { handleToolBar("header", "4") }}>Header 4</li>
          </ul>
        </div>
      </div></abbr>
      <abbr title="Link"><BsLink45Deg className="tool" onClick={() => { handleToolBar("link") }} /></abbr>
      <abbr title="Table"><BsTable className="tool" onClick={() => { handleToolBar("table") }} /></abbr>
    </div>
  )
}

export default ToolBar;

