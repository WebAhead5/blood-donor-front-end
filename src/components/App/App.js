<<<<<<< HEAD
import React from "react";
import "./App.css";
import NavBar from "../general/navBar";
import { Switch, Route } from "react-router-dom";
import SettingsListScreen from "../screens/settingsListScreen";
import SubHeader from "../general/subHeader";
import ReminderSettingsScreen from "../screens/reminderSettingsScreen.jsx";
=======

import React from 'react';
import './App.css';
import NavBar from '../general/navBar'
import PersonalSettingsScreen from '../screens/personalSettingsScreen'
import {  Switch, Route } from "react-router-dom";
import SettingsListScreen from "../screens/settingsListScreen";
>>>>>>> a0defe312ac6048f517301f0da08c0d2b23658ad
import GoalsScreen from "../screens/goalsScreen";
import HomeScreen from "../screens/homeScreen";

<<<<<<< HEAD
=======

let alerts = [
  {title:"Blood donation needed!", context: "Haifa district"},
  {title:"Blood donation needed!", context: "jerusalem district"},
  {title:"Blood donation needed!", context: "holululu district"},
]


>>>>>>> a0defe312ac6048f517301f0da08c0d2b23658ad
function App() {
  return (
    <div>
<<<<<<< HEAD
=======


>>>>>>> a0defe312ac6048f517301f0da08c0d2b23658ad
      <Switch>
        <Route exact path="/">
          <HomeScreen alertsData={alerts}/>
        </Route>

        <Route exact path="/goals">
<<<<<<< HEAD
          {/*TODO - render home screen*/}
          <SubHeader />
=======
>>>>>>> a0defe312ac6048f517301f0da08c0d2b23658ad
          <GoalsScreen />
        </Route>

        <Route exact path="/map">
          {/*TODO - render the map*/}
        </Route>

        <Route exact path="/personal">
          {/*TODO - render home screen*/}
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
