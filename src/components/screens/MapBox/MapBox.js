import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css'
import "./MapBox.css";

import React, { useState, useEffect, useRef } from "react";
import ReactMapGL, { Marker, Popup, NavigationControl } from "react-map-gl";
import Geocoder from "react-map-gl-geocoder";

import logo from "../../../public/images/logo.png"
import zoomHome from '../../../public/images/pin.svg'
// TODO: Need to take data as per Farid research
// TODO: Need to link Farid website data and make map update
// TODO: Need to update CSS
// TODO: Need button to reset map to current user location
// TODO: Need panel at bottom to show opening times of bloodbank.
// TODO: Need buttons at bottom to 'set a reminder' and 'share'(to calendar?)

console.log("geolocationResults IN MAPBOX",);

// Function to Render MapBox Component
export default function MapBox({ arrayOfGeolocationObjects = [], userGeolocation }) {

    // Searchbar requirement. Geocoder component needs to access ReactMapGl component. 
    let myMap = useRef();

    // if(userGeolocation === undefined){return parseFloat(process.env.REACT_APP_HAIFA_LAT)} else return userGeolocation
    const [viewport, setViewport] = useState({
        latitude: parseFloat(process.env.REACT_APP_HAIFA_LAT),
        longitude: parseFloat(process.env.REACT_APP_HAIFA_LON),
        width: "100vw",
        height: "90vh",
        zoom: 13
    });

    useEffect(() => {

        
        if(!userGeolocation) return;
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
            >
                <div className="navStyle zoomButtons">
                    <button className='pinButton' onClick={() => { 
                        console.log(viewport);
                        
                        return myMap.current.getMap().flyTo({ center: [userGeolocation.location.lng, userGeolocation.location.lat] })}}>
                        <img src={zoomHome} alt="Zoom Home Icon" />
                    </button>
                    <NavigationControl onViewportChange={(viewport) => setViewport(viewport)} />

                </div>
                <div className="searchAndHome">
                    <Geocoder
                        mapRef={myMap}
                        onViewportChange={(viewport) => setViewport(viewport)}
                        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_PUBLIC}
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
                        <button
                            className="marker-btn"
                            onClick={e => {
                                e.preventDefault();
                                setSelectedLocation(location);
                            }}
                        >
                            <img src={logo} alt="Bloodbank Location Icon" />
                        </button>
                    </Marker>
                ))}
                {selectedLocation ? (
                    <Popup
                        latitude={selectedLocation.lat}
                        longitude={selectedLocation.lon}
                        id={selectedLocation.id}
                        onClose={() => {
                            setSelectedLocation(null);
                        }}
                    >
                        <div>
                            <h2>Here's the additional info for the location</h2>
                            <h2>Here's the info from the object {selectedLocation.id} {selectedLocation.lat} {selectedLocation.lon}</h2>
                        </div>
                    </Popup>
                ) : null}

            </ReactMapGL>

            Icons made by <a href="https://www.flaticon.com/authors/those-icons" title="Those Icons">Those Icons</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
        </div>
    );
}