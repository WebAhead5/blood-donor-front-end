import React, { useState } from "react";
import "./reminderSettings.css";
import Button from "../button";
import WhiteBackgroundShadow from "../whiteBackgroundShadow";
// import { isValidEmail } from "../../../utils/validator";

const ReminderSettings = (props) => {
  const [reminderSettings, setReminderSettings] = useState({
    smsReminder: false,
    phoneNumber: "",
  });

  return (
    <WhiteBackgroundShadow className="reminderSettings_container">
      <div className="reminderSettings_icon_container">
        <img
          src={props.icon}
          alt={props.alt}
          className="reminderSettings_icon"
        />
      </div>
      <div className="reminderSettings_vertical_line"></div>
      <div className="border_container">
        <span>{props.description}</span>

        <div className="reminder_button_container">
          <Button
            className="button"
            text="Yes"
            onClick={() =>
              setReminderSettings({ ...reminderSettings, smsReminder: true })
            }
          />
          <Button
            className="button"
            text="No"
            onClick={() =>
              setReminderSettings({ ...reminderSettings, smsReminder: false })
            }
          />
        </div>

        <div className="input_container">
          {props.hideInput ? (
            ""
          ) : reminderSettings.smsReminder ? (
            <form>
              <span>{props.enterDetail}</span>

              <input
                type="text"
                value={reminderSettings.phoneNumber}
                onChange={(e) => {
                  setReminderSettings({
                    ...reminderSettings,
                    phoneNumber: e.target.value,
                  });
                }}
                placeholder={props.placeholder}
              />
            </form>
          ) : null}
        </div>
      </div>
    </WhiteBackgroundShadow>
  );
};

export default ReminderSettings;
