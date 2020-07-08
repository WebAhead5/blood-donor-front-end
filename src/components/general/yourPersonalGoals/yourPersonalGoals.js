import React from 'react'
import './yourPersonalGoals.css'
import Drop from '../drop'
import { personalSettings } from '../../../store/personalSettings'
import { logsState } from '../../../store/logs';
import { useRecoilValue } from 'recoil';



// Need total target number
// TODO: Need current number
// TODO: Need to sort length of bars out
// TODO: Need to maybe add middle bit showing 2/4 score, etc
function YourPersonalGoals({ scale, text, percentage }) {

    const userSettings = useRecoilValue(personalSettings)
    let reminderCount = userSettings.reminderCount

    const logs = useRecoilValue(logsState)
    console.log(logs);
    

    let bars = reminderCount;
    let linesToAddArray = [];
    for (let bar = 0; bar < bars; bar++) {
        linesToAddArray.unshift(
            <div className="textAndLine">
                <div className="letMeTop">
                    <p>{bar + 1}</p>
                    <div className="horizontalLine">
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

                    <Drop scale="0.8" text={`0/${reminderCount}`} percentage={`1/${reminderCount}`} bars="3" />
                </div>
                <p className="nextDonationAdvisor">Your next donation is in <span className="red">August</span></p>
            </div>
        </div>
    )
}


export default YourPersonalGoals