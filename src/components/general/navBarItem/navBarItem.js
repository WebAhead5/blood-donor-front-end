import React from 'react';
import './navBarItem.css';


function NavBarItem({title, src, className="", onClick}) {
    return (
        <div className={`navBarItem ${className}`} onClick={onClick}>
            <img className='navBarItem_img' src={src} alt=""/>
            <span className='navBarItem_title'>{title}</span>
        </div>
    );
}

export default NavBarItem;