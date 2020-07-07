import React from "react";
import "./homeMenuItem.css";
import WhiteBackgroundShadow from "../whiteBackgroundShadow";

function HomeMenuItem({ icon, text, onClick }) {

  return (
    <WhiteBackgroundShadow className="homeMenuItem" onClick={onClick}>
      <img src={icon} alt="icon" />
      <p>{text}</p>
    </WhiteBackgroundShadow>
  );
}

export default HomeMenuItem;
