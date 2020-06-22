import React from 'react';
import HistoryLogList from '../../general/historyLogList';
import './personalScreen.css'
import TitleHeader from '../../general/titleHeader'
import MainScreenWrapper from '../../general/mainScreenWrapper'


const PersonalScreen = () => {


    return (
        <div>
            <MainScreenWrapper>
                <TitleHeader title='History Log' />
                <HistoryLogList />
            </MainScreenWrapper>
        </div>
    )
}

export default PersonalScreen;