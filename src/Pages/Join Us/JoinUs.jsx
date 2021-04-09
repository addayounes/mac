import React, { useEffect } from 'react'
import Input from '../../Components/InputField/Input'
import Button from '../../Components/button/Button'
import "./JoinUs.css"

const JoinUs = () => {

    useEffect(() => {window.scrollTo(0,0)})

    return (
        <section className="joinUs">
            
            <h1>Rejoindre Le Club MAC</h1>
            <form className="form-split">
                <div className="joinUs__left">
                    <Input width="100%" label="Nom" placeolder="Mohamed" />
                    <Input width="100%" label="Prénom" placeolder="Amine" />
                    <Input width="100%" label="Email" placeolder="exemple@gmail.com" />
                    <Input width="100%" label="Téléphone" placeolder="+213 599 88 77 66" />
                    <Input width="100%" label="Le club précédent" placeolder="C'est Facultatif, Mettez 'Aucun' si vous n'avez jamais été dans un club ou une association" message={true} />
                </div>

                <div className="joinUs__right">
                    <Input width="100%" label="Motivation" placeolder="Que-ce qui vous motive à rejoindre le groupe ?" message={true} rows="6" />
                    
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
                    <Button width="100%" className="btn-joinUs" text="Rejoindre" color="white" bgColor="#3C96AE" border={false} hover={true} size="1rem" destination="/" />
                </div>

            </form>
        </section>
    )
}

export default JoinUs
