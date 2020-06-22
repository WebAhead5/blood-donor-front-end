import React from "react";
import "./mainHeader.css";

export const MainHeader = (props) => {
  return (
    <div className="mainheader">
      <div className="bckgrnd"></div>
      <img
        src="img/main-header-logo.svg"
        className="mainheader-logo"
        alt="logo"
      />
      <img
        src="img/main-header-img.png"
        className="mainheader-img"
        alt="header-img"
      />
    </div>
  );
};

export default MainHeader;
