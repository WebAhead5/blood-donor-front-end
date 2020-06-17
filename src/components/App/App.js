import React from 'react';
import './App.css';
import NavBar from "../general/navBar";
import SettingsListScreen from '../screens/settingsListScreen'

function App() {
  return (
    <div>
        <SettingsListScreen/>
        <NavBar />
    </div>
  );
}

export default App;
