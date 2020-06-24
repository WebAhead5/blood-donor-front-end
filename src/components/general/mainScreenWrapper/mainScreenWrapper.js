import React from 'react'
import './mainScreenWrapper.css'

const MainScreenWrapper = ({className, style,children}) => {

    return (
        <div className={`mainScreenWrapper ${className}`} style={style}>
            {children}
        </div>
    )

}

export default MainScreenWrapper;