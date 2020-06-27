import React from 'react';
import AddToCalendar from 'react-add-to-calendar';
import "./addToCalender.css"
import 'react-add-to-calendar/dist/react-add-to-calendar.css'

function AddToCalendarComponent({ event:{title,description,location,startTime,endTime}, buttonLabel, className}) {


  return <AddToCalendar event={{title,description,location,startTime,endTime}}
                        buttonLabel={buttonLabel}
                        buttonWrapperClass="addToCalender_wrapper"
                        buttonClassClosed = ""
                        buttonClassOpen=""
                        dropdownClass="addToCalender_dropDown"
                        rootClass={`addToCalender_button addToCalender ${className}`}/>;
}

export default AddToCalendarComponent



