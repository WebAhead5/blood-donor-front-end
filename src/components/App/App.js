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
import { useSetLogState } from '../../store/logs';
import getLocaleLanguage from '../../utils/getLocaleLanguage'
import { useSetPersonalSettings } from '../../store/personalSettings'


function App() {


  const setLog = useSetLogState()
  const userLanguage = useRecoilValue(userLanguageState)
  const setUserLanguage = useSetUserLanguage()
  const [goalsData, setGoalsData] = useState([])
  const setUserSettings = useSetPersonalSettings()

  //Alert States : 
  const [alertData, setAlertData] = useState([])
  const [jdObject, setJdObject] = useState([]);
  const [homeMenuData, setHomeMenuData] = useState([])

  function parseLocations(err, result) {
    setJdObject(result.data)
  }

  useEffect(() => {
    let logItems = localStorage.getItem('logItems')
    if (logItems) {
      let items = JSON.parse(logItems)
      setLog(items)
    }

  }, [])

  // Save user input to localStorage

  useEffect(() => {
    let cachedState = {
      name: localStorage.getItem('username') || '',
      bloodType: localStorage.getItem('bloodType') || '',
      donationCount: localStorage.getItem('donationCount') || '',
      reminderCount: +localStorage.getItem('reminderCount') || 1,
      mostRecentDonation: localStorage.getItem('mostRecentDonation') || '',
    }
    setUserSettings(cachedState)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  // Alert Effects :
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
