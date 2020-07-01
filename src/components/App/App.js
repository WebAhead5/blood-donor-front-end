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
import {routes} from "../../constants";
import {callApi} from "../../utils/api"



let alerts = [
  { title: "Blood donation needed!", context: "Haifa district" },
  { title: "Blood donation needed!", context: "jerusalem district" },
  { title: "Blood donation needed!", context: "holululu district" },
];

const homeBarData = [
  {
    title: "support us financially",
    src: "/img/dollar-icon.svg",
    redirectionLink: routes.settings_support,
  },
  {
    title: "How To Donate Blood",
    src: "/img/icon3.svg",
    redirectionLink: routes.settings_howToDonate,
  },
  {
    title: "ways you could contribute",
    src: "/img/icon2.svg",
    redirectionLink:routes.settings_contribute,
  },
];


function App() {
  const [jdObject,setJdObject] = useState([]);
 
  function parseLocations(err,result){
    setJdObject(result.result)
  }

  useEffect(()=> {
    callApi("GET","/api/locations",null,parseLocations)
  },[])
  
  const [geolocationArray, setGeolocationArray] = useState();
  useEffect(() => {
    getGeolocation(jdObject).then((result) => {
      setGeolocationArray(result);
    });
  }, [jdObject]);

  const setTextDirection = useSetTextDirection(); 

  useEffect(() => {
    setTextDirection(document.getElementById('TextDirection').style.direction)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
      <div>
        <Switch>
          <Route exact path={routes.home}>
            <HomeScreen alertsData={alerts} homeHeaderData={homeBarData} />
          </Route>

          <Route exact path={routes.goals}>
            <GoalsScreen />
          </Route>

          <Route exact path={routes.map}>
            <MapScreen arrayOfGeolocationObjects={geolocationArray}/>
          </Route>

        <Route exact path={routes.personal}>
          <Personal />
        </Route>

        <Route exact path={routes.settings}>
          <SettingsListScreen />
        </Route>

          <Route exact path={routes.settings_personal}>
            <PersonalSettingsScreen />
          </Route>

        <Route exact path={routes.settings_reminders}>
          <ReminderSettingsScreen />
        </Route>
      </Switch>

      <NavBar />
    </div>
  );
}

export default App;
