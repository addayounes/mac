import React, { useEffect, useState } from 'react'
import Button from '../../Components/button/Button'
import Input from "../../Components/InputField/Input"
import { Link } from 'react-router-dom'
import { FaFacebookSquare, FaInstagramSquare, FaYoutube } from 'react-icons/fa'
import "./Contact.css"

const Contact = () => {

    const [viewPortWidth, setViewPortWidth] = useState("100%")

    useEffect(() => {window.scrollTo(0,0)})

    return (
        <section className="contact-section">
            <div className="contact">
                <div className="contact__left">
                    <h1>Envoyer nous un message !</h1>
                    <div className="contact__inputs-wrapper">
                        <div className="contact__nom-prenom">
                            <Input label="Nom" placeolder="Mohamed" message={false} width={viewPortWidth} />
                            <Input label="Prénom" placeolder="Amine" message={false} width={viewPortWidth} />
                        </div>
                        <div className="contact__email-message">
                            <Input label="Email" placeolder="exemple@mail.com" message={false} width={viewPortWidth} />
                            <Input label="Message" placeolder="Votre Message..." message={true} width={viewPortWidth} rows={8} />
                        </div>
                    </div>
                    <div className="contact__btn">
                            <Button destination="/" text="Envoyer le message" color="white" bgColor="#3C96AE" border={false} hover={true} size="1rem" />
                    </div>
                </div>

                <div className="contact__right">
                    <div className="contact__right-wrapper">
                        <h1 className="contact__heading">Nous Contacter</h1>
                        <div className="contact__infos">
                            <span className="contact__infos-label">Telephone :</span>
                            <span className="contact__infos-detail">(+213) 556 14 32 46</span>
                        </div>
                        <div className="contact__infos">
                            <span className="contact__infos-label">Email :</span>
                            <span className="contact__infos-detail">mac-club.enpo@gmail.com</span>
                        </div>
                        <div className="contact__infos">
                            <span className="contact__infos-label">Adresse :</span>
                            <span className="contact__infos-detail">ENP D'Oran (Ex ENSET, Rue Oran, Es Senia)</span>
                        </div>
                        <div className="contact__socials">
                            <Link to={{ pathname: "https://facebook.com/MechanicalActivitiesClub/"}} target="_blank" className="social"><FaFacebookSquare /></Link>
                            <Link to={{ pathname: "https://www.instagram.com/mechanical_activities_club/"}} target="_blank" className="social" ><FaInstagramSquare /></Link>
                            <Link to={{ pathname: "https://www.youtube.com/channel/UCvvqlv1qW-gmP36l_QhDT2g"}} target="_blank" className="social" ><FaYoutube /></Link>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default Contact
