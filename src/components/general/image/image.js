import React from 'react';

const Image = (props) => {
    return (<img className={props.className}  src={props.src} alt={props.alt} onClick={props.onClick}/>);

}

export default Image;