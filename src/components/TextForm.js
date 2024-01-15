import React, { useState } from 'react'

function TextForm(props) {
    const [text, setText] = useState('')
    const [fontStyle, setFontStyle] = useState('normal')

    const fConvertToUpperCase = () => {
        const newText = text.toUpperCase()
        setText(newText)
    }

    const fConvertToLowerCase = () => {
        setText(text.toLowerCase ())
    }

    const fConvertToCapitalize = () => {
        setText(text.toCapitalize())
    }

    const fMakeItalic = () => {
        if (fontStyle === 'normal') {
            setFontStyle('italic')
        } else {
            setFontStyle('normal')
        }
    }

    const fCopyData = () => {
        let text = document.getElementById('idMyTextBox')
        text.select()
        navigator.clipboard.writeText(text.value)
    }

    const fClearData = () => {
        setText('');
    }

    const handlingOnChnage = (event) => {
        setText(event.target.value);
    } 

    const fRemoveExtraSpace = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
    }

    return (
        <>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea style={{
                        fontStyle : fontStyle, 
                        backgroundColor : props.mode === 'light' ? 'white' : '#0d1031',
                        color : props.mode === 'light' ? 'black' : 'white'
                    }} className="form-control" value={text} id="idMyTextBox" onChange={handlingOnChnage} rows="8"></textarea>
                <button type="button" className="btn btn-primary mx-2 mt-2" onClick={fConvertToUpperCase}>Uppercase</button>
                <button type="button" className="btn btn-primary mx-2 mt-2" onClick={fConvertToLowerCase}>Lowercase</button>
                <button type="button" className="btn btn-primary mx-2 mt-2" onClick={fConvertToCapitalize}>Capitaliza</button>
                <button type="button" className="btn btn-primary mx-2 mt-2" onClick={fClearData}>Clear</button>
                <button type="button" className="btn btn-primary mx-2 mt-2" onClick={fCopyData}>Copy Text</button>
                <button type="button" className="btn btn-primary mx-2 mt-2" onClick={fRemoveExtraSpace}>Remove Extra Spaces</button>
                <button type="button" 
                    style={{fontStyle : fontStyle}} 
                    className="btn btn-primary mx-2 mt-2" 
                    onClick={fMakeItalic}>
                    Italic
                </button>
            </div>
            <h6>No of Words is {text.split(" ").length - 1} and No of Caracters is { (text.split("")).length}</h6>
        </>
    )
}

export default TextForm
