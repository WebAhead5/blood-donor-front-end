import React from 'react';
import './alertList.css'

const AlertList = (props) => {


    return (
        <div className="alertList_title_container">
            <h3>Alerts</h3>
            <div className="alertList_container">
                {props.children}
            </div>
        </div>

    )
}

export default AlertList;