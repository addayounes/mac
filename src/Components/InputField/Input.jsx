import React from 'react'
import "./Input.css"

const Input = ({label, placeolder, width, message, rows, type, onSubmit, name, onChange}) => {
    
    const InputStyle = {width: width}

    return (
        <div className="input">
            <span className="input__label">{label}</span>
            { message ? 
            <textarea onChange={onChange} style={InputStyle} className="input__message" placeholder={placeolder} name="message" cols="20" rows={rows===undefined ? "10" : rows}></textarea>
             : 
             <input onChange={onChange} name={name} onSubmit={onSubmit} style={InputStyle} type={type} placeholder={placeolder} className="input__input" />}
        </div>
    )
}

export default Input
