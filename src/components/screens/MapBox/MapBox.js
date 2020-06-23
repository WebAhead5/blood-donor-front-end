import "./MapBox.css";
import React, {useState, useRef} from "react";
import ReactMapGL, {Marker, GeolocateControl} from "react-map-gl";
import Geocoder from 'react-mapbox-gl-geocoder'
import InfoPanel from './InfoPanel'
import moment from "moment";
import MainScreenWrapper from "../../general/mainScreenWrapper";


// TODO: What does the reminderButton do?

// TODO: Get data from API working (or datamining if needs be)
// TODO: Refactor some code


// Function to Render MapBox Component
export default function MapBox({arrayOfGeolocationObjects = []}) {

    // Searchbar requirement. Geocoder component needs to access ReactMapGl component. 
    let myMap = useRef();


    const [viewport, setViewport] = useState({
        latitude: parseFloat(process.env.REACT_APP_HAIFA_LAT),
        longitude: parseFloat(process.env.REACT_APP_HAIFA_LON),
        width: "100vw",
        height: "calc( 100vh - 53px)",
        zoom: 13
    });

    // set state for calendar date change
    const [dateState, setDateState] = useState(moment(Date.now()).format("YYYY-MM-DD"))

    // State for when user clicks a location icon and opens pop-up.
    const [selectedLocation, setSelectedLocation] = useState(null);

    return (
        <MainScreenWrapper className="mapbox">
            <ReactMapGL
                ref={myMap}
                {...viewport}
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_PUBLIC}
                onViewportChange={viewport => setViewport(viewport)}
                onClick={() => setSelectedLocation(null)}
            >


                <div className="mapBox_topFields">

                    <Geocoder
                        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_PUBLIC}
                        onSelected={(viewport) => setViewport(viewport)}
                        viewport={viewport}
                        hideOnSelect={true}
                        inputComponent={data =>
                            <input placeholder="search..." {...data} value={data.value ||""} />
                        }
                        updateInputOnSelect={true}
                    />

                    <GeolocateControl className="mapBox_geolocation"/>


                    <input className="mapBox_dateInput"
                           type='date'
                           onChange={(e) => setDateState(moment(e.target.value).format("YYYY-MM-DD"))}
                           value={dateState}>
                    </input>

                </div>


                {getMarkers(arrayOfGeolocationObjects, (location) => setSelectedLocation(location))}


            </ReactMapGL>
            {selectedLocation ? <InfoPanel selectedLocation={selectedLocation}/> : null}

        </MainScreenWrapper>
    );
}

function getMarkers(locationsArr, onClick) {
    {/* Location Icons */
    }
    return locationsArr.map(location => (
        <Marker
            key={location.id}
            latitude={location.lat}
            longitude={location.lon}>
            <button className="mapBox_marker" alt="Bloodbank Location Icon" onClick={() => onClick(location)}/>

        </Marker>
    ))
}
