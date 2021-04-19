import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { moduleA1 } from './FirstYear-Data'
import { moduleA2 } from './SecondYear-Data'
import './Cours.css'

const Cours = () => {
    const [Item, setItem] = useState(0)
    const [Semestre, setSemestre] = useState(0)
    const handleclick = (e) => {
        e.preventDefault()
        setItem(item => item=e.target.id)
    }
    const [ToggleYearClass, setToggleYearClass] = useState(true)
    const handleYearClick = () => {
        setToggleYearClass(value => !value)
    }
    const [ToggleSemestreClass, setToggleSemestreClass] = useState(true)
    const handleSemestreClick = () => {
        setToggleSemestreClass(value => !value)
        setSemestre(Semestre===0 ? 1 : 0)
    }
    

    let year = ToggleYearClass ? moduleA1 : moduleA2
    let Semestres = year[Semestre]
    let obj = Semestres[Item]

    return (
        <section className="cours-section">
            <div className="grid-col year">
                <span onClick={handleYearClick} className={`year-block first-year ${ToggleYearClass ? 'active-year' : ''}`}>1ere Année</span>
                <span onClick={handleYearClick} className={`year-block second-year ${ToggleYearClass ? '' : 'active-year'}`}>2eme Année</span>
            </div>
            <div className="grid-col semestre">
                <div className="section-title">Semestre</div>
                <ul>
                    <li onClick={handleSemestreClick} className={ToggleSemestreClass ? 'active-li' : ''}>Semestre 1</li>
                    <li onClick={handleSemestreClick} className={ToggleSemestreClass ? '' : 'active-li'}>Semestre 2</li>
                </ul>
            </div>

            <div className="grid-col modules">
                <div className="section-title">Modules</div>
                <ul>
                    {Semestres.map((module, index) => {
                            return (
                                <li id={index} onClick={handleclick} key={index}>{module.module}</li>
                            )
                        })}
                </ul>
            </div>

            
            <div className="grid-col content-feed">
                <div className="cours-content">
                    <div className="section-title">Cours</div>
                    <ul>
                        {obj.cours.map((cour, index) => {
                            return (
                                <li key={index}><Link to={cour.link}>{cour.nomCours}</Link></li>
                            )
                        })} 
                    </ul>
                </div>
                <div className="td-content">
                    <div className="section-title">TDs</div>
                    <ul>
                        {obj.TD.map((td, index) => {
                            return (
                                <li key={index}><Link to={td.link}>{td.nomTD}</Link></li>
                            )
                        })}
                    </ul>
                </div>
                <div className="examen-content">
                    <div className="section-title">Examen</div>
                    <ul>
                        {obj.Examen.map((examen, index) => {
                            return (
                                <li key={index}><Link to={examen.link}>{examen.nomExamen}</Link></li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Cours
