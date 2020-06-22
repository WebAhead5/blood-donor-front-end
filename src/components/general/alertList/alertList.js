
import React from 'react';
import './alertList.css'
import { FormattedMessage } from 'react-intl'
import AlertMenuItem from "../alertMenuItem";

const AlertList = ({data }) => {


    return (
        <div className="alertList_title_container" >
            {/* adding the language support */}
            <h3><FormattedMessage id="Alerts" /></h3>
            <div className="alertList_container">

            {data?.map(({title,context},index)=>
                <AlertMenuItem title={title} context={context} key={index}/>
            )}
            </div>
        </div>

    )
}

export default AlertList;