import { BsFillFileEarmarkPdfFill, BsTypeItalic, 
  BsTypeBold, BsTable, 
  BsTypeStrikethrough, BsCodeSlash, 
  BsLink45Deg, BsDownload, BsFillMenuButtonFill, BsListStars, BsListOl} from "react-icons/bs"
import {FaHeading} from "react-icons/fa"
import handleToolBar from "../../util/handleToolBar";
import "./tool-bar.css"
import downloadFile from "../../util/save";

function ToolBar() {
  var ta = document.querySelector("textarea");
  return (
    <div className="tool-bar" >
      <abbr title="Options"><div className="options-list">
        <BsFillMenuButtonFill className="tool" />
        <div className="list">
          <ul className="ul">
            <li className="li" onClick={()=>{downloadFile(ta.value)}}><BsDownload /> Download</li>
            <li className="li"><BsFillFileEarmarkPdfFill /> Gerar PDF</li>
          </ul>
        </div>
      </div></abbr>
      <abbr title="Bold"><BsTypeBold className="tool" onClick={() => { handleToolBar("bold") }} /></abbr>
      <abbr title="Italic"><BsTypeItalic className="tool" onClick={() => { handleToolBar("italic") }} /></abbr>
      <abbr title="Striketrough"><BsTypeStrikethrough className="tool" onClick={() => { handleToolBar("strike") }} /></abbr>
      <abbr title="Code"><div className="options-list">
        <BsCodeSlash className="tool" />
        <div className="list">
          <ul className="ul">
            <li className="li" onClick={() => { handleToolBar("code", "line") }}>In line</li>
            <li className="li" onClick={() => { handleToolBar("code", "block") }}>Blocks</li>
          </ul>
        </div>
      </div></abbr>
      <abbr title="Headers"><div className="options-list">
        <FaHeading className="tool" />
        <div className="list">
          <ul className="ul">
            <li className="li" onClick={() => { handleToolBar("header", "1") }}>Header 1</li>
            <li className="li" onClick={() => { handleToolBar("header", "2") }}>Header 2</li>
            <li className="li" onClick={() => { handleToolBar("header", "3") }}>Header 3</li>
            <li className="li" onClick={() => { handleToolBar("header", "4") }}>Header 4</li>
          </ul>
        </div>
      </div></abbr>
      <abbr title="Link"><BsLink45Deg className="tool" onClick={() => { handleToolBar("link") }} /></abbr>
      <abbr title="Table"><BsTable className="tool" onClick={() => { handleToolBar("table") }} /></abbr>
      <abbr title="List"><BsListStars className="tool" onClick={() => { handleToolBar("list") }} /></abbr>
      <abbr title="Ordered List"><BsListOl className="tool" onClick={() => { handleToolBar("olist") }} /></abbr>
    </div>
  )
}

export default ToolBar;

