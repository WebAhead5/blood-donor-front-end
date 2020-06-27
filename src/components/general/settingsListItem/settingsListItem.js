import React  from 'react';
import './settingsListItem.css';
import { textDirection } from '../../../store/textDirection';
import { useRecoilValue } from 'recoil';


const SettingsListItem = (props) => {

    const direction = useRecoilValue(textDirection)

    return (
        <div className={`settingsListItem_container ${direction === "rtl" && 'settingsListItem_container_rtl'}`} onClick={props.onClick}>
            <img src={props.icon} alt={props.alt} className={`settingsListItem_userIcon ${direction === 'rtl' && 'settingsListItem_userIcon_rtl'}`} />
            <span>{props.title}</span>
            <img src='/img/icon-arrow-black.svg' alt="go arrow" className={`settingsListItem_goArrow ${direction === 'rtl' && 'settingsListItem_goArrow_rtl'}`} />
        </div>
    )
}

export default SettingsListItem
