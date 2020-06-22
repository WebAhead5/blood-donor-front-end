import React from "react";
import "./App.css";
import NavBar from "../general/navBar";
import { Switch, Route } from "react-router-dom";
import SettingsListScreen from "../screens/settingsListScreen";
import SubHeader from "../general/subHeader";
import ReminderSettingsScreen from "../screens/reminderSettingsScreen.jsx";
import PersonalSettingsScreen from "../screens/personalSettingsScreen";
import GoalsScreen from "../screens/goalsScreen";
import HomeScreen from "../screens/homeScreen";

let alerts = [
  { title: "Blood donation needed!", context: "Haifa district" },
  { title: "Blood donation needed!", context: "jerusalem district" },
  { title: "Blood donation needed!", context: "holululu district" },
];

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <HomeScreen alertsData={alerts} />
        </Route>

        <Route exact path="/goals">
          {/*TODO - render home screen*/}
          <SubHeader />
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
