import React from 'react'
import { FaCaretSquareUp } from 'react-icons/fa'
import './GoToTop.css'

const GoToTop = () => {

    const handleTop = () => {
        window.scrollTo(0,0)
    }

    return (
        <div className="gototop">
            <FaCaretSquareUp onClick={handleTop} className="gototop__icon" />
        </div>
    )
}

export default GoToTop
