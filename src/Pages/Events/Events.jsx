import React from 'react'
import Content from "../Section/Content"
import {TenTalk, CharityData, MacDayData} from "../Section/Data"

const Events = () => {
    return (
        <div>
            <Content sectionData={TenTalk} destination="/10talk" />
            <Content sectionData={CharityData} destination="/Charity" />
            <Content sectionData={MacDayData} destination="/MACday" />
        </div>
    )
}

export default Events
