import React from "react";
import "./titleHeader.css";

const TitleHeader = (props) => {
  return (
    <div className="titleHeader_container">
      <span className="titleHeader_title">{props.title}</span>
    </div>
  );
};

export default TitleHeader;
