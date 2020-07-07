/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import './App.css';
import { IntlProvider } from "react-intl";
import languages from "../../languages";
import SettingsListScreen from '../screens/settingsListScreen'
import NavBar from "../general/navBar";
import { Switch, Route } from "react-router-dom";
import PersonalSettingsScreen from "../screens/personalSettingsScreen";
import Personal from "../screens/personal";
import GoalsScreen from "../screens/goalsScreen";
import HomeScreen from "../screens/homeScreen";
import ReminderSettingsScreen from "../screens/reminderSettingsScreen.jsx";
import MapScreen from "../screens/mapScreen";
import { routes } from "../../constants";
import { callApi } from "../../utils/api"
import { useRecoilValue } from 'recoil'
import { userLanguageState, useSetUserLanguage } from '../../store/userLanguage'
import {personalSettings, useSetPersonalSettings} from '../../store/personalSettings'
import getLocaleLanguage from '../../utils/getLocaleLanguage'
import deepEqual from 'deep-equal'



function App() {


  const userLanguage = useRecoilValue(userLanguageState)
  const setUserLanguage = useSetUserLanguage()

  const userSettings = useRecoilValue(personalSettings)
  const setUserSettings = useSetPersonalSettings()

  const [goalsData, setGoalsData] = useState([])


  //Alert States :
  const [alertData, setAlertData] = useState([])
  const [jdObject, setJdObject] = useState([]);
  const [homeMenuData, setHomeMenuData] = useState([])

  function parseLocations(err, result) {
    setJdObject(result.data)
  }


  // load user settings from local storage
  useEffect(() => {
    let cachedState = {
      name: localStorage.getItem('username') || '',
      bloodType: localStorage.getItem('bloodType') || '',
      donationCount: localStorage.getItem('donationCount') || '',
      reminderCount: +localStorage.getItem('reminderCount') || 1,
      mostRecentDonation: localStorage.getItem('mostRecentDonation') || '',
      loaded:true
    }
    setUserSettings(cachedState)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  // api calls to the back end
  useEffect(() => {

    callApi('GET', '/api/alerts', null, (err, res) => {
      if (err) console.error(err);
      else setAlertData(res.data)

    })

    // HomeMenu Effects :
    callApi('GET', '/api/homeMenu', null, (err, res) => {
      if (err) console.error(err);
      else setHomeMenuData(res.data);
    })

    callApi('GET', '/api/goals', null, (err, res) => {
      if (err) console.error(err);
      else setGoalsData(res.data);
    })


    callApi("GET", "/api/locations", null, parseLocations)

    setUserLanguage(getLocaleLanguage())

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

useEffect(()=>{
  if(userSettings.loaded && alertData.length)
  {
    let filteredRes = alertData.filter(alert=>alert.bloodType.includes(userSettings.bloodType))
    if(!deepEqual(filteredRes,alertData))
      setAlertData(filteredRes)
  }


},[userSettings,alertData])


  return (
    <IntlProvider locale={userLanguage} messages={languages[userLanguage]}>
      <div id="TextDirection"
        style={{
          direction: (userLanguage === "ar" || userLanguage === "he") ? "rtl" : "ltr",
          fontFamily: ['Alef', 'sans-serif'],
        }}
      >
        <Switch>
          <Route exact path={routes.home}>
            <HomeScreen alertsData={alertData} homeHeaderData={homeMenuData} />
          </Route>

          <Route exact path={routes.goals}>
            <GoalsScreen totalGoal={goalsData.goal} currentBloodCount={goalsData.current} />
          </Route>

          <Route exact path={routes.map}>
            <MapScreen arrayOfGeolocationObjects={jdObject} />
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
    </IntlProvider>
  );
}

export default App;
