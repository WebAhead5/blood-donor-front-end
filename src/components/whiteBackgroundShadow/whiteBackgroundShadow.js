import React from 'react'
import './whiteBackgroundShadow.css'

const WhiteBackgroundShadow = (props) => {

    // Use the component as a part of another div element, and decide the size you want in your parent element.

    return (
        <div className={`whiteBackgroundShadow_container ${props.className}`}>
            {props.children}
        </div>
    )
}

export default WhiteBackgroundShadow


