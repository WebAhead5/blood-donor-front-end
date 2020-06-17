import React from 'react';
import './settingsListItem.css'

const SettingsListItem = (props) => {
     return (
         <div className="settingsListItem_container" onClick={props.onClick}>
            <img src={props.icon} alt={props.alt} className="settingsListItem_userIcon"/>
            <span>{props.title}</span>
            <img src='/img/icon-arrow.svg' alt="go arrow" className="settingsListItem_goArrow"/>
         </div>
     )
}

export default SettingsListItem
