import React, { useState, useEffect } from 'react';
import './App.css';
import { IntlProvider } from "react-intl";
import languages from "../../languages";
import SettingsListScreen from '../screens/settingsListScreen'
import NavBar from "../general/navBar";
import getGeolocation from "../general/mapBox/API-Geolocation"
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
import getLocaleLanguage from '../../utils/getLocaleLanguage'



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
    redirectionLink: routes.settings_contribute,
  },
];






function App() {


  const userLanguage = useRecoilValue(userLanguageState)
  const setUserLanguage = useSetUserLanguage()
  

  //Alert States : 
  const [alertData, setAlertData] = useState([])


  const [jdObject, setJdObject] = useState([]);

  function parseLocations(err, result) {
    setJdObject(result.data)
  }

  useEffect(() => {
    // callApi('GET', '/api/alerts', null, (err, res) => {
    //   if (err) console.log(err);
    //   else setAlertData(res.data)
    // })
    callApi("GET", "/api/locations", null, parseLocations)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  useEffect(() => {
    setUserLanguage(getLocaleLanguage())
  },[])


  const [geolocationArray, setGeolocationArray] = useState();
  useEffect(() => {
    getGeolocation(jdObject).then((result) => {
      setGeolocationArray(result);
    });
  }, [jdObject]);

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
          <HomeScreen alertsData={alertData} homeHeaderData={homeBarData} />
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
    </IntlProvider>
  );
}

export default App;
