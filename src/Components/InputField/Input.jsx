import React from 'react'
import "./Input.css"

const Input = ({label, placeolder, width, message, rows}) => {
    
    const InputStyle = {
        width: width
    }

    return (
        <div className="input">
            <span className="input__label">{label}</span>
            { message ? <textarea style={InputStyle} className="input__message" placeholder={placeolder} name="message" id="message" cols="20" rows={rows===undefined ? "10" : rows}></textarea> : <input style={InputStyle} type="text" placeholder={placeolder} className="input__input" />}
        </div>
    )
}

export default Input
