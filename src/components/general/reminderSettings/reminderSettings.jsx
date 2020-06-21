import React from "react";
import "./reminderSettings.css";
import Button from "../button";

const ReminderSettings = (props) => {
  return (
    <div className="reminderSettings_container" onClick={props.onClick}>
      <div className="icon_container">
        <img
          src={props.icon}
          alt={props.alt}
          className="reminderSettings_icon"
        />
      </div>
      <span>{props.description}</span>
      <div className="button_container">
        <Button className="button" text="Yes" />
        <Button className="button" text="No" />
      </div>
      <div className="input_container">
        <span>{props.enterDetail}</span>
        <form>
          <input type="text" />
        </form>
      </div>
    </div>
  );
};

export default ReminderSettings;
