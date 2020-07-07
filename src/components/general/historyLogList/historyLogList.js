import React from 'react';
import HistoryLogItem from '../historyLogItem';
import WhiteBackgroundShadow from '../whiteBackgroundShadow';
import './historyLogList.css';
import { useRecoilValue } from 'recoil';
import { logsState } from '../../../store/logs';
import { FormattedMessage } from 'react-intl';
import { textDirection } from '../../../store/textDirection';

const ListHeaderElement = (props) => {

    return (
        <div className={props.className} style={props.style}>
            <img className={'historyLogListHeaderIcon'} src={props.src} alt="" />
            {props.title}
        </div>
    )
}

const ListHeader = (props) => {
    const direction = useRecoilValue(textDirection)
    const headerElements = [
        {
            src: "/img/icon-date.svg",
            title: <FormattedMessage id="Date" />,
            className: `${direction === "rtl" ? 'historyLogListHeaderElementRtl' : 'historyLogListHeaderElement'}`,
            style: { marginLeft: '10px' }
        },
        {
            src: "/img/icon-pulse.svg",
            title: <FormattedMessage id="Pulse" />,
            className: `${direction === "rtl" ? 'historyLogListHeaderElementRtl' : 'historyLogListHeaderElement'}`
        },
        {
            src: "/img/icon-pressure.svg",
            title: <FormattedMessage id="Pressure" />,
            className: `${direction === "rtl" ? 'historyLogListHeaderElementRtl' : 'historyLogListHeaderElement'}`
        },
        {
            src: "/img/icon-hemoglobin.svg",
            title: <FormattedMessage id="Hemoglobin" />,
            className: `${direction === "rtl" ? 'historyLogListHeaderElementRtl' : 'historyLogListHeaderElement'}`
        },
        {
            src: "",
            title: "",
            className: ''
        },
    ]


    return (
        <WhiteBackgroundShadow className='historyLogListHeaderContainer'>
            <div className={`historyLogListHeader ${direction === "rtl" && 'historyLogListHeaderRtl'}`}>
                {headerElements.map((element, index) => (
                    <ListHeaderElement key={index} {...element} />
                ))}
            </div>
        </WhiteBackgroundShadow>
    )
}

const HistoryLogList = (props) => {

    const logs = useRecoilValue(logsState);

    // Update localStorage and state with most recent blood donation date
    let [mostRecentDateState, setMostRecentDateState] = React.useState('')

    React.useEffect(() => {
        const mostRecentDonationStorage = localStorage.getItem('mostRecentDonation') || ''
        setMostRecentDateState(mostRecentDonationStorage)
    }, [])

    React.useEffect(() => {
        let latestDonationCompared = logs.map(row => row.date).concat(mostRecentDateState).sort().reverse()[0]
        setMostRecentDateState(latestDonationCompared)

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [mostRecentDateState])

    return (
        <div className='historyLogListContainer'>
            <ListHeader />
            {logs.map((element, index) => (
                <HistoryLogItem key={index} id={element.id} date={element.date} pulse={element.pulse} pressure={element.pressure} hemoglobin={element.hemoglobin} />
            ))}

        </div>
    )
}

export default HistoryLogList