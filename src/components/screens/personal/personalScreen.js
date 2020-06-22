import React from 'react';
import HistoryLogList from '../../general/historyLogList';
import './personalScreen.css'
import { useHistory } from 'react-router-dom'
import TitleHeader from '../../general/titleHeader'

const PersonalScreen = () => {

    const history = useHistory();

    return (
       <div>
           <TitleHeader title='History Log' />
           <HistoryLogList/>
           
       </div>
    )
}

export default PersonalScreen;