import { useState } from 'react';
function Index() {
    const [data, setData] = useState();
    return (
        <div className="Index">
            <div className="header">
                <h1>Enter Document Title</h1>
            </div>
            <div>
                <input type="text" placeholder="Enter Document Title" onChange={(e) => { setData(e.target.value) }} />
                <a href={window.location + `document/${data}`}>Enter</a>
            </div>
        </div>
    )
}
export default Index;