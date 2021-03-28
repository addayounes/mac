import React from 'react'
import Content from './Section/Content'
import { LanguageSpot, WorkshopData, WebDesignData, PrinterData, TrainingsData } from './Section/Data'

const Activities = () => {
    return (
        <div>
            <Content sectionData={LanguageSpot} />
            <Content sectionData={WorkshopData} />
            <Content sectionData={WebDesignData} />
            <Content sectionData={PrinterData} />
            <Content sectionData={TrainingsData} />
        </div>
    )
}

export default Activities
