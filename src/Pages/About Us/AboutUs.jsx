import React from 'react'
import "./AboutUs.css"
import Content from "../Section/Content"
import { AboutUsData } from '../Section/Data'

const AboutUs = () => {
    return (
        <div>
            <Content sectionData={AboutUsData}/>
            <div className="about-us__description stretch">
                <p>Mechanical Activities Club (MAC) a été fondé en 2014 par les futurs ingénieurs en génie mécanique (majoritairement ceux en 1er et 2eme année), afin de créer la solidarité et l’union entre les étudiants, les encourager, et éclaircir leur vision vis-à-vis du monde professionnel.</p>
            </div>
            <div className="about-us__organisation stretch">
                <div className="organisation-wrapper">
                    <h1>The Mac Organisation</h1>
                    <p>Le MAC est composé principalement de 4 départements ( RH, Finance, IT, Activités) avec 4 chefs pour assurer le bon déroulement du travail dans chaque départements, et bien sûr un président pour diriger, prendre les décisions importantes, et superviser le travail, ainsi qu’un vice-président pour le remplacer et un secrétaire général. Département des ressources humaines : Ce département est piloté par son chef (voir le staff),et prend en charge la communication, les conditions du travail, le recrutement des membres et l’évaluation de leur comportement ,c’est le représentant du club devant les administrations. Département des finances : Ce département cherche à constituer ou établir une stratégie financière adaptable en temps réel par rapport aux besoins du club, en collaborant avec des partenaires et des sponsors afin de réaliser ses évènements comme il se doit. Département d’IT : Ce département s’occupe de tout ce qui est technique dans le club, il gère les réseaux sociaux, s’occupe des affiches, et couvre les évènements, en plus il assure des formations pour les nouveaux membres afin d’intégrer l’équipe dans le travail plus facilement. Département des activités : Les membres de ce département s’occupent de tout ce qui est manuel, ils préparent les lieux des évènements, assurent ses déroulements dans des bons conditions, et les organisent.</p>
                </div>
            </div>
        </div>
    )
}

export default AboutUs
