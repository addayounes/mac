import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'
<<<<<<< HEAD
import GoToTop from '../Go To Top/GoToTop'
=======
>>>>>>> 2397d6cde2c48395cc0b89636caa16fd0a2b150f
import './Footer.css'

const Footer = () => {

    const [toggleEvents, setToggleEvents] = useState(false)
    const [toggleActivity, setToggleActivity] = useState(false)
    const [toggleMac, setToggleMac] = useState(false)
    const [toggleContact, setToggleContact] = useState(false)

    const EVStyle = {
        display: toggleEvents ? "block" : "none",
    }
    const ACStyle = {
        display: toggleActivity ? "block" : "none"
    }
    const MAStyle = {
        display: toggleMac ? "block" : "none"
    }
    const COStyle = {
        display: toggleContact ? "block" : "none"
    }

    const handleEventsClick = () => {
        setToggleEvents(ev => !ev)
    }
    const handleActivityClick = () => {
        setToggleActivity(ev => !ev)
    }
    const handleMacClick = () => {
        setToggleMac(ev => !ev)
    }
    const handleContactClick = () => {
        setToggleContact(ev => !ev)
    }

    return (
        <footer>
            <div className="footer-container">
                <div className="row down">
                    <div className="col">
                        <div onClick={handleEventsClick} className="footer-item-block">
                            <div className="block-container">
                                <h2>Evenements</h2>
                                {toggleEvents ? <FaAngleUp className="footer__icon" /> : <FaAngleDown className="footer__icon" />}
                            </div>
                        </div>
                        
                        <ul onClick={handleEventsClick} style={EVStyle}>
                            <li><Link to="10Talk">10 Talk</Link></li>
                            <li><Link to="Charity">Charity</Link></li>
                            <li><Link to="MACday">Mac Day</Link></li>
                            <li><Link to="MACGCS">MAC's GCS</Link></li>
                        </ul>
                    </div>
                    <div className="col">
                        <div onClick={handleActivityClick} className="footer-item-block">
                            <div className="block-container">
                                <h2>Activités</h2>
                                {toggleActivity ? <FaAngleUp className="footer__icon" /> : <FaAngleDown className="footer__icon" />}
                            </div>
                        </div>
                        <ul onClick={handleActivityClick} style={ACStyle}>
                            <li><Link to="LangageSpot">Language Spot</Link></li>
                            <li><Link to="Workshop">Workshop</Link></li>
                            <li><Link to="WebDesign">Web Design</Link></li>
                            <li><Link to="3DPrinter">3D Printer</Link></li>
                            <li><Link to="Trainings">Trainings</Link></li>
                        </ul>
                    </div>
                    <div className="col">
                        <div onClick={handleMacClick} className="footer-item-block">
                            <div className="block-container">
                                <h2>MAC Club</h2>
                                {toggleMac ? <FaAngleUp className="footer__icon" /> : <FaAngleDown className="footer__icon" />}
                            </div>
                        </div>
                        <ul onClick={handleMacClick} style={MAStyle}>
                            <li><Link to="About">A Propos</Link></li>
                            <li><Link to="/">Histoire</Link></li>
                            <li><Link to="/">Les Membres</Link></li>
                            <li><Link to="Rejoindre">Nous Rejoindre</Link></li>
                        </ul>
                    </div>
                    <div className="col">
                        <div onClick={handleContactClick} className="footer-item-block last">
                            <div className="block-container">
                                <h2>Contactez-nous</h2>
                                {toggleContact ? <FaAngleUp className="footer__icon" /> : <FaAngleDown className="footer__icon" />}
                            </div>
                        </div>
                        <ul style={COStyle}>
                            <li><span>(+213) 556 14 32 46</span></li>
                            <li><span>mac.club.enpo@gmail.com</span></li>
                            <li><span>ENP d'Oran (Ex ENSET, Oran, Es Senia</span></li>
                        </ul>
                    </div>
                </div>
                {/* <GoToTop className="gototop" /> */}
            </div>
        </footer>
    )
}

export default Footer
