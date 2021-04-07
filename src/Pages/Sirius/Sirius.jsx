import React from 'react'
import Content from '../Section/Content'
import {SiriusOneData, SiriusTwoData, SiriusThreeData, SiriusFourData} from '../Section/Data'

const Sirius = () => {
    return (
        <div>
            <Content sectionData={SiriusOneData} />
            <Content sectionData={SiriusTwoData} />
            <Content sectionData={SiriusThreeData} />
            <Content sectionData={SiriusFourData} />
        </div>
    )
}

export default Sirius
