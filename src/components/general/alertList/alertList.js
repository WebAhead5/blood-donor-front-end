import React from 'react';
import './alertList.css'

const AlertList = (props) => {

    return (
        <div className="alertList_container">
            {props.children}
            <p>working</p>
        </div>
    )
}

export default AlertList;