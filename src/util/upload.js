import axios from '../services/axios';


async function upload(file) {
    var blob = new Blob([file], { type: 'text' });
    const content = await blob.text();
    console.log(typeof file.toString());
    console.log(blob)
    const { data } = await axios.post('/upload', file);
    console.log(data);
}

export default upload;