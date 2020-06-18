import React from "react";
import "./App.css";
import NavBar from "../components/general/navBar";
import AlertList from "../components/general/alertList";
import AlertListItem from "../components/general/alertMenuItem";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SettingsListScreen from "../components/screens/settingsListScreen";
import SubHeader from "../general/subHeader";

function App() {
  return (
    <div>
      {/*<Switch>*/}
      {/*  <Route exact path="/">*/}
      {/*    /!*render home screen*!/*/}
      {/*  </Route>*/}

      {/*  <Route exact path="/goals">*/}
      {/*    /!*render home screen*!/*/}
      {/*  </Route>*/}

      {/*  <Route exact path="/personal">*/}
      {/*    /!*render home screen*!/*/}
      {/*  </Route>*/}

      {/*  <Route exact path="/personal">*/}
      {/*    /!*render home screen*!/*/}
      {/*  </Route>*/}

      {/*  <Route exact path="/settings">*/}
      {/*    <SettingsListScreen />*/}
      {/*  </Route>*/}

      {/*  <Route exact path="/settings/personal">*/}
      {/*    /!*render home screen*!/*/}
      {/*  </Route>*/}

      {/*  <Route exact path="/settings/notifications">*/}
      {/*    /!*render home screen*!/*/}
      {/*  </Route>*/}
      {/*</Switch>*/}

      <SubHeader />
      <NavBar />
    </div>
  );
}

export default App;
