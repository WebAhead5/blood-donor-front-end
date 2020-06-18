import React from 'react';
import './App.css';
import NavBar from '../general/navBar'
import AlertList from '../general/alertList'
import AlertListItem from '../general/alertMenuItem'


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
