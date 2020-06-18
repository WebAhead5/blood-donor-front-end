import React from 'react';
import './alertMenuItem.css'
import WhiteBackgroundShadow from '../whiteBackgroundShadow'


const AlertMenuItem = (props) => {

    const testItems = [{ title: 'location1', location: 'desc1' },
    { title: 'test2', location: 'location1' },
    { title: 'test3', location: 'location1' }]


    return (
        testItems.map(({ title, location }) => (
            
                <div className="alertMenuItem_container">
                    <WhiteBackgroundShadow className="alertMenuItem_whiteBackgroundShadow">
                    <div className='alertMenuItem_notification-icon-container'>
                        <img className="alertMenuItem_notification-icon" src='/img/icon-notification.svg' alt="notification" />
                        </div>
                    <div className="alertMenuItem_title_location_container">
                        <div className="alertMenuItem_title">{title}</div>
                        <div className="alertMenuItem_location">{location}</div>
                    </div>
                    </WhiteBackgroundShadow>
                </div>
            
        ))
    )
}

export default AlertMenuItem