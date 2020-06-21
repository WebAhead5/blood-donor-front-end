import React, { useState, useEffect } from 'react';
import './App.css';
import SettingsListScreen from '../screens/settingsListScreen'
import MapBox from '../screens/MapBox/MapBox'
import NavBar from "../general/navBar";
import getGeolocation from "../screens/MapBox/API-Geolocation"
import getUserGeolocation from "../screens/MapBox/API-UserGeolocation"

import { Switch, Route } from "react-router-dom";
import SubHeader from "../general/subHeader";



let jdObject = [
  {
    "DateDonation": "2020-06-18T00:00:00",
    "FromHour": "16:00",
    "ToHour": "19:30",
    "Name": "מתנס ירוחם",
    "City": "ירוחם",
    "Street": "",
    "NumHouse": "",
    "AccountType": ""
  },
  {
    "DateDonation": "2020-06-18T00:00:00",
    "FromHour": "16:00",
    "ToHour": "19:30",
    "Name": "Italian hospital",
    "City": "Haifa",
    "Street": "",
    "NumHouse": "",
    "AccountType": ""
  },
  {
    "DateDonation": "2020-06-18T00:00:00",
    "FromHour": "16:00",
    "ToHour": "19:30",
    "Name": "German Colony",
    "City": "Haifa",
    "Street": "",
    "NumHouse": "",
    "AccountType": ""
  }
];

function App() {
  const [geolocationArray, setGeolocationArray] = useState()
  useEffect(() => {
    getGeolocation(jdObject)
      .then((result) => {
        console.log("RESULT IS", result);

        setGeolocationArray(result)
      })
  }, [])

  const [userGeolocationState, setUserGeolocationState] = useState()
  useEffect(() => {
    getUserGeolocation()
      .then((result) => {
        console.log("userGeolocation RESULT IS", result);

        setUserGeolocationState(result)
      })
  }, [])

  setTimeout(console.log("TIMEOUT", userGeolocationState), 2000
  )

    return (
      <div>

        <Switch>
          <Route exact path="/">
            {/*TODO - render home screen*/}
          </Route>

          <Route exact path="/goals">
            {/*TODO - render home screen*/}
            <SubHeader />
          </Route>

          <Route exact path="/map">
            <MapBox arrayOfGeolocationObjects={geolocationArray} userGeolocation={userGeolocationState} />
          </Route>

          <Route exact path="/personal">
            {/*TODO - render home screen*/}
          </Route>

          <Route exact path="/settings">
            <SettingsListScreen />
          </Route>

          <Route exact path="/settings/personal">
            {/*TODO - render home screen*/}
          </Route>

          <Route exact path="/settings/reminders">
            {/*TODO - render home screen*/}
          </Route>
        </Switch>

        <NavBar />
      </div>
    );
  }

  export default App;
