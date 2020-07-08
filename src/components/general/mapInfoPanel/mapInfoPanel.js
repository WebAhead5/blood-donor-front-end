import './mapInfoPanel.css'
import moment from 'moment'
import React, {useState} from 'react';
import AddToCalendar from '../addToCalendar';
import {FormattedMessage, injectIntl} from 'react-intl'
import Share from '../share'
import {
    isAndroid,
    isIOS,
    isBrowser,
    isMobile
} from "react-device-detect";

function MapInfoPanel({selectedLocation: {Name, City, DateDonation, FromHour, ToHour,long,lat} = {}, intl}) {
    const address = Name + ", " + City + ", " + "israel";
    const textToShare = {
        title: "come donate blood at...",
        body: "....."
    }
    const addToCalenderEvent = {
        title: "Blood Donation",
        description: "Reminder to donate blood",
        location: address,
        startTime: moment(DateDonation).hours(FromHour.slice(0, 2)).minutes(FromHour.slice(3, 5)).toDate(),
        endTime: moment(DateDonation).hours(ToHour.slice(0, 2)).minutes(ToHour.slice(3, 5)).toDate(),
    }

    const [shareHidden, setShareHidden] = useState(true)

    function navigationButton() {

        if (isBrowser)
            return <button className="infoPanel_button infoPanel_go" onClick={()=>window.open(`https://www.google.com/maps/dir/?api=1&destination=${encodeURI(address)}`)}>{intl.formatMessage({id: 'mapGO'})}</button>

        else if (isMobile)
            if (isAndroid)
                return <button className="infoPanel_button infoPanel_go" onClick={()=>window.open(`geo:?q=${encodeURI(address)}`)}>{intl.formatMessage({id: 'mapGO'})}</button>
            else if (isIOS)
                return <button className="infoPanel_button infoPanel_go" onClick={()=>window.open(`http://maps.apple.com/?q=${encodeURI(address)}&sll=${long},${lat}`)}>{intl.formatMessage({id: 'mapGO'})}</button>

    }

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
                    className="infoPanel_button infoPanel_addToCalender"
                />
                {navigationButton()}

            </div>

            {!shareHidden ? <Share shareData={textToShare} onCloseClick={() => setShareHidden(true)}/> : null}
        </div>
    )
}

export default injectIntl(MapInfoPanel)

