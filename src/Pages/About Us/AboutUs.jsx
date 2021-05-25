import React from 'react'
import "./AboutUs.css"
import Content from "../Section/Content"
import { AboutUsData } from '../Section/Data'

const AboutUs = () => {
    return (
        <div>
            <div>
                <Content sectionData={AboutUsData}/>
                <div className="about-us__description stretch">
                    <p className="container-about">Mechanical Activities Club (MAC) a été Fondé en 2014 par les futurs ingénieurs en génie mécanique Le Mechanical Activities Club est une structure estudiantine scientifique regroupant des étudiants de l’École Nationale Polytechnique d’Oran – Maurice Audin – autour d’un domaine d’activité technologique, fonctionnant selon le principe du bénévolat.</p>
                </div>
                <div className="about-us__organisation stretch">
                    <div className="organisation-wrapper">
                        <div className="container-about">
                            <h1>The Mac Organisation</h1>
                            <p>Le MAC est composé principalement de 3 départements (département d’Infographie, Technologie et Communication (IT&C), département des Évènements (ED), département des Projets et Activités (PAD)) et une cellule RH, un président pour diriger, prendre les décisions importantes, et superviser le travail, ainsi que 3 vice-présidents chargés des départements pour le bon déroulement du travail, et un responsable de la cellule RH. La cellule des Ressources Humaines : Est une cellule limitée (de 10 membres), pilotée par son responsable, et prend en charge les conditions du travail, le recrutement des membres et l’évaluation de leur comportement. Département d’IT&C : Ce département s’occupe de tout ce qui est technique dans le club, il gère les outils de communication (site web, réseaux sociaux) et technologie, s’occupe des designs et affiches, couvre les évènements et prend en charge la communication, en plus il assure des formations pour les nouveaux membres afin d’intégrer l’équipe dans le travail plus facilement. Département des Évènements : Les membres de ce département s’occupent du suivi des évènements, de leurs bons déroulements, et cherchent des collaborations avec d’autre associations et/ou clubs, des dons et subventions. Le département des Activités et Projets : Ce département est en charge des activités internes du club, du bon déroulement des formations, ateliers et Workshops, s’occupe des projets scientifiques.</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default AboutUs
