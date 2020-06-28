import React from 'react'
import './whiteBackgroundShadow.css'

const WhiteBackgroundShadow = ({className,onClick,style,children}) => {

    // Use the component as a part of another div element, and decide the size you want in your parent element.

    return (
        <div className={`whiteBackgroundShadow_container ${className}`} onClick={onClick} style={style}>
            {children}
        </div>
    )
}

export default WhiteBackgroundShadow


