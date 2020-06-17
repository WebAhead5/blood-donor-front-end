import React from 'react'
import './settingsList.css'

const SettingsList = (props) => {
    return (
        <div className="settingsList_container">
           {props.children}
        </div>
    )
}

export default SettingsList