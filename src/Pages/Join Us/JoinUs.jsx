import React, { useEffect, useState } from 'react'
import Input from '../../Components/InputField/Input'
import emailjs from 'emailjs-com'
import "./JoinUs.css"

const JoinUs = () => {

    useEffect(() => {window.scrollTo(0,0)})
    const [done, setDone] = useState(false)

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_fef4mhi', 'template_68t3kc7', e.target, 'user_5AltFuMYHwgJ8c9AklSrS')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
          setDone(true)
      }

    return (
        <section className="joinUs">
            
            <h1>Rejoindre Le Club MAC</h1>
            <form className="form-split" onSubmit={sendEmail}>
                <div className="joinUs__left">
                    <Input name="Nom" width="100%" label="Nom" placeolder="Mohamed" />
                    <Input name="Prenom" width="100%" label="Prénom" placeolder="Amine" />
                    <Input name="Email" width="100%" label="Email" placeolder="exemple@gmail.com" />
                    <Input name="Telephone" width="100%" label="Téléphone" placeolder="+213 599 88 77 66" />
                    <Input onSubmit={sendEmail} className="submit" value="Envoyer un message" type="submit" message={false} width={'100%'} />
                    <span className="done-msg" style={{display: done ? 'block' : 'none'}}>Votre message a été envoyé merci de nous avoir contactés</span>
                </div>
            </form>
        </section>
    )
}

export default JoinUs
