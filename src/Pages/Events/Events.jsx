import React from 'react'
import Content from "../Section/Content"
import {TenTalk, CharityData, MacDayData} from "../Section/Data"

const Events = () => {
    return (
        <div>
            <Content sectionData={TenTalk} />
            <Content sectionData={CharityData} />
            <Content sectionData={MacDayData} />
        </div>
    )
}

export default Events
