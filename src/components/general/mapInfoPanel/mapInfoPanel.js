import './mapInfoPanel.css'
import 'react-add-to-calendar/dist/react-add-to-calendar.css'

import React, {useState, Fragment} from 'react';
import AddToCalendar from './addToCalendar';
import Share from './Share'



function MapInfoPanel({ selectedLocation }) {
    
    const [shareButtonState, setShareButtonState] = useState({
        open: false,
        shareUrl: "https://sad-pare-c4309e.netlify.app/",
        title: "This text needs to be changed to the text that will be shared.",
        appId: null,
        media: "pinterest requires and absolute link to the image that will be pinned"
    })

    return (
        <Fragment>
            {console.log(shareButtonState.open)}
            {
            shareButtonState.open? <Share shareButtonState={shareButtonState} />: null}
            <div className="infoPanel">
                <div id="upperLocation">
                    <div id="locationDetails">
                        <p>Location:<br /> {selectedLocation.address}</p>
                    </div>
                    <div id="openingHours">
                        <p>Opens: {selectedLocation.opens}</p>
                        <p>Closes: {selectedLocation.closes}</p>
                        <p>On Date: <br />{selectedLocation.dateDonation.toDateString()}</p>
                    </div>
                </div>
                <div id="locationButtons">
                    <button id="reminderButton"
                     onClick={() => {
                         setShareButtonState({...shareButtonState, open:true})                      
                        }}
                    >Share</button>
                    <AddToCalendar selectedLocation={selectedLocation} />
                </div>
            </div>
        </Fragment>
    )
}

export default MapInfoPanel

