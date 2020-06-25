import React, { useState, useEffect } from 'react';
import './App.css';
import SettingsListScreen from '../screens/settingsListScreen'
import NavBar from "../general/navBar";
import getGeolocation from "../general/mapBox/API-Geolocation"

import { Switch, Route } from "react-router-dom";
import PersonalSettingsScreen from "../screens/personalSettingsScreen";
import Personal from "../screens/personal";
import GoalsScreen from "../screens/goalsScreen";
import HomeScreen from "../screens/homeScreen";
import { useSetTextDirection } from '../../store/textDirection';
import ReminderSettingsScreen from "../screens/reminderSettingsScreen.jsx";
import MapScreen from "../screens/mapScreen";

let alerts = [
  { title: "Blood donation needed!", context: "Haifa district" },
  { title: "Blood donation needed!", context: "jerusalem district" },
  { title: "Blood donation needed!", context: "holululu district" },
];

const homeBarData = [
  {
    title: "support us financially",
    src: "/img/dollar-icon.svg",
    redirectionLink: "/settings/support",
  },
  {
    title: "How To Donate Blood",
    src: "/img/icon3.svg",
    redirectionLink: "/settings/how-to-donate",
  },
  {
    title: "ways you could contribute",
    src: "/img/icon2.svg",
    redirectionLink: "/settings/contribute",
  },
];

let jdObject = [
  {
    DateDonation: "2020-06-18T00:00:00",
    FromHour: "16:00",
    ToHour: "19:30",
    Name: "מתנס ירוחם",
    City: "ירוחם",
    Street: "",
    NumHouse: "",
    AccountType: "",
  },
  {
    DateDonation: "2020-06-18T00:00:00",
    FromHour: "16:00",
    ToHour: "19:30",
    Name: "Italian hospital",
    City: "Haifa",
    Street: "",
    NumHouse: "",
    AccountType: "",
  },
  {
    DateDonation: "2020-06-19T00:00:00",
    FromHour: "16:00",
    ToHour: "19:30",
    Name: "German Colony",
    City: "Haifa",
    Street: "",
    NumHouse: "",
    AccountType: "",
  },
  {
    DateDonation: "2020-06-25T00:00:00",
    FromHour: "16:00",
    ToHour: "19:30",
    Name: "The Mossawa Center",
    City: "Haifa",
    Street: "",
    NumHouse: "",
    AccountType: "",
  },
];

function App() {
  const [geolocationArray, setGeolocationArray] = useState();
  useEffect(() => {
    getGeolocation(jdObject).then((result) => {
      setGeolocationArray(result);
    });
  }, []);

  const setTextDirection = useSetTextDirection(); 

  useEffect(() => {
    setTextDirection(document.getElementById('TextDirection').style.direction)
  }, [])

  return (
      <div>
        <Switch>
          <Route exact path="/">
            <HomeScreen alertsData={alerts} homeHeaderData={homeBarData} />
          </Route>

          <Route exact path="/goals">
            <GoalsScreen />
          </Route>

          <Route exact path="/map">
            <MapScreen arrayOfGeolocationObjects={geolocationArray}/>
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
          <ReminderSettingsScreen />
        </Route>
      </Switch>

      <NavBar />
    </div>
  );
}

export default App;
