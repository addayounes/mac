import React, { useState } from 'react'
import Button from '../../Components/button/Button'
import Input from "../../Components/InputField/Input"
import "./Contact.css"

const Contact = () => {

    const [viewPortWidth, setViewPortWidth] = useState("100%")

    // if(window.innerWidth>1250) {
    //     setViewPortWidth("50%")
    //     console.log(viewPortWidth);
    // }

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
                            <Input label="Message" placeolder="Votre Message..." message={true} width={viewPortWidth} />
                        </div>
                    </div>
                    <div className="contact__btn">
                            <Button text="Envoyer le message" color="white" bgColor="#3C96AE" border={false} hover={true} size="1rem" />
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
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
