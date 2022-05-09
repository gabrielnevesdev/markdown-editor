import React from "react";
import { MdLink, MdCheckCircle, MdError } from "react-icons/md";
import { Container, FileInfo, Preview } from "./styles";

const FileList = ({files}) => {
    return(
    <Container>
        {files.map(file => (
            console.log(file),
            <li key={file.id}>
            <FileInfo>
                <Preview src={file.preview} />
                <div>
                    <strong>{file.name}</strong>
                    <span>
                        {file.readableSize}
                        {!!file.url && (
                            <button onClick={()=>{}}>Excluir</button>
                    )}
                    </span>
                </div>
            </FileInfo>
            {file.url && (
                <a href={file.url} target="_blank" rel="noopener noreferrer">
                    <MdLink size={24} color="#a5cfff" />
                </a>
            )}
            {file.uploaded && (
                <MdCheckCircle size={24} color="#7dffa5" />
            )}
            {file.error && (
                <MdError size={24} color="#ff7d7d" />
            )}
        </li>
        ))}
    </Container>
    )
}

export default FileList;