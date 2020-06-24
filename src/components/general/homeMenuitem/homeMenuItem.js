import React from "react";
import "./homeMenuItem.css";
import WhiteBackgroundShadow from "../whiteBackgroundShadow";
function HomeMenuItem(props) {
  return (
    <WhiteBackgroundShadow className="homeMenuItem">
      <div onClick={props.onClick}>
        <img src={props.icon} alt="icon" />
        <p>{props.text}</p>
      </div>
    </WhiteBackgroundShadow>
  );
}
export default HomeMenuItem;
