import React from 'react';
import { useHistory } from 'react-router-dom';
import './backButton.css'



const BackButton = () => {

    let history = useHistory();

    function onClickGoBackArrow() {
      
        history.goBack();
    }
  
    return (<img className="backButton_general"
  
      onClick={() => onClickGoBackArrow()}
      alt="back button"
      src="/img/icon-arrow.svg" />);
  
  }

  export default BackButton
