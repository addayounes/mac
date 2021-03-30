import React from 'react'
import Button from '../../Components/button/Button'
import "./Content.css"


const Content = ({sectionData}) => {

    const splitStyle = {
        flexDirection: sectionData.flexDirection,
    }
    const sectionStyle = {
        backgroundColor: sectionData.bgColor,
        margin: sectionData.margin ? '0' : '2.5em 0'
    }

    return (
        <section style={sectionStyle} className="content">
            <div style={splitStyle} className="split">
                <div className="section__right">
                    <img src={sectionData.img} alt={sectionData.imgAlt.toString()} />
                </div>
                <div className="section__left">
                    <div className="split-wrapper">
                        <h2 style={{color: sectionData.TxtColor,
                                    fontSize: sectionData.TxtSize,
                                    fontWeight: sectionData.TxtWeight
                        }}>{sectionData.headline}</h2>
                        <p style={{color: sectionData.TxtColor}}>{sectionData.paragraph}</p>
                        {sectionData.btn && <Button text={sectionData.buttonLabel} color="white" bgColor="#3C96AE" border={false} hover={false} size=".875rem"  />}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Content
