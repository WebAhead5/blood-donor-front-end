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

    
    return (

            <div className="infoPanel">
            <div className="infoPanel_detailsContainer">
                <div className="infoPanel_details">
                    <p><FormattedMessage id='Location'/>:<br/> {selectedLocation.address}</p>
                    <p><FormattedMessage id='OnDate'/>: <br/>{selectedLocation.dateDonation.toDateString()}</p>

                </div>
                <div className="infoPanel_details">
                    <p><FormattedMessage id='Opens'/>:<br/>  {selectedLocation.opens}</p>
                    <p><FormattedMessage id='Closes'/>:<br/>  {selectedLocation.closes}</p>
                </div>

            </div>
                <div className="infoPanel_buttons">

                    <button className="infoPanel_button infoPanel_shareButton" onClick={() => setShareButtonState({...shareButtonState, open:true})}>
                        <FormattedMessage id='Share'/>
                    </button>
                    <AddToCalendar
                        buttonLabel={ intl.formatMessage({id: 'AddToCalendar'})}
                        selectedLocation={selectedLocation}
                        rootClass="infoPanel_button infoPanel_addToCalender"
                        dropdownClass="infoPanel_addToCalender_dropDown"
                        buttonWrapperClass="infoPanel_addToCalender_wrapper"
                    />
                </div>

                {/*{ shareButtonState.open? <Share shareButtonState={shareButtonState} />: null}*/}

            </div>
    )
}

export default injectIntl(MapInfoPanel)

