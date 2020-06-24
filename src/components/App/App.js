import React, { useState, useEffect } from 'react';
import './App.css';
import SettingsListScreen from '../screens/settingsListScreen'
import MapBox from '../screens/MapBox/MapBox'
import NavBar from "../general/navBar";
import getGeolocation from "../screens/MapBox/API-Geolocation"
import getUserGeolocation from "../screens/MapBox/API-UserGeolocation"

import { Switch, Route } from "react-router-dom";
import PersonalSettingsScreen from '../screens/personalSettingsScreen'
import Personal from "../screens/personal";
import GoalsScreen from "../screens/goalsScreen";
import HomeScreen from "../screens/homeScreen";
import {RecoilRoot} from 'recoil';


let alerts = [
  {title:"Blood donation needed!", context: "Haifa district"},
  {title:"Blood donation needed!", context: "jerusalem district"},
  {title:"Blood donation needed!", context: "holululu district"},
]


const homeBarData = [
  {
    title:"support us financially",
    src:"/img/dollar-icon.svg",
    redirectionLink:"/settings/support"
  },  {
    title:"How To Donate Blood",
    src:"/img/icon3.svg",
    redirectionLink:"/settings/how-to-donate"
  },  {
    title:"ways you could contribute",
    src:"/img/icon2.svg",
    redirectionLink:"/settings/contribute"
  }
]


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
      <RecoilRoot>
      <div>
      <Switch>
        <Route exact path="/">
          <HomeScreen alertsData={alerts} homeHeaderData={homeBarData}/>
        </Route>

        <Route exact path="/goals">
          <GoalsScreen  />
        </Route>

          <Route exact path="/map">
            <MapBox arrayOfGeolocationObjects={geolocationArray} userGeolocation={userGeolocationState} />
          </Route>

        <Route exact path="/personal">
          <Personal />
        </Route>


          <Route exact path="/settings">
            <SettingsListScreen />
          </Route>

        <Route exact path="/settings/personal">
          <PersonalSettingsScreen />
        </Route>

          <Route exact path="/settings/reminders">
            {/*TODO - render home screen*/}
          </Route>
        </Switch>


      <NavBar />
    </div>
    </RecoilRoot>
  );
}

  export default App;
