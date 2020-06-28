import React, { useState, useRef, useEffect } from "react";
import ReactMapGL, { Marker, GeolocateControl, NavigationControl } from "react-map-gl";
import Geocoder from 'react-mapbox-gl-geocoder'
import moment from "moment";
import deepEquals from 'deep-equal'
import "./mapBox.css";
import MapInfoPanel from '../mapInfoPanel'
import MainScreenWrapper from "../../general/mainScreenWrapper";
import { useRecoilValue } from 'recoil'
import { textDirection } from '../../../store/textDirection'
import { injectIntl } from 'react-intl' 

// Function to Render mapBox Component
function MapBox({ arrayOfGeolocationObjects = [], className, intl }) {

    const [searchInputState, setSearchInputState] = useState(false);
    let searchInput = useRef()

    function focusInput() {
        if (searchInput.current) {
            searchInput.current.focus()
        };
    }

    React.useLayoutEffect(() => {
        if (searchInputState) focusInput();
    })

    React.useEffect(()=>{
        function screenPressed(event){
                setSearchInputState(event.target.id === "searchInput")            
        }
        document.addEventListener('click', screenPressed )
        return ()=>{document.removeEventListener('click', screenPressed)}
    },[])

    // Searchbar requirement. Geocoder component needs to access ReactMapGl component. 
    let myMap = useRef();

    // text direction (rtl / ltr)
    const direction = useRecoilValue(textDirection)

    //the state of the viewport
    const [viewport, setViewport] = useState({
        latitude: parseFloat(process.env.REACT_APP_HAIFA_LAT),
        longitude: parseFloat(process.env.REACT_APP_HAIFA_LON),

        zoom: 11
    });

    // set state for calendar date change
    const [dateState, setDateState] = useState(moment(Date.now()).format("YYYY-MM-DD"))

    //the filtered arrayOfGeolocationObjects - marks
    const [marks, setMarks] = useState([])

    // State for when user clicks a location icon and opens pop-up.
    const [selectedLocation, setSelectedLocation] = useState(null);

    //whenever a date is selected, the marks are filtered/updated
    useEffect(() => {

        let filterRes = filterLocationsBasedOnDate(arrayOfGeolocationObjects, dateState)
        if (deepEquals(marks, filterRes))
            return;
        setMarks(filterRes)

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dateState, arrayOfGeolocationObjects])

    //show an error message if env file is not set
    if (!process.env.REACT_APP_MAPBOX_PUBLIC)
        return (<MainScreenWrapper style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            server error
        </MainScreenWrapper>)

    // Search placeholder translated text.

    const searchPlaceholder = intl.formatMessage({ id: 'SearchPlaceholder' })

    return (
        <div className={`mapbox ${className}`}>


            {/* map component */}

            <ReactMapGL
                ref={myMap}
                {...viewport}
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_PUBLIC}
                onViewportChange={viewport => setViewport(viewport)}
                onClick={() => setSelectedLocation(null)}
                className="mapBox_map"
                width={"100%"}
                height={"100%"}

            >

                {/*search field + live location  +  date field*/}
                <div className="mapBox_topFields">

                    {/*search field*/}
                    <Geocoder
                        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_PUBLIC}
                        onSelected={(viewport) => {
                            setViewport(viewport)

                        }}
                        viewport={viewport}
                        hideOnSelect={true}
                        inputComponent={data =>
                            <input id="searchInput" placeholder={searchPlaceholder} {...data} value={data.value || ""} ref={searchInput} />
                        }
                        updateInputOnSelect={true}
                    />

                    {/*live location field*/}
                    <GeolocateControl className="mapBox_geolocation" />

                    {/*date field*/}
                    <input className="mapBox_dateInput"
                        type='date'
                        onChange={(e) => setDateState(moment(e.target.value).format("YYYY-MM-DD"))}
                        value={dateState}
                        min={moment().format('YYYY-MM-DD')}
                    >
                    </input>

                    {/*zoom controls*/}
                    <NavigationControl showZoom={true} showCompass={false} className={`mapBox_zoom ${direction === 'rtl' && 'mapBox_zoom_rtl'}`} />

                </div>

                {/*map marks*/}
                {getMarkers(marks, (location) => setSelectedLocation(location))}


            </ReactMapGL>

            {/*show popup if a location is selected*/}
            {selectedLocation ? <MapInfoPanel selectedLocation={selectedLocation} /> : null}


        </div>

    );
}


function getMarkers(locationsArr, onClick) {

    return locationsArr?.map(location =>
        <Marker
            key={location.id}
            latitude={location.lat}
            longitude={location.lon}>
            <button className="mapBox_marker" alt="Bloodbank Location Icon"
                onClick={() => onClick && onClick(location)} />
        </Marker>
    )
}

function filterLocationsBasedOnDate(locationsArr, date) {
    let filteringDate = moment(date).format("YYYY-MM-DD")
    let returnVal = locationsArr?.filter(location => filteringDate === moment(location.dateDonation).format("YYYY-MM-DD"));
    return returnVal || [];
}

export default injectIntl(MapBox)
