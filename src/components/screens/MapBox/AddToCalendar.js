import React from 'react';
import AddToCalendar from 'react-add-to-calendar';
import moment from 'moment'

function AddToCalendarComponent({ selectedLocation }) {

  let event = {
    title: 'Blood Donation',
    description: 'Reminder to donate blood',
    location: selectedLocation.address,
    startTime: moment(selectedLocation.dateDonation).hours(selectedLocation.opens.slice(0,2)).minutes(selectedLocation.opens.slice(3,5))._d,
    endTime: moment(selectedLocation.dateDonation).hours(selectedLocation.closes.slice(0,2)).minutes(selectedLocation.closes.slice(3,5))._d,
    textOnly: 'none'
  };

  return <AddToCalendar event={event} />;
}

export default AddToCalendarComponent



