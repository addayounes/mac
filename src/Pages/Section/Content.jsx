import React from 'react'
import Button from '../../Components/button/Button'

const Content = ({sectionData}) => {

    const sectionStyle = {
        display: 'flex',
        flexDirection: sectionData.flexDirection,
    }

    return (
        <section style={sectionStyle}>
            <div className="section__right">
                <img src={sectionData.img} alt="img"/>
            </div>
            <div className="section__left">
                <h2>{sectionData.headline}</h2>
                <p>{sectionData.paragraph}</p>
                {sectionData.btn && <Button text={sectionData.buttonLabel} color="white" bgColor="#3C96AE" border={false} hover={false} size="1rem"  />}
            </div>
        </section>
    )
}

export default Content
