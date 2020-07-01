import React from "react";
import MainHeader from "../../general/mainHeader";
import AlertList from "../../general/alertList";
import MainScreenWrapper from "../../general/mainScreenWrapper";
import HomeMenu from "../../general/homeMenu";
import {callApi} from "../../../utils/api"

function HomeScreen({ alertsData, homeHeaderData }) {
  callApi("GET","/api/locations",null,()=>{console.log("done");
  })
  return (
    <MainScreenWrapper>
      <MainHeader />
      <HomeMenu data={homeHeaderData} />
      <AlertList data={alertsData} />
    </MainScreenWrapper>
  );
}

export default HomeScreen;
