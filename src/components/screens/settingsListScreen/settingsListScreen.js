import React from 'react';
import SettingsList from '../../general/settingsList';
import SettingsListItem from '../../general/settingsListItem';
import './settingsListScreen.css'
import { useHistory } from 'react-router-dom'
import TitleHeader from '../../general/titleHeader'
import MainScreenWrapper from '../../general/mainScreenWrapper'
import { FormattedMessage } from 'react-intl';
import {routes} from "../../../constants";



const data=[
    {
        title:<FormattedMessage id='SettingsPersonal'/> ,
        redirectionLink:routes.settings_personal,
        iconSrc:"/img/icon-user.svg"
    },{
        title:<FormattedMessage id='SettingsReminders'/> ,
        redirectionLink:routes.settings_reminders,
        iconSrc:"/img/icon-notification.svg"
    },{
        title:<FormattedMessage id='SettingsHowToDonate'/>,
        redirectionLink:routes.settings_howToDonate,
        iconSrc:"/img/icon-how-to-donate.svg"
    },{
        title:<FormattedMessage id='SettingsHelpAndSupport'/>,
        redirectionLink:routes.settings_support,
        iconSrc:"/img/icon-help-support.svg"
    },{
        title:<FormattedMessage id='SettingsContactUs'/>,
        redirectionLink:routes.settings_contact,
        iconSrc:"/img/icon-contact-us.svg"
    },{
        title:<FormattedMessage id='SettingsFAQ'/>,
        redirectionLink:routes.settings_faq,
        iconSrc:"/img/icon-FAQ.svg"
    },{
        title:<FormattedMessage id='SettingsAbout'/>,
        redirectionLink:routes.settings_about,
        iconSrc:"/img/icon-about.svg"
    },
]

const SettingsListScreen = () => {

    const history = useHistory();

    return (
       <MainScreenWrapper className='settingsListScreen_container'>
           <TitleHeader title={<FormattedMessage id='Settings'/>} />
            <SettingsList>
                {data.map((element,index)=>
                    <SettingsListItem
                        key={index}
                        onClick={()=> history.push(element.redirectionLink)}
                        title={element.title}
                        icon={element.iconSrc}/>
                )}

            </SettingsList>
       </MainScreenWrapper>
    )
}

export default SettingsListScreen;
