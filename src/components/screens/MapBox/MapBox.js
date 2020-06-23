import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css'
import "./MapBox.css";

import React, { useState, useEffect, useRef } from "react";
import ReactMapGL, { Marker, NavigationControl, GeolocateControl } from "react-map-gl";
// import Geocoder from "react-map-gl-geocoder";
import Geocoder from 'react-mapbox-gl-geocoder'
import AddToCalendar from './AddToCalendar'
import InfoPanel from './InfoPanel'

import logo from "../../../public/images/logo.png"
import zoomHome from '../../../public/images/pin.svg'

// TODO: What does the reminderButton do?

// TODO: Get data from API working (or datamining if needs be)
// TODO: Refactor some code


// Function to Render MapBox Component
export default function MapBox({ arrayOfGeolocationObjects = [], userGeolocation }) {

    // Searchbar requirement. Geocoder component needs to access ReactMapGl component. 
    let myMap = useRef();
    let searchBar = useRef();

    // if(userGeolocation === undefined){return parseFloat(process.env.REACT_APP_HAIFA_LAT)} else return userGeolocation
    const [viewport, setViewport] = useState({
        latitude: parseFloat(process.env.REACT_APP_HAIFA_LAT),
        longitude: parseFloat(process.env.REACT_APP_HAIFA_LON),
        width: "100vw",
        height: "calc( 100vh - 53px)",
        zoom: 13
    });

    // set state for calendar date change
    const [dateState, setDateState] = useState(
        { date: new Date().toISOString().slice(0, 10) })

    // move home position to user's geolocation
    useEffect(() => {
        if (!userGeolocation) return;
        console.log(userGeolocation.location);
        if (viewport.latitude !== userGeolocation.location.lat || viewport.longitude !== userGeolocation.location.lng)
            setViewport({ ...viewport, latitude: userGeolocation.location.lat, longitude: userGeolocation.location.lng })
    }, [userGeolocation])

    // State for when user clicks a location icon and opens pop-up.
    const [selectedLocation, setSelectedLocation] = useState(null);

    return (
        <div className="mapBoxContainer">
            <ReactMapGL
                ref={myMap}
                {...viewport}
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_PUBLIC}
                onViewportChange={viewport => {
                    setViewport(viewport);
                }}
                onClick={e => {
                    e.preventDefault();
                    setSelectedLocation(null)
                }}
            >
                <input className="dateInput calendar" type='date'
                    onChange={(e) => {
                        console.log(e.target.value)
                        setDateState({ date: e.target.value })
                    }}
                    value={dateState.date}>
                </input>
                <div className="mapBox_searchAndHome">
                    <GeolocateControl className="geolocateControl"/>
                    {/* <NavigationControl className="navigationControl" onViewportChange={(viewport) => setViewport(viewport)}/>          */}
                    
                    <Geocoder
                        // mapRef={myMap}
                        // containerRef={searchBar}
                        // inputClass="searchAndHome"
                        // onViewportChange={(viewport) => setViewport(viewport)}
                        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_PUBLIC}
                        onSelected={(viewport) => setViewport(viewport)}
                        viewport={viewport} hideOnSelect={true}
                    />
             </div>
                {/* Location Icons */}
                {arrayOfGeolocationObjects.map(location => (
                    <Marker
                        key={location.id}
                        latitude={location.lat}
                        longitude={location.lon}
                    // place_name={location.place_name}
                    >
                        <button className="marker-btn"
                            onClick={e => {
                                e.preventDefault();
                                setSelectedLocation(location);
                            }}
                        >
                            <img src={logo} alt="Bloodbank Location Icon" />
                        </button>
                    </Marker>
                ))}
            </ReactMapGL>
            {selectedLocation ? (
                    <InfoPanel selectedLocation={selectedLocation}/>
                ) : null}
            Icons made by <a href="https://www.flaticon.com/authors/those-icons" title="Those Icons">Those Icons</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
        </div>
    );
}