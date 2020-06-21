import React from 'react';
import MainHeader from "../../general/mainHeader/mainHeader";
import AlertList from "../../general/alertList";

function HomeScreen({alertsData}) {
    return (
        <div>
            <MainHeader/>
            <AlertList data={alertsData} />
        </div>
    );
}

export default HomeScreen;