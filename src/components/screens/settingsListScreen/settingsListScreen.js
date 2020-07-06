import React, { useEffect } from 'react';
import SettingsList from '../../general/settingsList';
import SettingsListItem from '../../general/settingsListItem';
import './settingsListScreen.css'
import { useHistory } from 'react-router-dom'
import TitleHeader from '../../general/titleHeader'
import MainScreenWrapper from '../../general/mainScreenWrapper'
import { FormattedMessage } from 'react-intl';
import { routes } from "../../../constants";
import { useRecoilValue } from 'recoil';
import { userLanguageState, useSetUserLanguage } from '../../../store/userLanguage';



const data = [
    {
        title: <FormattedMessage id='SettingsPersonal' />,
        redirectionLink: routes.settings_personal,
        iconSrc: "/img/icon-user.svg"
    }, {
        title: <FormattedMessage id='SettingsReminders' />,
        redirectionLink: routes.settings_reminders,
        iconSrc: "/img/icon-notification.svg"
    }, {
        title: <FormattedMessage id='SettingsHowToDonate' />,
        redirectionLink: routes.settings_howToDonate,
        iconSrc: "/img/icon-how-to-donate.svg"
    }, {
        title: <FormattedMessage id='SettingsHelpAndSupport' />,
        redirectionLink: routes.settings_support,
        iconSrc: "/img/icon-help-support.svg"
    }, {
        title: <FormattedMessage id='SettingsContactUs' />,
        redirectionLink: routes.settings_contact,
        iconSrc: "/img/icon-contact-us.svg"
    }, {
        title: <FormattedMessage id='SettingsFAQ' />,
        redirectionLink: routes.settings_faq,
        iconSrc: "/img/icon-FAQ.svg"
    }, {
        title: <FormattedMessage id='SettingsAbout' />,
        redirectionLink: routes.settings_about,
        iconSrc: "/img/icon-about.svg"
    }, {
        title: <FormattedMessage id='Language' />,
        iconSrc: "/img/icon-languages.svg",
        onClick: () => document.getElementById('languages_selection').classList.toggle('hidden', false)
    }
]

const SettingsListScreen = () => {

    const history = useHistory();

    const userLanguage = useRecoilValue(userLanguageState)
    const setUserLanguage = useSetUserLanguage()


    return (
        <MainScreenWrapper className='settingsListScreen_container'>
            <TitleHeader title={<FormattedMessage id='Settings' />} />
            <SettingsList>
                {data.map((element, index) =>
                    <SettingsListItem
                        key={index}
                        onClick={() => {

                            element.redirectionLink && history.push(element.redirectionLink)
                            element.onClick && element.onClick()
                        }}
                        title={element.title}
                        icon={element.iconSrc} />
                )}

            </SettingsList>
            <div className="settingsListScreen_language_select_container hidden" id="languages_selection" onClick={(e) => {
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
