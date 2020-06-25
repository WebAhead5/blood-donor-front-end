import './mapInfoPanel.css'
import 'react-add-to-calendar/dist/react-add-to-calendar.css'

import React, {useState, Fragment} from 'react';
import AddToCalendar from './addToCalendar';
import { FormattedMessage, injectIntl } from 'react-intl'
import Share from './Share'



function MapInfoPanel({ selectedLocation, intl }) {
    
    const [shareButtonState, setShareButtonState] = useState({
        open: false,
        shareUrl: "https://sad-pare-c4309e.netlify.app/",
        title: "This text needs to be changed to the text that will be shared.",
        appId: null,
        media: "pinterest requires and absolute link to the image that will be pinned"
    })

    const addToCalendarTitle = intl.formatMessage({id: 'AddToCalendar'})
    
    return (

        <Fragment>
            {
            shareButtonState.open? <Share shareButtonState={shareButtonState} />: null}
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
                    <button id="reminderButton"
                     onClick={() => {
                         setShareButtonState({...shareButtonState, open:true})                      
                        }}
                    ><FormattedMessage id='Share'/></button>
                    <AddToCalendar buttonLabel={addToCalendarTitle} selectedLocation={selectedLocation} />
                </div>
            </div>
        </Fragment>

    )
}

export default injectIntl(MapInfoPanel)

