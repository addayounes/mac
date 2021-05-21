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
                    <Input name="lastclub" width="100%" label="Le club précédent" placeolder="C'est Facultatif, Mettez 'Aucun' si vous n'avez jamais été dans un club ou une association" message={true} />
                </div>

                <div className="joinUs__right">
                    <Input name="Motivation" width="100%" label="Motivation" placeolder="Que-ce qui vous motive à rejoindre le groupe ?" message={true} rows="6" />
                    
                    <label className="input__label">Departement</label>
                    <select name="departement" id="departement">
                        <option>Infographie et Technologie</option>
                        <option>Finance Et Eelations Extèrieur</option>
                        <option>Relations Humaines</option>
                        <option>Activités</option>
                    </select>

                    <Input width="100%" label="Vos centres d'intérêts" placeolder="décrire en quelque mots vos centres d'intérêts en vers le groupe" message={true} />

                    <label className="input__label">La langue de l'entretien</label>
                    <select name="langue" id="langue">
                        <option>Arabe</option>
                        <option>Francais</option>
                        <option>Anglais</option>
                    </select>
                    <Input onSubmit={sendEmail} className="submit" value="Envoyer un message" type="submit" message={false} width={'100%'} />
                    <span className="done-msg" style={{display: done ? 'block' : 'none'}}>Votre message a été envoyé merci de nous avoir contactés</span>
                </div>

            </form>
        </section>
    )
}

export default JoinUs
