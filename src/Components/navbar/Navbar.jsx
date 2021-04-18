import React, {  useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import logo from '../../images/logo.png'
import menu from '../../images/menu.svg'
import exit from '../../images/exit.svg'

const Navbar = () => {

    const [toggleNavBar, setToggleNavBar] = useState(false)       
    const [NavBarShadows, setNavBarShadows] = useState(false)       

    const handleMenuClick = () => {
        setToggleNavBar(!toggleNavBar)
    }

    const handleNavBarShadows = () => {
        if(window.scrollY>0){
            setNavBarShadows(true)
        }else if(window.scrollY===0) setNavBarShadows(false)
    }

    window.addEventListener('scroll', handleNavBarShadows)

    return (
        <header className={NavBarShadows ? "box_shadow" : ""}>
            <div className="container">
                <img className="logo" src={logo} alt='logo' />
                <nav id={toggleNavBar ? 'hidden' : ''}>
                    <ul onClick={handleMenuClick}>
                        <li><NavLink exact to="/">Accueil</NavLink></li>
                        <li><NavLink to="/Cours">Cours</NavLink></li>
                        <li>
                            <NavLink to="/Events">Evenements
                            <ul className='nested-ul'>
                                <li><NavLink to="/10Talk">10Talk</NavLink></li>
                                <li><NavLink to="/Charity">Charity</NavLink></li>
                                <li><NavLink to="/MACday">MAC day</NavLink></li>
                                <li><NavLink to="/MACGCS">MAC's GCS</NavLink></li>
                            </ul>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/Activities">Activités
                                <ul className="nested-ul">
                                    <li><NavLink to="/LangageSpot">Langage Spot</NavLink></li>
                                    <li><NavLink to="/Workshop">Workshop</NavLink></li>
                                    <li><NavLink to="/WebDesign">Web Design</NavLink></li>
                                    <li><NavLink to="/3DPrinter">3D Printer</NavLink></li>
                                    <li><NavLink to="/Trainings">Trainings</NavLink></li>
                                </ul>
                            </NavLink>
                        </li>
                        <li><NavLink to="/Sirius">Siruis</NavLink></li>
                        <li><NavLink to="/about">A Propos</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                </nav>
                {toggleNavBar ? <img onClick={handleMenuClick} className="exit" src={exit} alt='exit' />
                 : <img onClick={handleMenuClick} className="menu" src={menu} alt='menu' />}
            </div>
        </header>
    )
}

export default Navbar
