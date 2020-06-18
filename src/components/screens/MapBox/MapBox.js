import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css'
import "./MapBox.css";
import { fetchCoords, dummyLocationsObject } from './API-Geolocation';

import React, { useState, useEffect, useRef } from "react";
import ReactMapGL, { Marker, Popup, NavigationControl } from "react-map-gl";
import Geocoder from "react-map-gl-geocoder";

import logo from "../../../public/images/logo.png"

// TODO: Need to take data as per Farid research
// TODO: Need to link Farid website data and make map update
// TODO: Need to update CSS
// TODO: Need button to reset map to current user location
// TODO: Need panel at bottom to show opening times of bloodbank.
// TODO: Need buttons at bottom to 'set a reminder' and 'share'(to calendar?)

// Function to Render MapBox Component
export default function MapBox() {

    // Fetching coordinates from the API call. We need to input a location search string, eg "Italian Hospital, Haifa"
    useEffect(() => {
        fetchCoords()
            .then((apiResponse) => { console.log(apiResponse) })
    }, [])
    // Searchbar requirement. Geocoder component needs to access ReactMapGl component. 
    let myMap = useRef();

    // Set state with parameters for how the MapBox map will appear
    const [viewport, setViewport] = useState({
        latitude: parseFloat(process.env.REACT_APP_HAIFA_LAT),
        longitude: parseFloat(process.env.REACT_APP_HAIFA_LON),
        width: "70vw",
        height: "70vh",
        zoom: 13
    });

    // State for when user clicks a location icon and opens pop-up.
    const [selectedLocation, setSelectedLocation] = useState(null);

    return (
        <div>
            <ReactMapGL
                ref={myMap}
                {...viewport}
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_PUBLIC}
                onViewportChange={viewport => {
                    setViewport(viewport);
                }}
            >
                <div className="navStyle"><NavigationControl onViewportChange={(viewport) => setViewport(viewport)} /></div>
                <div>
                    <Geocoder
                        mapRef={myMap}
                        onViewportChange={(viewport) => setViewport(viewport)}
                        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_PUBLIC}
                    />
                </div>
                {dummyLocationsObject.map(location => (
                    <Marker
                        key={location.locationId}
                        latitude={location.lat}
                        longitude={location.lon}
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
        </div>
    );
}
