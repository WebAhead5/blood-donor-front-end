import React from "react";
import ReminderSettings from "../../general/reminderSettings";
import "./reminderSettingsScreen.css";
import { useHistory } from "react-router-dom";
import TitleHeader from "../../general/titleHeader";

const data = [
  {
    icon: "/img/phone-icon.svg",
    alt: "phone",
    description: "Would you like to recieve SMS remiders ?",
    enterDetail: "Enter your phone number",
  },
  {
    icon: "/img/mail-icon.svg",
    alt: "mail",
    description: "Would you like to recieve remiders to your email?",
    enterDetail: "Enter your phone Email address",
  },
  {
    icon: "/img/bell-icon.svg",
    alt: "bell",
    description: "Would you like to recieve notifications to your phone ?",
    enterDetail: "Enter your phone number",
  },
];

const ReminderSettingsScreen = () => {
  const history = useHistory();

  return (
    <div className="reminderSettingsScreen_container">
      {/* <TitleHeader title="Reminders Settings" /> */}

      {data.map((element, index) => (
        <ReminderSettings
          key={index}
          onClick={() => history.push()}
          description={element.description}
          icon={element.icon}
          enterDetail={element.enterDetail}
        />
      ))}
    </div>
  );
};

export default ReminderSettingsScreen;
