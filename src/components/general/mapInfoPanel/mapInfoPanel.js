import './mapInfoPanel.css'
import 'react-add-to-calendar/dist/react-add-to-calendar.css'

import React from 'react';
import AddToCalendar from './addToCalendar';
import { FormattedMessage, injectIntl } from 'react-intl'


// TODO: What does the reminderButton do?

function MapInfoPanel({ selectedLocation, intl }) {

    const addToCalendarTitle = intl.formatMessage({id: 'AddToCalendar'})
    
    return (
        <div className="infoPanel">
            <div id="upperLocation">
                <div id="locationDetails">
                    <p><FormattedMessage id='Location'/>:<br/> {selectedLocation.address}</p>
                </div>
                <div id="openingHours">
                    <p><FormattedMessage id='Opens'/>: {selectedLocation.opens}</p>
                    <p><FormattedMessage id='Closes'/>: {selectedLocation.closes}</p>
                    <p><FormattedMessage id='OnDate'/>: <br/>{selectedLocation.dateDonation.toDateString()}</p>
                </div>
            </div>
            <div id="locationButtons">
                <button id="reminderButton"><FormattedMessage id='SetAReminder'/></button>
                <AddToCalendar buttonLabel={addToCalendarTitle} selectedLocation={selectedLocation} />
            </div>
        </div>
    )
}

export default injectIntl(MapInfoPanel)

