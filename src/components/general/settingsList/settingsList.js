import React, {Fragment} from 'react'
import './settingsList.css'


const SettingsList = (props) => {

    return (
        <div className="settingsList_container">
           {props.children.map(child=>
            <Fragment>
                {child}
                <div className="settingsList_horizental-line"></div>
            </Fragment>
           )}

        </div>
    )
}

export default SettingsList