import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {

    const [Arrow, setArrow] = useState({
        events: false,
        activity: false,
        mac: false,
        contact: false
    })
    const styling = section => ({display: section ? "block" : "none"})
    const [toggle, setToggle] = useState(false)
    const handleArrowClick = (e) => {
        setToggle(v => !v)
        setArrow({
            ...Arrow,
            [e.target.id]: toggle
        })
    }
        return (
        <footer>
            <div className="footer-container">
                <div className="row down">
                    <div className="col">
                        <div onClick={handleArrowClick} className="footer-item-block">
                            <div className="block-container" id="events">
                                <h2>Evenements</h2>
                                {Arrow.events ? <FaAngleUp className="footer__icon" /> : <FaAngleDown className="footer__icon" />}
                            </div>
                        </div>
                        
                        <ul onClick={handleArrowClick} id="events" style={styling(Arrow.events)}>
                            <li><Link to="10Talk">10 Talk</Link></li>
                            <li><Link to="Charity">Charity</Link></li>
                            <li><Link to="MACday">Mac Day</Link></li>
                            <li><Link to="MACGCS">MAC's GCS</Link></li>
                        </ul>
                    </div>
                    <div className="col">
                        <div onClick={handleArrowClick} className="footer-item-block">
                            <div className="block-container" id="activity">
                                <h2>Activités</h2>
                                {Arrow.activity ? <FaAngleUp className="footer__icon" /> : <FaAngleDown className="footer__icon" />}
                            </div>
                        </div>
                        <ul onClick={handleArrowClick} id="activity" style={styling(Arrow.activity)}>
                            <li><Link to="LangageSpot">Language Spot</Link></li>
                            <li><Link to="Workshop">Workshop</Link></li>
                            <li><Link to="WebDesign">Web Design</Link></li>
                            <li><Link to="3DPrinter">3D Printer</Link></li>
                            <li><Link to="Trainings">Trainings</Link></li>
                        </ul>
                    </div>
                    <div className="col">
                        <div onClick={handleArrowClick} className="footer-item-block">
                            <div className="block-container" id="mac">
                                <h2>MAC Club</h2>
                                {Arrow.mac ? <FaAngleUp className="footer__icon" /> : <FaAngleDown className="footer__icon" />}
                            </div>
                        </div>
                        <ul onClick={handleArrowClick} id="mac" style={styling(Arrow.mac)}>
                            <li><Link to="About">A Propos</Link></li>
                            <li><Link to="About">Histoire</Link></li>
                            <li><Link to="About">Les Membres</Link></li>
                            <li><Link to="Rejoindre">Nous Rejoindre</Link></li>
                        </ul>
                    </div>
                    <div className="col">
                        <div onClick={handleArrowClick} className="footer-item-block last">
                            <div className="block-container" id="contact">
                                <h2>Contactez-nous</h2>
                                {Arrow.contact ? <FaAngleUp className="footer__icon" /> : <FaAngleDown className="footer__icon" />}
                            </div>
                        </div>
                        <ul style={styling(Arrow.contact)}>
                            <li><span>(+213) 556 14 32 46</span></li>
                            <li><span>mac.club.enpo@gmail.com</span></li>
                            <li><span>ENP d'Oran (Ex ENSET, Oran, Es Senia</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
