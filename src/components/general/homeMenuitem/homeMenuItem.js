import React from 'react';
import "./homeMenuItem.css"
import WhiteBackgroundShadow from "../whiteBackgroundShadow";
function HomeMenuItem(props) {
    return (
        <WhiteBackgroundShadow className="homeMenuItem">
            <img src={props.icon} alt="icon" />
            <p>{props.text}</p>
        </WhiteBackgroundShadow>
    );
}
export default HomeMenuItem;