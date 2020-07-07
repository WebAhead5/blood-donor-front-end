import React, {useEffect} from 'react';
import SettingsList from '../../general/settingsList';
import SettingsListItem from '../../general/settingsListItem';
import './settingsListScreen.css'
import {useHistory} from 'react-router-dom'
import TitleHeader from '../../general/titleHeader'
import MainScreenWrapper from '../../general/mainScreenWrapper'
import {FormattedMessage} from 'react-intl';
import {routes} from "../../../constants";
import {useRecoilValue} from 'recoil';
import {userLanguageState, useSetUserLanguage} from '../../../store/userLanguage';


const staticData = [
    {
        title: <FormattedMessage id='SettingsPersonal'/>,
        redirectionLink: routes.settings_personal,
        src: "/img/icon-user.svg"
    }, {
        title: <FormattedMessage id='SettingsReminders'/>,
        redirectionLink: routes.settings_reminders,
        src: "/img/icon-notification.svg"
    }

    , {
        title: <FormattedMessage id='Language'/>,
        src: "/img/icon-languages.svg",
        onClick: () => document.getElementById('languages_selection').classList.toggle('hidden', false)
    }
]

const SettingsListScreen = ({data = []}) => {

    const history = useHistory();

    const userLanguage = useRecoilValue(userLanguageState)
    const setUserLanguage = useSetUserLanguage()


    return (
        <MainScreenWrapper className='settingsListScreen_container'>
            <TitleHeader title={<FormattedMessage id='Settings'/>}/>
            <SettingsList>
                {[staticData[0], staticData[1], ...data, staticData[2]].map((element, index) =>
                    <SettingsListItem
                        key={index}
                        onClick={() => {
                            if (element.redirectionLink)
                                if (staticData.includes(element))
                                    history.push(element.redirectionLink)
                                else
                                    window.open(element.redirectionLink)

                            element.onClick && element.onClick()
                        }}
                        title={(staticData.includes(element)) ? element.title : element.title[userLanguage]}
                        icon={element.src}/>
                )}
            </SettingsList>


            <div className="settingsListScreen_language_select_container hidden" id="languages_selection"
                 onClick={(e) => {
                     if (e.target === e.currentTarget)
                         e.target.classList.toggle('hidden', true)
                 }}>
                <select className="settingsListScreen_language_select" value={userLanguage} onChange={(e) => {
                    localStorage.setItem('userLang', e.target.value)
                    setUserLanguage(e.target.value)
                    e.target.parentElement.classList.toggle('hidden', true)
                }}>
                    <option value="he">עברית</option>
                    <option value="en">English</option>
                    <option value="ar">العربيه</option>
                </select>
            </div>
        </MainScreenWrapper>
    )
}

export default SettingsListScreen;
