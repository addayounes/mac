import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import logo from '../../images/logo.png'

const Navbar = () => {
    return (
        <header>
            <div className="container">
                <img className="logo" src={logo} alt='logo' />
                <nav>
                    <ul>
                        <li><NavLink exact to="/">Accueil</NavLink></li>
                        <li><NavLink to="/fichiers">Fichiers</NavLink></li>
                        <li>
                            <NavLink to="/events">Evenements
                            <ul className="nested-ul">
                                <li><NavLink to="/10talk">10Talk</NavLink></li>
                                <li><NavLink to="/charity">Charity</NavLink></li>
                                <li><NavLink to="/macday">MAC day</NavLink></li>
                                <li><NavLink to="/macgcs">MAC's GCS</NavLink></li>
                            </ul>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/activities">Activités
                                <ul className="nested-ul">
                                    <li><NavLink to="/LangageSpot">Langage Spot</NavLink></li>
                                    <li><NavLink to="/Workshop">Workshop</NavLink></li>
                                    <li><NavLink to="/WebDesign">Web Design</NavLink></li>
                                    <li><NavLink to="/3DPrinter">3D Printer</NavLink></li>
                                    <li><NavLink to="/Trainings">Trainings</NavLink></li>
                                </ul>
                            </NavLink>
                        </li>
                        <li><NavLink to="/siruis">Siruis</NavLink></li>
                        <li><NavLink to="/about">A Propos</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Navbar
