import React from 'react'
import HistoryLogItem from '../historyLogItem'
import WhiteBackgroundShadow from '../whiteBackgroundShadow'
import './historyLogList.css'

const headerElements = [
    {
        src : "/img/icon-date.svg",
        title: "Date"
    },
    {
        src: "/img/icon-pulse.svg",
        title: "Pulse"
    },
    {
        src: "/img/icon-pressure.svg",
        title: "Pressure"
    },
    {
        src: "/img/icon-hemoglobin.svg",
        title: "Hemoglobin"
    },
    {
        src: "",
        title: ""
    },
]

const ListHeaderElement = (props) => {
    return (
        <div className='historyLogListHeaderElement'>
            <img className='historyLogListHeaderIcon' src={props.src} alt="" />
            {props.title}
        </div>
    )
}

const ListHeader = (props) => {
    return (
        <WhiteBackgroundShadow className='historyLogListHeaderContainer'>
            <div className='historyLogListHeader'>
            {headerElements.map((element) => (
                <ListHeaderElement src={element.src} title={element.title} />
            ))}
            </div>
        </WhiteBackgroundShadow>
    )
}

const HistoryLogList = (props) => {

    return (
        
        <div className='historyLogListContainer'>
            <ListHeader />
            {props.logs.map((element) => (
                <HistoryLogItem onClick={() => { }} date={element.date} pulse={element.pulse} pressure={element.pressure} hemoglobin={element.hemoglobin} />
            ))}
       
        </div>
    )
}

export default HistoryLogList