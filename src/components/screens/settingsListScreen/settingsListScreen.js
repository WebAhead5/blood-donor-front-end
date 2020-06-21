import React from 'react';
import SettingsList from '../../general/settingsList';
import SettingsListItem from '../../general/settingsListItem';
import './settingsListScreen.css'
import { useHistory } from 'react-router-dom'
import TitleHeader from '../../general/titleHeader'

const data=[
    {
        title:"Personal",
        redirectionLink:"/settings/personal",
        iconSrc:"/img/icon-user.svg"
    },{
        title:"Reminders",
        redirectionLink:"/settings/reminders",
        iconSrc:"/img/icon-notification.svg"
    },{
        title:"How-To-Donate",
        redirectionLink:"/settings/how-to-donate",
        iconSrc:"/img/icon-how-to-donate.svg"
    },{
        title:"Help & Support",
        redirectionLink:"/settings/help-support",
        iconSrc:"/img/icon-help-support.svg"
    },{
        title:"Contact Us",
        redirectionLink:"/settings/contact-us",
        iconSrc:"/img/icon-contact-us.svg"
    },{
        title:"FAQ",
        redirectionLink:"/settings/faq",
        iconSrc:"/img/icon-FAQ.svg"
    },{
        title:"About",
        redirectionLink:"/settings/about",
        iconSrc:"/img/icon-about.svg"
    },
]

const SettingsListScreen = () => {

    const history = useHistory();

    return (
       <div className='settingsListScreen_container'>
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
       </div>
    )
}

export default SettingsListScreen;
