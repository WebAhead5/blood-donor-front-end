import './mapInfoPanel.css'
import moment from 'moment'
import React, {useState} from 'react';
import AddToCalendar from '../addToCalendar';
import {FormattedMessage, injectIntl} from 'react-intl'
import Share from '../share'


function MapInfoPanel({selectedLocation: {Name, City, DateDonation, FromHour, ToHour}={}, intl}) {
    const address =  Name + " " + City;
    const textToShare = {
        title: "come donate blood at...",
        body: "....."
    }
    const addToCalenderEvent = {
        title: "Blood Donation",
        description: "Reminder to donate blood",
        location: address,
        startTime: moment(DateDonation).hours(FromHour.slice(0,2)).minutes(FromHour.slice(3,5)).toDate(),
        endTime: moment(DateDonation).hours(ToHour.slice(0,2)).minutes(ToHour.slice(3,5)).toDate(),
    }

    const [shareHidden, setShareHidden] = useState(true)

    
    return (

        <div className="infoPanel">
            <div className="infoPanel_detailsContainer">
                <div className="infoPanel_details">
                    <p><FormattedMessage id='Location'/>:<br/> {address}</p>
                    <p><FormattedMessage id='OnDate'/>: <br/>{new Date(DateDonation)?.toDateString()}</p>

                </div>
                <div className="infoPanel_details">
                    <p><FormattedMessage id='Opens'/>:<br/> {FromHour}</p>
                    <p><FormattedMessage id='Closes'/>:<br/> {ToHour}</p>
                </div>

            </div>
            <div className="infoPanel_buttons">

                <button className="infoPanel_button infoPanel_shareButton" onClick={() => setShareHidden(false)}>
                    <FormattedMessage id='Share'/>
                </button>


                <AddToCalendar
                    buttonLabel={intl.formatMessage({id: 'AddToCalendar'})}
                    event={addToCalenderEvent}
                    className="infoPanel_button infoPanel_shareButton"
                />


            </div>

            {!shareHidden ? <Share shareData={textToShare} onCloseClick={() => setShareHidden(true)}/> : null}

        </div>
    )
}

export default injectIntl(MapInfoPanel)

