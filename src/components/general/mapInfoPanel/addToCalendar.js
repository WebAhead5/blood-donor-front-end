import React from 'react';
import AddToCalendar from 'react-add-to-calendar';

// TODO: pass state into the component

function AddToCalendarComponent({ selectedLocation }) {

  let event = {
    title: 'Blood Donation',
    description: 'Reminder to donate blood',
    location: selectedLocation.address,
    startTime: selectedLocation.dateDonation,
    endTime: selectedLocation.dateDonation,
    textOnly: 'none'
  };

  //   const [addToCalendarState, setAddToCalendarState] = setState(event)

  return <AddToCalendar event={event} />;
}

// AddToCalendarComponent.displayName = 'Example';
export default AddToCalendarComponent



