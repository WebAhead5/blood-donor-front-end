import './InfoPanel.css'
import 'react-add-to-calendar/dist/react-add-to-calendar.css'

import React from 'react';
import AddToCalendar from './AddToCalendar';

// TODO: What does the reminderButton do?

function InfoPanel({ selectedLocation }) {

    return (
        <div className="infoPanel">
            <div id="upperLocation">
                <div id="locationDetails">
                    <p>Location:<br/> {selectedLocation.address}</p>
                </div>
                <div id="openingHours">
                    <p>Opens: {selectedLocation.opens}</p>
                    <p>Closes: {selectedLocation.closes}</p>
                    <p>On Date: <br/>{selectedLocation.dateDonation.toDateString()}</p>
                </div>
            </div>
            <div id="locationButtons">
                <button id="reminderButton">Set a Reminder</button>
                <AddToCalendar selectedLocation={selectedLocation} />
            </div>
        </div>
    )
}

export default InfoPanel

