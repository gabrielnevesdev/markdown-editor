import React, { Component } from "react";
import Dropzone from "react-dropzone";

import { DropContainer, UploadMessage } from "./styles";


export default class DropzoneComponent extends Component {

    
    renderDragMessage(isDragActive, isDragReject) {
        if (!isDragActive) {
            return <UploadMessage>Selecione ou arraste o arquivo aqui.</UploadMessage>;
        }
        if (isDragReject) {
            return <UploadMessage type="error">Arquivo não suportado</UploadMessage>;
        }
        return <UploadMessage type="success">Solte o arquivo aqui</UploadMessage>;
    }
    render() {
        const accept = {
            "application/*": ["md"],
            
        }
        const { onUpload } = this.props;
        return (
           <Dropzone accept={accept} onDrop={onUpload}>
                {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
                    <DropContainer
                        {...getRootProps()}
                        isDragActive={isDragActive}
                        isDragReject={isDragReject}
                    >
                        <input {...getInputProps()} />
                        {this.renderDragMessage(isDragActive, isDragReject)}
                    </DropContainer>
                )}  
            </Dropzone>
        );
    }
}