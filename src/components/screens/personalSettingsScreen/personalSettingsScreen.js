import React, { useEffect } from 'react';
import TitleHeader from '../../general/titleHeader';
import PersonalSettingsInput from '../../general/personalSettingsInput'
import MainScreenWrapper from '../../general/mainScreenWrapper';
import './personalSettingsScreen.css';
import { FormattedMessage, injectIntl } from 'react-intl';
import { personalSettings, useSetPersonalSettings } from '../../../store/personalSettings'
import { useRecoilValue } from 'recoil';
import moment from 'moment';


const PersonalSettingsScreen = ({ intl }) => {
    const WhatIYourNamesPlaceholder = intl.formatMessage({ id: 'WhatIYourNames' });
    const ChooseYourBloodTypePlaceholder = intl.formatMessage({ id: 'ChooseYourBloodType' });

    const userSettings = useRecoilValue(personalSettings)
    const setUserSettings = useSetPersonalSettings()

    // Save user input to localStorage

    useEffect(() => {
        let cachedState = {
            name: localStorage.getItem('username') || '',
            bloodType: localStorage.getItem('bloodType') || '',
            donationCount: localStorage.getItem('donationCount') || '',
            reminderCount: +localStorage.getItem('reminderCount') || 1,
            mostRecentDonation: localStorage.getItem('mostRecentDonation') || '',
        }
        setUserSettings(cachedState)
    }, [])

    useEffect(() => {
        localStorage.setItem('username', userSettings.name)
        localStorage.setItem('bloodType', userSettings.bloodType)
        localStorage.setItem('donationCount', userSettings.donationCount)
        localStorage.setItem('reminderCount', userSettings.reminderCount)
        localStorage.setItem('mostRecentDonation', userSettings.mostRecentDonation)
    },
        [userSettings])

    // Array to populate radioButtons from
    const radioButton = [1, 2, 3, 4]
    // Array to populate bloodTypes select option
    const bloodTypes = ['A+', 'A-', 'AB+', 'AB-', 'B+', 'B-', 'O+', 'O-']

    return (
        <MainScreenWrapper className='personalSettingsScreen_container'>

            {/* Header */}
            <TitleHeader title={<FormattedMessage id="PersonalSettings" />} PersonalSettings backButton={true} className='personalSettingsScreen_titleHeader' />

            {/* Last Donation Input */}
            <PersonalSettingsInput icon="/img/icon-date.svg" alt="input the last date of your most recent donation" >
                <label htmlFor='date-of-most-recent-donation' /><FormattedMessage id="date-of-most-recent-donation" /><label />
                <input
                    type="date"
                    onChange={(e) => setUserSettings(
                        { ...userSettings, mostRecentDonation:moment(e.target.value).format("YYYY-MM-DD")}
                        )}
                    value={userSettings.mostRecentDonation}
                    max={moment().format('YYYY-MM-DD')}
                    className='personalSettingsInput_mostRecentDonation personalSettingsInput_textContainer' />

            </PersonalSettingsInput >

            {/* Name Input */}
            <PersonalSettingsInput icon="/img/icon-user-name.svg" alt="enter your name" >

                <label htmlFor='name' /><FormattedMessage id="WhatIYourNames" /><label />
                <input type="text" value={userSettings.name} onChange={(e) => {
                    setUserSettings({ ...userSettings, name: e.target.value })
                }} placeholder={WhatIYourNamesPlaceholder} className='personalSettingsInput_textContainer' />
            </PersonalSettingsInput >

            {/* Blood Type select input */}
            <PersonalSettingsInput icon="/img/icon-blood-type.svg" alt="blodo type">
                <label htmlFor="blood-type"><FormattedMessage id="WhatIYourBloodType" /></label>

                <select className="personalSettingsScreen_select_blood_type" onChange={(e) => {
                    setUserSettings({ ...userSettings, bloodType: e.target.value })
                }} value={userSettings.bloodType}>

                    <option value="Choose your Blood Type" >{ChooseYourBloodTypePlaceholder}</option>

                    {/* Populates blood types options from the Array */}
                    {bloodTypes.map((type, index) => (
                        <option value={type} key={index}>{type}</option>
                    ))}
                </select>
            </PersonalSettingsInput >

            {/* Blood donation count input */}
            <PersonalSettingsInput icon="/img/icon-blood-donation-count.svg" alt="donation count" contentClassName="personalSettingsScreen_donation_count">
                <label><FormattedMessage id="HowManyTimesDidYouDonateBlood" /></label>
                <input value={userSettings.donationCount} type='number' onChange={(e) => setUserSettings({ ...userSettings, donationCount: Math.max(0, e.target.value) })}></input>
            </PersonalSettingsInput >

            {/* Donation reminder input */}
            <PersonalSettingsInput className='personalSettingsScreen_double_blood_drops' icon="/img/icon-double-drops.svg" alt="donation reminder" >

                <span><FormattedMessage id="HowManyTimesWouldYouLikeToDonatePerYear" /></span>
                <form className="personalSettingsScreen_donation_reminder_radios">


                    {/* populate 4 buttons from the Array */}
                    {radioButton.map((button, index) => (
                        <label htmlFor={`${button}-time`} key={index}>
                            <input type="radio" name="donation-reminder" value={button} checked={userSettings.reminderCount === button} onChange={() => 1} />
                            <div
                                className={`personalSettingsScreen_donation_reminder_select ${userSettings.reminderCount === button ? "personalSettingsScreen_donation_reminder_selected" : ""}`}
                                onClick={() => setUserSettings({ ...userSettings, reminderCount: button })}>{button}</div>
                        </label>
                    ))}
                </form>
            </PersonalSettingsInput>
        </MainScreenWrapper>
    )
}

export default injectIntl(PersonalSettingsScreen)