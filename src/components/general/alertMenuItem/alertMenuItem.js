import React from 'react';
import './alertMenuItem.css'
import WhiteBackgroundShadow from '../whiteBackgroundShadow'


const AlertMenuItem = ({ title, context, addedDate }) => {

    return (

        <div className="alertMenuItem_container">
            <WhiteBackgroundShadow className="alertMenuItem_whiteBackgroundShadow">
                <div className='alertMenuItem_notification-icon-container'>
                    <img className="alertMenuItem_notification-icon" src='/img/icon-notification-red.svg'
                        alt="notification" />
                </div>
                <div className="alertMenuItem_title_location_container">
                    <div className="alertMenuItem_title">{title}</div>
                    <div className="alertMenuItem_location">{context}</div>
                    <div className="alertMenuItem_addedDate">{addedDate}</div>
                </div>
            </WhiteBackgroundShadow>
        </div>


    )
}

export default AlertMenuItem