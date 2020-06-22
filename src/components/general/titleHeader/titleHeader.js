import React from 'react';
import './titleHeader.css'
import BackButton from '../backButton'

const TitleHeader = (props) => {
    return (
        <div className='titleHeader_container'>
            {/* Add backButton={true} if you want to have a back button in your header */}
            {props.backButton ? <BackButton /> : null}
            <span className="titleHeader_title">{props.title}</span>
        </div>
    )
}

export default TitleHeader
