import React from 'react'
import Button from '../../Components/button/Button'
import "./Content.css"


const Content = ({sectionData}) => {

    const sectionStyle = {
        flexDirection: sectionData.flexDirection,
    }

    return (
        <section className="content">
            <div style={sectionStyle} className="split">
                <div className="section__right">
                    <img src={sectionData.img} alt={sectionData.imgAlt} />
                </div>
                <div className="section__left">
                    <div className="split-wrapper">
                        <h2>{sectionData.headline}</h2>
                        <p>{sectionData.paragraph}</p>
                        {sectionData.btn && <Button text={sectionData.buttonLabel} color="white" bgColor="#3C96AE" border={false} hover={false} size="1rem"  />}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Content
