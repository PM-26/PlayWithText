import React, { useState } from 'react'

export default function Form(props) {
    const [text, setText] = useState("");
    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText)
    }
    const handleLoClick=()=>{
        let newText=text.toLowerCase();
        setText(newText)
    }
    const handleClearClick=()=>{
        let newText='';
        setText(newText)
    }
    const handleSpaceClick=()=>{
        let newText=text.trim();
        setText(newText)
    }
    const handleOnChange=(event)=>{
        setText(event.target.value)
    }
    return (
        <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleOnChange}></textarea>
                <button className='btn btn-primary my-3 mx-3' onClick={handleUpClick}>Uppercase</button>
                <button className='btn btn-primary my-3 mx-3' onClick={handleLoClick}>Lowercase</button>
                <button className='btn btn-primary my-3 mx-3' onClick={handleClearClick}>Clear</button>
                <button className='btn btn-primary my-3 mx-3' onClick={handleSpaceClick}>Remove Spaces from Both Sides</button>
            </div>
        </div>
        <div className='container my-3'>
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} Words, {text.length} Characters</p>
            <p>{0.008*text.split(" ").length} Minutes Read</p>
            <h2>Preview</h2>
            <p>{text}</p>

        </div>
        </>
    )
}
