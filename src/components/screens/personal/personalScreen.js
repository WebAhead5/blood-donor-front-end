import React from 'react';
import HistoryLogList from '../../general/historyLogList';
import './personalScreen.css'
import TitleHeader from '../../general/titleHeader'

const PersonalScreen = () => {

    return (
       <div>
           <TitleHeader title='History Log' />
           <HistoryLogList/>
           
       </div>
    )
}

export default PersonalScreen;