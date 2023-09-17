import React, { useState } from 'react'

export default function Form(props) {
    const [text, setText] = useState("Enter Text Here");
    const handleUpClick=()=>{
        let newText=text.toUpperCase()
        setText(newText)
    }
    const handleOnChange=(event)=>{
        setText(event.target.value)
    }
    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleOnChange}></textarea>
                <button className='btn btn-primary' onClick={handleUpClick}>Uppercase</button>
            </div>
        </div>
    )
}
