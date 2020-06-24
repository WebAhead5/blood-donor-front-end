import React from 'react';
import './titleHeader.css'
import BackButton from '../backButton'

const TitleHeader = ({backButton,title,className}) => {
    return (
        <div className={`titleHeader ${className}`}>
            {/* Add backButton={true} if you want to have a back button in your header */}
            {backButton ? <BackButton /> : null}
            <span className="titleHeader_title">{title}</span>
        </div>
    )
}

export default TitleHeader;
