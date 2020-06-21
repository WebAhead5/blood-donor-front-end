import React from 'react'
import WhiteBackgroundShodow from '../whiteBackgroundShadow'
import './personalSettingsInput.css'

const PersonalSettingsInput = (props) => {

    return (
        <WhiteBackgroundShodow className={`personalSettingsInput_container ${props.className}`}>

            <div className="personalSettingsInput_icon_container" >
                <img className="personalSettingsInput_icon" src={props.icon} alt={props.alt} />
            </div>
            <div className='personalSettingsInput_vertical_line'></div>
            <div className={`personalSettingsInput_content ${props.contentClassName}`}>
                {/* Default is an input for the name */}
                {props.children}
            </div>

        </WhiteBackgroundShodow>
    )
}

export default PersonalSettingsInput