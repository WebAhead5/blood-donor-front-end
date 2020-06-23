import React from 'react';
import MainHeader from "../../general/mainHeader";
import AlertList from "../../general/alertList";
import MainScreenWrapper from '../../general/mainScreenWrapper'


function HomeScreen({ alertsData }) {
    return (
        <div>
            <MainScreenWrapper>
                <MainHeader />
                <AlertList data={alertsData} />
            </MainScreenWrapper>
        </div>
    );
}

export default HomeScreen;