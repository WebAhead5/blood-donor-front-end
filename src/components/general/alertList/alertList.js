import React from 'react';
import './alertList.css'
import { FormattedMessage } from 'react-intl'

const AlertList = (props) => {


    return (
        <div className="alertList_title_container">
            {/* adding the language support */}
            <h3><FormattedMessage id="Alerts" /></h3>
            <div className="alertList_container">
                {props.children}
            </div>
        </div>

    )
}

export default AlertList;