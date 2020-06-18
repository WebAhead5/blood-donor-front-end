import React from 'react'
import './mainScreenWrapper.css'

const MainScreenWrapper = (props) => {

    return (
        <div className={`mainScreenWrapper ${props.className}`}>
            {props.children}
        </div>
    )

}

export default MainScreenWrapper;