import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <div className="row">
                
                </div>
                <div className="row down">
                    <div className="col">
                        <h2>Evenements</h2>
                        <ul>
                            <li><Link to="">10 Talk</Link></li>
                            <li><Link to="">Charity</Link></li>
                            <li><Link to="">Mac Day</Link></li>
                            <li><Link to="">MAC's GCS</Link></li>
                        </ul>
                    </div>
                    <div className="col">
                        <h2>Activités</h2>
                        <ul>
                            <li><Link to="">Language Spot</Link></li>
                            <li><Link to="">Workshop</Link></li>
                            <li><Link to="">Web Design</Link></li>
                            <li><Link to="">3D Printer</Link></li>
                            <li><Link to="">Trainings</Link></li>
                        </ul>
                    </div>
                    <div className="col">
                        <h2>MAC Club</h2>
                        <ul>
                            <li><Link to="">A Propos</Link></li>
                            <li><Link to="">Histoire</Link></li>
                            <li><Link to="">Les Membres</Link></li>
                            <li><Link to="">Nous Rejoindre</Link></li>
                        </ul>
                    </div>
                    <div className="col">
                        <h2>Contactez-nous</h2>
                        <ul>
                            <li>(+213) 556 14 32 46</li>
                            <li>mac.club.enpo@gmail.com</li>
                            <li>ENP d'Oran (Ex ENSET, Oran, Es Senia</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
