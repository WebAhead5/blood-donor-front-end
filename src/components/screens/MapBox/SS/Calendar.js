import 'react-calendar/dist/Calendar.css';
import React, { useState, useEffect } from "react";
import Calendar from 'react-calendar';

export default function CalendarComponent() {

    const [dateState, setDateState] = useState(
        { date: new Date() })

console.log(dateState);


    return (
        <div>
            <input className="dateInput" type='date'></input>
            {/* <Calendar
                onChange={(date) => { setDateState({ date }) }}
                value={dateState.date}
            /> */}
        </div>
    );
}

// .mapboxgl-ctrl-geocoder  is search
