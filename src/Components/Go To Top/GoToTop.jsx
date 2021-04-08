import React from 'react'
import { animateScroll  } from 'react-scroll'
import { FaCaretSquareUp } from 'react-icons/fa'
import './GoToTop.css'

const GoToTop = () => {

    const handleTop = () => {
        animateScroll.scrollToTop(0);
    }

    return (
        <div className="gototop">
            <FaCaretSquareUp onClick={handleTop} className="gototop__icon" />
        </div>
    )
}

export default GoToTop
