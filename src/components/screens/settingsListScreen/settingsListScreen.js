import React from 'react';
import SettingsList from '../../general/settingsList';
import SettingsListItem from '../../general/settingsListItem';
import './settingsListScreen.css'
import { useHistory } from 'react-router-dom'
import TitleHeader from '../../general/titleHeader'
import MainScreenWrapper from '../../general/mainScreenWrapper'
import { FormattedMessage } from 'react-intl';



const data=[
    {
        title:<FormattedMessage id='SettingsPersonal'/> ,
        redirectionLink:"/settings/personal",
        iconSrc:"/img/icon-user.svg"
    },{
        title:<FormattedMessage id='SettingsReminders'/> ,
        redirectionLink:"/settings/reminders",
        iconSrc:"/img/icon-notification.svg"
    },{
        title:<FormattedMessage id='SettingsHowToDonate'/>,
        redirectionLink:"/settings/how-to-donate",
        iconSrc:"/img/icon-how-to-donate.svg"
    },{
        title:<FormattedMessage id='SettingsHelpAndSupport'/>,
        redirectionLink:"/settings/help-support",
        iconSrc:"/img/icon-help-support.svg"
    },{
        title:<FormattedMessage id='SettingsContactUs'/>,
        redirectionLink:"/settings/contact-us",
        iconSrc:"/img/icon-contact-us.svg"
    },{
        title:<FormattedMessage id='SettingsFAQ'/>,
        redirectionLink:"/settings/faq",
        iconSrc:"/img/icon-FAQ.svg"
    },{
        title:<FormattedMessage id='SettingsAbout'/>,
        redirectionLink:"/settings/about",
        iconSrc:"/img/icon-about.svg"
    },
]

const SettingsListScreen = () => {

    const history = useHistory();

    return (
       <MainScreenWrapper className='settingsListScreen_container'>
           <TitleHeader title='Settings' />
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
