import FileSaver from 'file-saver';

function escreve(t){
    let blob = new Blob([t], {type: "application/pdf;charset=utf-8"});
    FileSaver.saveAs(blob, "save.pdf");
}

export default escreve;