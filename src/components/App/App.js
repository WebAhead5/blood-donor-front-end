
import React from 'react';
import './App.css';
import NavBar from '../general/navBar'
import {  Switch, Route } from "react-router-dom";
import SettingsListScreen from "../screens/settingsListScreen";
import SubHeader from "../general/subHeader";
import MapBox from "../screens/MapBox/MapBox"


function App() {

  return (
    <div>

      <Switch>
        <Route exact path="/">
          {/*TODO - render home screen*/}
        </Route>

        <Route exact path="/goals">
          {/*TODO - render home screen*/}
          <SubHeader/>
        </Route>

        <Route exact path="/map">
         <MapBox/>
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
