import React from 'react';
import MapBox from "../../general/mapBox/mapBox";
import MainScreenWrapper from "../../general/mainScreenWrapper";
import TitleHeader from "../../general/titleHeader";
import "./mapScreen.css"

function MapScreen({arrayOfGeolocationObjects}) {
    return (
        <MainScreenWrapper className="mapScreen">
            <TitleHeader title={"Blood Donation Locations"}/>
            <MapBox arrayOfGeolocationObjects={arrayOfGeolocationObjects}/>
        </MainScreenWrapper>
    );
}

export default MapScreen;