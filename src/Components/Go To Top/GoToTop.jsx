import React, { useState } from 'react'
import { animateScroll  } from 'react-scroll'
import { FaCaretSquareUp } from 'react-icons/fa'
import './GoToTop.css'

const GoToTop = () => {

    const handleTop = () => {
        animateScroll.scrollToTop(0);
    }

    const [top, setTop] = useState(false)
    const goTo = () => {
      window.scrollY > 300 ? setTop(true) : setTop(false)
    }
    window.addEventListener('scroll', goTo)

    return (
        <div className="gototop">
            {top && <FaCaretSquareUp onClick={handleTop} className="gototop__icon" />}
        </div>
    )
}

export default GoToTop
