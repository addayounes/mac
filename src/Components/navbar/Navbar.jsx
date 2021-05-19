import React, {  useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Navbar.css'
import logo from '../../images/logo.png'
import menu from '../../images/menu.svg'
import exit from '../../images/exit.svg'

const Navbar = () => {

    const [toggleNavBar, setToggleNavBar] = useState(false)       
    const [NavBarShadows, setNavBarShadows] = useState(false)       

    const handleMenuClick = () => setToggleNavBar(!toggleNavBar)

    const handleNavBarShadows = () => {
        if(window.scrollY>0) setNavBarShadows(true)
        else if(window.scrollY===0) setNavBarShadows(false)
    }

    window.addEventListener('scroll', handleNavBarShadows)

    return (
        <header className={NavBarShadows ? "box_shadow" : ""}>
            <div className="container">
                <Link to="/"><img className="logo" src={logo} alt='logo' /></Link>
                <nav id={toggleNavBar ? 'hidden' : ''}>
                    <ul onClick={handleMenuClick}>
                        <li><NavLink exact to="/">Accueil</NavLink></li>
                        <li><NavLink to="/Cours">Cours</NavLink></li>
                        <li>
                            <NavLink to="/Events">Evenements</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Activities">Activités</NavLink>
                        </li>
                        <li><NavLink to="/Sirius">Siruis</NavLink></li>
                        <li><NavLink to="/About">A Propos</NavLink></li>
                        <li><NavLink to="/Contact">Contact</NavLink></li>
                    </ul>
                </nav>
                {toggleNavBar ? <img onClick={handleMenuClick} className="exit" src={exit} alt='exit' />
                 : <img onClick={handleMenuClick} className="menu" src={menu} alt='menu' />}
            </div>
        </header>
    )
}

export default Navbar
