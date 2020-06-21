import React from 'react'
import './personalSettingsInput.css'

const PersonalSettingsInput = (props) => {

    return (
        <div className="personalSettingsInput_container">

            <div className="personalSettingsInput_icon">
                <img src={props.icon} alt={props.alt} />
            </div>
            <div className="personalSettingsInput_content">
                {props.children ? props.children : <div>
                    <label for='name' />
                    <input type="text" value={props.value} className='personalSettingsInput_textContainer' /></div>
                }
            </div>

        </div>
    )
}

export default PersonalSettingsInput