import React from 'react';
import HistoryLogItem from '../historyLogItem';
import WhiteBackgroundShadow from '../whiteBackgroundShadow';
import './historyLogList.css';
import {useRecoilValue} from 'recoil';
import {logsState} from '../../../store/logs';
import { FormattedMessage } from 'react-intl';



const headerElements = [
    {
        src : "/img/icon-date.svg",
        title: <FormattedMessage id="Date" />
    },
    {
        src: "/img/icon-pulse.svg",
        title: <FormattedMessage id="Pulse" />
    },
    {
        src: "/img/icon-pressure.svg",
        title: <FormattedMessage id="Pressure" />
    },
    {
        src: "/img/icon-hemoglobin.svg",
        title: <FormattedMessage id="Hemoglobin" />
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
            {headerElements.map((element, index) => (
                <ListHeaderElement key={index} src={element.src} title={element.title} />
            ))}
            </div>
        </WhiteBackgroundShadow>
    )
}

const HistoryLogList = (props) => {
    const logs = useRecoilValue(logsState);
    return (
        <div className='historyLogListContainer'>
            <ListHeader />
            {logs.map((element, index) => (
                <HistoryLogItem key={index} id= {element.id} date={element.date} pulse={element.pulse} pressure={element.pressure} hemoglobin={element.hemoglobin} />
            ))}
       
        </div>
    )
}

export default HistoryLogList