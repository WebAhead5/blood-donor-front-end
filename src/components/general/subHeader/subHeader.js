import React from 'react';
import "./subHeader.css"

function SubHeader({total = 1000, current = 0,titlePosPx=100}) {
    return (
        <div className="subHeader">

            {/*goal section---------------------------------------------------------------------*/}
            <div className="subHeader_goalGroup" style={{marginTop:`${titlePosPx}px`}}>
                <span className="subHeader_goalGroup_title">goal</span>
                <span>{total}</span>
            </div>


            {/*drop section---------------------------------------------------------------------*/}

            {/*this div add a border to the drop*/}
            <div className="subHeader_dropBorder">
                {/*the content od the drop*/}
                <div className="subHeader_drop">
                    {/*the fill of the drop*/}
                    <div className="subHeader_dropFill" style={{height: `${current / total * 100}%`}}>
                        {/*wave effect*/}
                        <div className="subHeader_wave"/>
                        {/*background wave effect*/}
                        <div className="subHeader_wave subHeader_wave2"/>
                    </div>
                </div>
            </div>


            {/*current section---------------------------------------------------------------------*/}
            <div className="subHeader_goalGroup" style={{paddingTop:`${titlePosPx}px`}}>
                <span className="subHeader_goalGroup_title">current</span>
                <span>{current}</span>
            </div>


        </div>
    );
}

export default SubHeader;