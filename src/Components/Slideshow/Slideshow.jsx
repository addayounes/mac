import React, { useState } from 'react'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
import "./Slideshow.css"

const Slideshow = ({ SliderData }) => {

    const [current, setCurrent] = useState(2);
     const length = SliderData.length;

    const previousSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)

    }
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    if(length <= 0) {
        return null;
    }

    return (
        <div className="slider">
            <FaArrowAltCircleLeft className="left-arrow" onClick={previousSlide} />
            
                {
                    SliderData.map((slider, index) => {
                        return(
                            <div key={index} className={current === index ? "images_slide active_slide" : "images_slide"}>
                                {index === current && <img src={slider.image} alt="10Talk" className="image" />}
                            </div>
                        )
                      }
                    )
                }
            
            <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
        </div>
    )
}

export default Slideshow
