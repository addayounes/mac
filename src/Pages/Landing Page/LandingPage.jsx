import React from 'react'
import Button from '../../Components/button/Button'
import './LandingPage.css'
import illustration from '../../images/illustration.png'

const LandingPage = () => {
    return (
        <section className="home__wrapper">
            <div className="home__left">
                <h1>Bienvenue au <span>Mechanical Activities Club</span></h1>
                <p>Mechanical Activities Club (MAC) a été fondé en 2014 par les futurs ingénieurs
                en génie mécanique (majoritairement ceux en 1ere et 2eme année),
                afin de créer la solidarité et l’union entre les étudiants, les encourager,
                et éclaircir leur vision vis-à-vis du monde professionnel.</p>
                <Button className="btn-rejoindre" text="Rejoindre" color="white" bgColor="#3C96AE" border={false} hover={false} size="1rem" />
                <Button className="btn-contact" text="Contact" color="#3C96AE" bgColor="white" border={true} hover={true} size="1rem" />
            </div>
            <div className="home__right">
                <img src={illustration} alt="Illustration" />
            </div>
        </section>
    )
}

export default LandingPage
