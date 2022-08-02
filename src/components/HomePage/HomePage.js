import React from 'react';
import './HomePage.css';
import {useState} from "react";



// const input = event.target.value
function handleChange(params) {
    
}
function HomePage(){
    const[file, setFile] = useState({});
    console.log(file);

    return (
        <div className='HomePage'>
            <div className='Title'>
                <p>DStorage Dapp</p>
                <p>D</p>
            </div>
            <a href='/upload' className='CheckFiles'>Check Uploaded Files</a>
            <div className='FileData'>
                <h1>UPLOAD YOUR FILE</h1>
                <input type="file" onChange={(e) => {setFile(e.target.files[0])}} />
                <h4>File Details</h4>
                <label htmlFor="name">File Name</label>
                <input className='name' type="text" name='name' value={file.name} disabled/>
                <label htmlFor="description">File Description</label>
                <input type="text" name='description'/>
                <div>
                    <label htmlFor="type">File Type</label>
                    <input type="text" name='type'value={file.type} disabled/>
                    <label htmlFor="size">File Size</label>
                    <input type="text" name='size'value={file.size} disabled/>
                </div>
            </div>
            <button onChange={handleChange} className='Upload'>Upload File Now</button>
        </div>
    )
}

function split(str){
    return str.split(/(\\|\/)/g).pop();
}

export default HomePage;
