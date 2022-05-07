import FileSaver from 'file-saver';

function downloadFile(t) {
    var blob = new Blob([t], { type: 'text/plain' });
    FileSaver.saveAs(blob, 'file.md');
}

export default downloadFile;