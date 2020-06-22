import React from "react";
import ReminderSettings from "../../general/reminderSettings";
import "./reminderSettingsScreen.css";
import { useHistory } from "react-router-dom";
import TitleHeader from "../../general/titleHeader";

const data = [
  {
    icon: "/img/phone-icon.svg",
    alt: "phone",
    description: "Would you like to recieve SMS reminders ?",
    enterDetail: "Enter your phone number",
    placeholder: "Enter Phone Number...",
  },
  {
    icon: "/img/mail-icon.svg",
    alt: "mail",
    description: "Would you like to recieve remiders to your Email?",
    enterDetail: "Enter your phone Email address",
    placeholder: "Enter Email Address...",
  },
  {
    icon: "/img/bell-icon.svg",
    alt: "bell",
    description: "Would you like to recieve notifications to your phone?",
  },
];

const ReminderSettingsScreen = () => {
  const history = useHistory();

  return (
    <div className="reminderSettingsScreen_container">
      <TitleHeader title="Reminders Settings" />
      {data.map((element, index) => (
        <ReminderSettings
          className="reminderSettingsScreen"
          key={index}
          onClick={() => history.push()}
          description={element.description}
          icon={element.icon}
          enterDetail={element.enterDetail}
          placeholder={element.placeholder}
          hideInput={index === 2}
        />
      ))}
    </div>
  );
};

export default ReminderSettingsScreen;
