import React from 'react'
import './SubFooter.css'
import { FaGithub, FaInstagram } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className="subfooter">
            <div>
                <p>All Rights Reserved &#169; Adda Younes 2021</p>
                <a href="https://github.com/addayounes" target="__blank"><FaGithub className="github" /></a>
                <a href="https://www.instagram.com/younes_adda/" target="__blank"><FaInstagram className="instagram" /></a>
            </div>
        </div>
    )
}

export default Footer
