import React, { useState } from 'react'
import Input from "../../Components/InputField/Input"
import { Link } from 'react-router-dom'
import { FaFacebookSquare, FaInstagramSquare, FaYoutube } from 'react-icons/fa'
import emailjs from 'emailjs-com'
import "./Contact.css"

const Contact = () => {

    const [error, setError] = useState(false)

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_fef4mhi', 'template_qcjvtse', e.target, 'user_5AltFuMYHwgJ8c9AklSrS')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
              setError(true)
          });
          e.target.reset();
          console.log(e.target);
      }
    return (
        <section className="contact-section">
            <div className="contact">
                <div className="contact__left">
                    <form onSubmit={sendEmail}>
                        <h1>Envoyer nous un message !</h1>
                        <div className="contact__inputs-wrapper">
                            <div className="contact__nom-prenom">
                                <Input name="fname" label="Nom" placeolder="Mohamed" message={false} width={'100%'} />
                                <Input name="lname" label="Prénom" placeolder="Amine" message={false} width={'100%'} />
                            </div>
                            <div className="contact__email-message">
                                <Input name="email" label="Email" placeolder="exemple@mail.com" message={false} width={'100%'} />
                                <Input label="Message" placeolder="Votre Message..." message={true} width={'100%'} rows={8} />
                                <span className="error-msg" style={{display: error ? 'block' : 'none'}}>ecrire un message svp</span>
                            </div>
                        </div>
                        <div className="contact__btn">
                            <Input className="submit" value="Envoyer un message" type="submit" message={false} width={'100%'} />
                        </div>
                    </form>
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
                            <Link to={{ pathname: "https://www.instagram.com/mechanical_activities_club/"}} target="_blank" className="social"><FaInstagramSquare /></Link>
                            <Link to={{ pathname: "https://www.youtube.com/channel/UCvvqlv1qW-gmP36l_QhDT2g"}} target="_blank" className="social"><FaYoutube /></Link>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default Contact
