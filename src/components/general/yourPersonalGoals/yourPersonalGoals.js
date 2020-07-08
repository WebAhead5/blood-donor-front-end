import React from 'react'
import './yourPersonalGoals.css'
import Drop from '../drop'
import { personalSettings } from '../../../store/personalSettings'
import { logsState } from '../../../store/logs';
import { useRecoilValue } from 'recoil';

import moment from "moment";

function YourPersonalGoals({ scale, text, percentage }) {

    const userSettings = useRecoilValue(personalSettings)
    let reminderCount = userSettings.reminderCount

    const logs = useRecoilValue(logsState)
    let currentYear = moment(Date.now()).format("YYYY");

    let numberOfDonationsThisYear = logs.reduce((acc, cur) => {

        if (cur.date.includes(currentYear)) return acc + 1
        else return acc;
    }, 0)

    let bars = reminderCount;
    let linesToAddArray = [];
    for (let bar = 0; bar < bars; bar++) {
        linesToAddArray.unshift(
            <div className="textAndLine">
                <div className="letMeTop">
                    <p>{bar + 1}</p>
                    <div className="horizontalLine" style={{width:30+40*(bar+1)/bars }}>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="yourPersonalGoals_container">
            <h2>Your Personal Goals</h2>
            <div className="dropAndTargetContainer">
                <div className="yourPersonalGoalDrop">

                    {bars &&
                        <div className="dropBars">
                            {linesToAddArray}
                        </div>
                    }

                    <Drop scale="0.8" text={`${numberOfDonationsThisYear}/${reminderCount}`} percentage={`${numberOfDonationsThisYear / reminderCount * 100}`} bars="3" />
                </div>
                <p className="nextDonationAdvisor">Your next donation is in <span className="red">August</span></p>
            </div>
        </div>
    )
}


export default YourPersonalGoals