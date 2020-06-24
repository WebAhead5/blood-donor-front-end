import React from "react";
import ReminderSettings from "../../general/reminderSettings";
import "./reminderSettingsScreen.css";
import TitleHeader from "../../general/titleHeader";
import MainScreenWrapper from "../../general/mainScreenWrapper";

const data = [
  // {
  //   icon: "/img/phone-icon.svg",
  //   alt: "phone",
  //   description: "Would you like to recieve SMS reminders ?",
  //   enterDetail: "Enter your phone number",
  //   placeholder: "Enter Phone Number...",
  // },
  // {
  //   icon: "/img/mail-icon.svg",
  //   alt: "mail",
  //   description: "Would you like to recieve remiders to your Email?",
  //   enterDetail: "Enter your Email address",
  //   placeholder: "Enter Email Address...",
  // },
  {
    icon: "/img/bell-icon.svg",
    alt: "bell",
    description: "Would you like to recieve notifications to your phone?",
  },
];

const ReminderSettingsScreen = () => {
  return (
    <MainScreenWrapper className="reminderSettingsScreen_container">
      <TitleHeader title="Reminders Settings" backButton={true} className='reminderSettingsScreen_titleHeader'/>
      {data.map((element, index) => (
        <ReminderSettings
          key={index}
          description={element.description}
          icon={element.icon}
          enterDetail={element.enterDetail}
          placeholder={element.placeholder}
          hideInput={index === 0}
        />
      ))}
    </MainScreenWrapper>
  );
};

export default ReminderSettingsScreen;
