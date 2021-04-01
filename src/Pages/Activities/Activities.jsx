import React from 'react'
import Content from '../Section/Content'
import { LanguageSpot, WorkshopData, WebDesignData, PrinterData, TrainingsData } from '../Section/Data'

const Activities = () => {
    return (
        <div>
            <Content sectionData={LanguageSpot} destination="/LangageSpot" />
            <Content sectionData={WorkshopData} destination="/Workshop" />
            <Content sectionData={WebDesignData} destination="/WebDesign" />
            <Content sectionData={PrinterData} destination="/3DPrinter" />
            <Content sectionData={TrainingsData} destination="/Trainings" />
        </div>
    )
}

export default Activities
