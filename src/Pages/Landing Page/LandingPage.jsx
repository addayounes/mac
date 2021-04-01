import React from 'react'
import Button from '../../Components/button/Button'
import './LandingPageV2.css'
import illustration from '../../images/Maintenance-cuate.svg'
import Content from '../Section/Content'
import { whatIsMac , TenTalk , Evenements , ActivitiesData } from '../Section/Data'

const LandingPage = () => {
    return (
        <>
        <section className="home__wrapper">
            <div className="home__left">
                <h1>Bienvenue au <span>Mechanical Activities Club</span></h1>
                <p>Mechanical Activities Club (MAC) a été fondé en 2014 par les futurs ingénieurs
                en génie mécanique (majoritairement ceux en 1ere et 2eme année),
                afin de créer la solidarité et l’union entre les étudiants, les encourager,
                et éclaircir leur vision vis-à-vis du monde professionnel.</p>
                <div className="btns">
                    <Button className="btn-rejoindre" text="Rejoindre" color="white" bgColor="#3C96AE" border={false} hover={false} size="1rem" />
                    <Button className="btn-contact" text="Contact" destination="/contact" color="#3C96AE" bgColor="white" border={true} hover={true} size="1rem" />
                </div>
            </div>
            <div className="home__right">
                <img src={illustration} alt="Illustration" />
            </div>
        </section>
        <Content sectionData={whatIsMac} />
        <Content sectionData={TenTalk} destination="/10talk" />
        <Content sectionData={Evenements} destination="/Events" />
        <Content sectionData={ActivitiesData} destination="/Activities" />
        </>
    )
}

export default LandingPage
