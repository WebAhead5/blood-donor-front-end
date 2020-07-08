import React from 'react'
import './drop.css'


function Drop({ scale, text, percentage }) {

    return (
        <div className="subHeader_dropBorder" style={{ transform: `scale(${scale})` }}>

            {/*the content of the drop*/}
            <div className="subHeader_drop">

                {/*percentage*/}
                <div className="subHeader_percentage">{text}</div>

                {/*the fill of the drop*/}
                <div className="subHeader_dropFill" style={{ height: `${percentage}%` }}>
                    {/*wave effect*/}
                    <div className="subHeader_wave" />
                    {/*background wave effect*/}
                    <div className="subHeader_wave subHeader_wave2" />
                </div>
            </div>
        </div>

    )
}


export default Drop