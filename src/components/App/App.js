import React from 'react';
import './App.css';
import NavBar from '../general/navBar'
import AlertList from '../general/alertList'
import AlertListItem from '../general/alertMenuItem'
import SettingListScreen from '../screens/settingsListScreen'


function App() {

  return (
    <div>

        <SettingListScreen />
        <NavBar />

    </div>
  );
}

export default App;
