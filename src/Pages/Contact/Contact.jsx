import React, { useState } from 'react'
import Input from "../../Components/InputField/Input"
import { Link } from 'react-router-dom'
import { FaFacebookSquare, FaInstagramSquare, FaYoutube } from 'react-icons/fa'
import emailjs from 'emailjs-com'
import "./Contact.css"

const Contact = () => {

    const [error, setError] = useState(false)
    const [done, setDone] = useState(false)
    const [data, setData] = useState({
        fname: '',
        lname: '',
        email: '',
        message: ''
    })

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    function sendEmail(e) {
        e.preventDefault();
        
        if(data.fname==='' || data.lname==='' || data.email==='' || data.message==='')
        return setError(true)
    
        emailjs.sendForm('service_fef4mhi', 'template_qcjvtse', e.target, 'user_5AltFuMYHwgJ8c9AklSrS')
          .then((result) => {
            console.log(result);
          }, (error) => {
              setDone(false)
              setError(true)
          });
          e.target.reset();
          setError(false)
          setDone(true)
      }
    return (
        <section className="contact-section">
            <div className="contact">
                <div className="contact__left">
                    <form onSubmit={sendEmail}>
                        <h1>Envoyer nous un message !</h1>
                        <div className="contact__inputs-wrapper">
                            <div className="contact__nom-prenom">
                                <Input onChange={handleChange} value={data.fname} name="fname" label="Nom" placeolder="Mohamed" message={false} width={'100%'} />
                                <Input onChange={handleChange} value={data.lname} name="lname" label="Prénom" placeolder="Amine" message={false} width={'100%'} />
                            </div>
                            <div className="contact__email-message">
                                <Input onChange={handleChange} value={data.email} name="email" label="Email" placeolder="exemple@mail.com" message={false} width={'100%'} />
                                <Input onChange={handleChange} value={data.message} label="Message" placeolder="Votre Message..." message={true} width={'100%'} rows={8} />
                                <span className="error-msg" style={{display: error ? 'block' : 'none'}}>Les champs de texte ne peuvent pas être vides</span>
                                <span className="done-msg" style={{display: done ? 'block' : 'none'}}>Votre message a été envoyé merci de nous avoir contactés</span>
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
