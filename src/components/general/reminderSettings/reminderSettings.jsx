import React from "react";
import "./reminderSettings.css";
import Button from "../button";
import WhiteBackgroundShadow from "../whiteBackgroundShadow";

const ReminderSettings = (props) => {
  return (
    <WhiteBackgroundShadow
      className="reminderSettings_container"
      onClick={props.onClick}
    >
      <div className="reminderSettings_icon_container">
        <img
          src={props.icon}
          alt={props.alt}
          className="reminderSettings_icon"
        />
      </div>
      <div className="border_container">
        <span>{props.description}</span>
        <div className="button_container">
          <Button className="button" text="Yes" />
          <Button className="button" text="No" />
        </div>
        <div className="input_container">
          <span>{props.enterDetail}</span>
          {props.hideInput ? (
            ""
          ) : (
            <form>
              <input type="text" placeholder={props.placeholder} />
            </form>
          )}
        </div>
      </div>
    </WhiteBackgroundShadow>
  );
};

export default ReminderSettings;
