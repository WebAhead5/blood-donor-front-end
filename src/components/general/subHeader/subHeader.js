import React from 'react';
import "./subHeader.css";
import { FormattedMessage } from 'react-intl';
import Drop from '../drop'

function SubHeader({ total = 1000,
    current = 600,
    titlePosPx = 100,
    dropScale = 1,
    className

}) {
    return (
        <div className={`subHeader ${className}`}>

            {/*goal section---------------------------------------------------------------------*/}
            <div className="subHeader_goalGroup" style={{ marginTop: `${titlePosPx}px` }}>
                <span className="subHeader_goalGroup_title"><FormattedMessage id='Goal' /></span>
                <span>{total}</span>
            </div>

            <Drop scale={dropScale} text={`${current/total*100}%`} percentage={current/total*100}/>

            {/*current section---------------------------------------------------------------------*/}
            <div className="subHeader_goalGroup" style={{ paddingTop: `${titlePosPx}px` }}>
                <span className="subHeader_goalGroup_title"><FormattedMessage id='Current' /></span>
                <span>{current}</span>
            </div>


        </div>
    );
}

export default SubHeader;