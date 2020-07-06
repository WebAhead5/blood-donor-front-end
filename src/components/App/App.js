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
import { routes } from "../../constants";
import { callApi } from "../../utils/api"



function App() {

  //States : 
  const [alertData, setAlertData] = useState([])
  const [jdObject, setJdObject] = useState([]);
  const [homeMenuData, setHomeMenuData] = useState([])

  function parseLocations(err, result) {
    setJdObject(result.data)
  }

  const setTextDirection = useSetTextDirection();

  // Alert Effects :
  useEffect(() => {

    callApi('GET', '/api/alerts', null, (err, res) => {
      if (err) console.log(err);
      else setAlertData(res.data)
    })

    // HomeMenu Effects :
    callApi('GET', '/api/homeMenu', null, (err, res) => {
      if (err) console.log(err);
      else setHomeMenuData(res.data);
    })


    setTextDirection(document.getElementById('TextDirection').style.direction)
    callApi("GET", "/api/locations", null, parseLocations)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const [geolocationArray, setGeolocationArray] = useState();
  useEffect(() => {
    getGeolocation(jdObject).then((result) => {
      setGeolocationArray(result);
    });
  }, [jdObject]);

  return (
    <div>
      <Switch>
        <Route exact path={routes.home}>
          <HomeScreen alertsData={alertData} homeHeaderData={homeMenuData} />
        </Route>

        <Route exact path={routes.goals}>
          <GoalsScreen />
        </Route>

        <Route exact path={routes.map}>
          <MapScreen arrayOfGeolocationObjects={geolocationArray} />
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
