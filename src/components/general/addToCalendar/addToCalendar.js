import React from 'react';
import AddToCalendarComp from 'react-add-to-calendar';
import "./addToCalender.css"
import 'react-add-to-calendar/dist/react-add-to-calendar.css'

function AddToCalendar({ event:{title,description,location,startTime,endTime}, buttonLabel, className}) {


  return <AddToCalendarComp event={{title,description,location,startTime,endTime}}
                        buttonLabel={buttonLabel}
                        buttonWrapperClass="addToCalender_wrapper"
                        buttonClassClosed = ""
                        buttonClassOpen=""
                        dropdownClass="addToCalender_dropDown"
                        rootClass={`addToCalender_button addToCalender ${className}`}/>;
}

export default AddToCalendar



