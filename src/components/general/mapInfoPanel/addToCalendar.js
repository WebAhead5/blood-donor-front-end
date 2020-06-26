import React from 'react';
import AddToCalendar from 'react-add-to-calendar';
import moment from 'moment'

function AddToCalendarComponent({ selectedLocation, buttonLabel, buttonWrapperClass,rootClass ,dropdownClass }) {

  let event = {
    title: 'Blood Donation',
    description: 'Reminder to donate blood',
    location: selectedLocation.address,
    startTime: moment(selectedLocation.dateDonation).hours(selectedLocation.opens.slice(0,2)).minutes(selectedLocation.opens.slice(3,5)).toDate(),
    endTime: moment(selectedLocation.dateDonation).hours(selectedLocation.closes.slice(0,2)).minutes(selectedLocation.closes.slice(3,5)).toDate(),
  };

  // console.log(moment().)
  //   const [addToCalendarState, setAddToCalendarState] = setState(event)

  return <AddToCalendar event={event}
                        buttonLabel={buttonLabel}
                        buttonWrapperClass={buttonWrapperClass}
                        buttonClassClosed = ""
                        buttonClassOpen=""
                        dropdownClass={dropdownClass}
                        rootClass={rootClass}/>;
}

export default AddToCalendarComponent



