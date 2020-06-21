import React, {useState, useEffect} from 'react';
import './App.css';
import SettingsListScreen from '../screens/settingsListScreen'
import MapBox from '../screens/MapBox/MapBox'
import NavBar from "../general/navBar";
import getGeolocation from "../screens/MapBox/API-Geolocation"
import getUserGeolocation from "../screens/MapBox/API-UserGeolocation"

let jdObject = [
  {
  "DateDonation": "2020-06-18T00:00:00",
  "FromHour": "16:00",
  "ToHour": "19:30",
  "Name": "מתנס ירוחם",
  "City": "ירוחם",
  "Street": "",
  "NumHouse": "",
  "AccountType": ""
},
{
  "DateDonation": "2020-06-18T00:00:00",
  "FromHour": "16:00",
  "ToHour": "19:30",
  "Name": "Italian hospital",
  "City": "Haifa",
  "Street": "",
  "NumHouse": "",
  "AccountType": ""
},
{
  "DateDonation": "2020-06-18T00:00:00",
  "FromHour": "16:00",
  "ToHour": "19:30",
  "Name": "German Colony",
  "City": "Haifa",
  "Street": "",
  "NumHouse": "",
  "AccountType": ""
}
];

function App() {
  const [geolocationArray, setGeolocationArray] = useState()
  useEffect(()=>{
    getGeolocation(jdObject)
    .then((result)=>{
      console.log("RESULT IS",result);
      
      setGeolocationArray(result)
    })
  },[])

  const [userGeolocationState, setUserGeolocationState] = useState()
  useEffect(()=>{
    getUserGeolocation()
    .then((result)=>{
      console.log("userGeolocation RESULT IS",result);
      
      setUserGeolocationState(result)
    })
  },[])

setTimeout(console.log("TIMEOUT",userGeolocationState), 2000
)

  return (
    <div>
     {/* <SettingsListScreen/> */}
     <MapBox arrayOfGeolocationObjects={geolocationArray} userGeolocation={userGeolocationState}/>
        <NavBar />

    </div>

  );
}

export default App;
