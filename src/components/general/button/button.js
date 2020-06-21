import React from 'react'
import './button.css'
import WhiteBackgroundShadow from '../whiteBackgroundShadow'


const Button = (props) => {
    

    //changed the WhiteBackgroundShadow.css style in order to change the size/background of the button
    return (
        <WhiteBackgroundShadow className="general_button_shodow_container">
            <button className={`general_button ${props.className}`} type="button" onClick={props.onClick}>{props.text}</button>
        </WhiteBackgroundShadow>
    );
}

export default Button;