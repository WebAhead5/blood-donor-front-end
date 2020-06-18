import React from "react";
import "./App.css";
import SettingsListScreen from "../screens/settingsListScreen";
import NavBar from "../general/navBar";
import HomeMenu from "../general/HomeMenu";

function App() {
  return (
    <div>
      <HomeMenu />
      <SettingsListScreen />
      <NavBar />
    </div>
  );
}

export default App;
