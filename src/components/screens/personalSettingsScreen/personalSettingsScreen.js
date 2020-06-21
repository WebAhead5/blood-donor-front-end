import React from 'react';
import TitleHeader from '../../general/titleHeader';
import PersonalSettingsInput from '../../general/personalSettingsInput'
import MainScreenWrapper from '../../general/mainScreenWrapper';

const PersonalSettingsScreen = () => {

    return (
        <MainScreenWrapper className='personalSettingsScreen_container'>
            <TitleHeader title='Personal Settings' />
            <PersonalSettingsInput/>
        </MainScreenWrapper>
    )
}

export default PersonalSettingsScreen