import React from 'react'
import './Button.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'


const Button = ({ size, text, color, bgColor, border, className, hover, destination }) => {

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
        <Link to={destination} className={'btn ' + className}
          style={btnStyle}
          onMouseOver={hover ? MouseEnter : undefined}
          onMouseOut={hover ? MouseOut : undefined}
        >{text}</Link> 
        </>
    )
}

export default Button
