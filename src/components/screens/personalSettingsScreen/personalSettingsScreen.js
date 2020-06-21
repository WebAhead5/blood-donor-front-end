import React, { useState } from 'react';
import TitleHeader from '../../general/titleHeader';
import PersonalSettingsInput from '../../general/personalSettingsInput'
import MainScreenWrapper from '../../general/mainScreenWrapper';
import './personalSettingsScreen.css'

const PersonalSettingsScreen = () => {



    const [userSettings, setUserSettings] = useState({
        name: '',
        bloodType: '',
        donationCount: 0,
        reminderCount: 2
    })

    console.log(userSettings)
    // Array to populate radioButtons from
    const radioButton = [1, 2, 3, 4]
    const bloodTypes = ['A+', 'A-', 'AB+', 'AB-', 'B+', 'B-', 'O+', 'O-']

    return (
        <MainScreenWrapper className='personalSettingsScreen_container'>
            <TitleHeader title='Personal Settings' />
            <PersonalSettingsInput icon="/img/icon-user-name.svg" alt="enter your name" >

                <label htmlFor='name' />What is your name?<label />
                <input type="text" value={userSettings.name} onChange={(e) => {
                    setUserSettings({ ...userSettings, name: e.target.value })
                }} placeholder="Enter your name" className='personalSettingsInput_textContainer' />
            </PersonalSettingsInput >
            <PersonalSettingsInput icon="/img/icon-blood-type.svg" alt="blodo type">
                <label htmlFor="blood-type">What is your blood type?</label>

                <select className="personalSettingsScreen_select_blood_type" onChange={(e) => {
                            setUserSettings({...userSettings, bloodType: e.target.value })
                        }}>
                    <option value="Choose your Blood Type" >Choose your Blood Type</option>
                    {bloodTypes.map((type, index) => (
                        <option value={type} key={index}>{type}</option>
                    ))}
                </select>
            </PersonalSettingsInput >
            <PersonalSettingsInput icon="/img/icon-blood-donation-count.svg" alt="donation count" contentClassName="personalSettingsScreen_donation_count">
                <label>How many times did you donate blood?</label>
                <input value={userSettings.donationCount} type='number' onChange={(e) => setUserSettings({ ...userSettings, donationCount: Math.max(0, e.target.value) })}></input>
            </PersonalSettingsInput >
            <PersonalSettingsInput className='personalSettingsScreen_double_blood_drops' icon="/img/icon-double-drops.svg" alt="donation reminder" >
                <span>How many times would you like to donate per year?</span>
                <form className="personalSettingsScreen_donation_reminder_radios">
                    {/* populate 4 buttons from the Array */}
                    {radioButton.map((button, index) => (
                        <label htmlFor={`${button}-time`} key={index}>
                            <input type="radio" name="donation-reminder" value={button} checked={userSettings.reminderCount === button} />
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

export default PersonalSettingsScreen