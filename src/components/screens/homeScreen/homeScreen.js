import React from "react";
import MainHeader from "../../general/mainHeader";
import AlertList from "../../general/alertList";
import MainScreenWrapper from "../../general/mainScreenWrapper";
import HomeMenu from "../../general/homeMenu";
// import JoinUsNow from "../../general/joinUsNow";
import YourPersonalGoals from "../../general/yourPersonalGoals";
// import FindAndRegisterButtons from "../../general/findAndRegisterButtons/findAndRegisterButtons";

function HomeScreen({ alertsData, homeHeaderData }) {  
  return (
    <MainScreenWrapper>
      <MainHeader />
      <HomeMenu data={homeHeaderData} />
      <YourPersonalGoals/>
      {/* TODO: These components have been removed for the presentation. They need to be displayed when state conditions are met. TBC */}
      {/* <JoinUsNow/>
      <FindAndRegisterButtons/> */}
      <AlertList data={alertsData} />
    </MainScreenWrapper>
  );
}

export default HomeScreen;
