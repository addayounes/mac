import React from 'react'
import './Button.css'
import { useState } from 'react'


const Button = ({ size, text, color, bgColor, border, className, hover }) => {

    const [btnStyle, setBtnStyle] = useState({
        backgroundColor:bgColor,
        color: color,
        border: border ? `1.6px solid ${color}` : `1px solid ${bgColor}`,
        fontSize: size,
    })

    const MouseEnter = () => {
        setBtnStyle({
            backgroundColor: color,
            color: bgColor,
            border: border ? `1.6px solid ${color}` : `1px solid ${bgColor}`,
            transition: 'all .05s ease-in',
            fontSize: size,
        })
    }
    const MouseOut = () => {
        setBtnStyle({
            backgroundColor:bgColor,
            color: color,
            border: border ? `1.6px solid ${color}` : `1px solid ${bgColor}`,
            transition: 'all .05s ease-in',
            fontSize: size,
        })
    }
    
    return (
        <>
        <a href="/" className={'btn ' + className}
          style={btnStyle}
          onMouseOver={hover ? MouseEnter : undefined}
          onMouseOut={hover ? MouseOut : undefined}
        >{text}</a> 
        </>
    )
}

export default Button
