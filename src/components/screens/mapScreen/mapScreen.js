import React from 'react';
import MapBox from "../../general/mapBox/mapBox";
import MainScreenWrapper from "../../general/mainScreenWrapper";
import TitleHeader from "../../general/titleHeader";
import "./mapScreen.css"

function MapScreen({ arrayOfGeolocationObjects }) {
    return (
        <MainScreenWrapper className="mapScreen">
            <TitleHeader title={"Blood Donation Locations"} />
            <MapBox arrayOfGeolocationObjects={arrayOfGeolocationObjects} />
            {/* <button
                className="testShare"
                onClick={async () => {
                    if (navigator.share) {
                        console.log("navigator.share is supported");
                    } else {
                        console.log("navigator.share is NOT supported")
                    }
                    try {
                        await navigator.share({ title: "JD TITLE", text: "JD TEXT VALUE", url: "https://www.bbc.co.uk" })
                        console.log("success in test share");
                    }
                    catch (err) {
                        console.log("error in test Share", err.message);
                    }
                }}
            ></button> */}
        </MainScreenWrapper>
    );
}

export default MapScreen;