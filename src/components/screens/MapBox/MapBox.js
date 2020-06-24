import "./MapBox.css";
import React, {useState, useRef} from "react";
import ReactMapGL, {Marker, GeolocateControl, NavigationControl} from "react-map-gl";
import Geocoder from 'react-mapbox-gl-geocoder'
import InfoPanel from './InfoPanel'
import moment from "moment";
import MainScreenWrapper from "../../general/mainScreenWrapper";
import TitleHeader from "../../general/titleHeader";


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

        zoom: 13
    });


    // set state for calendar date change
    const [dateState, setDateState] = useState(moment(Date.now()).format("YYYY-MM-DD"))


    // State for when user clicks a location icon and opens pop-up.
    const [selectedLocation, setSelectedLocation] = useState(null);


    //show an error message if env file is not set
    if (!process.env.REACT_APP_MAPBOX_PUBLIC)
        return <MainScreenWrapper style={{display: "flex", justifyContent: "center", alignItems: "center"}}>server
            error</MainScreenWrapper>


    return (
        <MainScreenWrapper className="mapbox">

            <TitleHeader title={"title"}/>

            {/* map component */}

                <ReactMapGL
                    ref={myMap}
                    {...viewport}
                    mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_PUBLIC}
                    onViewportChange={viewport => setViewport(viewport)}
                    onClick={() => setSelectedLocation(null)}
                    className="mapBox_map"
                    width={"100%"}
                    height={"calc( 100% - 66px)"}
                    style={{top:"var(--titleHeader-field-height)"}}

                >

                    {/*search field + live location  +  date field*/}
                    <div className="mapBox_topFields">

                        {/*search field*/}
                        <Geocoder
                            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_PUBLIC}
                            onSelected={(viewport) => setViewport(viewport)}
                            viewport={viewport}
                            hideOnSelect={true}
                            inputComponent={data =>
                                <input placeholder="search..." {...data} value={data.value || ""}/>
                            }
                            updateInputOnSelect={true}
                        />

                        {/*live location field*/}
                        <GeolocateControl className="mapBox_geolocation"/>

                        {/*date field*/}
                        <input className="mapBox_dateInput"
                               type='date'
                               onChange={(e) => setDateState(moment(e.target.value).format("YYYY-MM-DD"))}
                               value={dateState}>
                        </input>

                        <NavigationControl showZoom={true} showCompass={false} className="mapBox_zoom"/>

                    </div>

                    {/*map marks*/}
                    {getMarkers(arrayOfGeolocationObjects, (location) => setSelectedLocation(location))}


                </ReactMapGL>

            {/*show popup if a location is selected*/}
            {selectedLocation ? <InfoPanel selectedLocation={selectedLocation}/> : null}


        </MainScreenWrapper>

    );
}

function getMarkers(locationsArr, onClick) {

    return locationsArr?.map(location =>
        <Marker
            key={location.id}
            latitude={location.lat}
            longitude={location.lon}>
            <button className="mapBox_marker" alt="Bloodbank Location Icon"
                    onClick={() => onClick && onClick(location)}/>
        </Marker>
    )
}
