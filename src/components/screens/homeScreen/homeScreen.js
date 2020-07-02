import React from "react";
import MainHeader from "../../general/mainHeader";
import AlertList from "../../general/alertList";
import MainScreenWrapper from "../../general/mainScreenWrapper";
import HomeMenu from "../../general/homeMenu";
import JoinUsNow from "../../general/joinUsNow";

function HomeScreen({ alertsData, homeHeaderData }) {
  return (
    <MainScreenWrapper>
      <MainHeader />
      <HomeMenu data={homeHeaderData} />
      <JoinUsNow/>
      <AlertList data={alertsData} />
    </MainScreenWrapper>
  );
}

export default HomeScreen;
