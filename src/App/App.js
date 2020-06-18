import React from 'react';
import './App.css';
import NavBar from '../components/general/navBar'
import AlertList from '../components/general/alertList'
import AlertListItem from '../components/general/alertMenuItem'


function App() {

  return (
    <div>
      <AlertList>
        <AlertListItem />
      </AlertList>
      <NavBar />
    </div>
  );
}

export default App;
