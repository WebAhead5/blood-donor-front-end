import React from 'react';
import './App.css';
import SettingsListScreen from '../screens/settingsListScreen'
import MapBox from '../screens/MapBox/MapBox'
import NavBar from "../general/navBar";

function App() {
  return (
    <div>
     {/* <SettingsListScreen/> */}
     <MapBox/>
        <NavBar />

    </div>

  );
}

export default App;
