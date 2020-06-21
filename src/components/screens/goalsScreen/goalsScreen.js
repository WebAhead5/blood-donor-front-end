import React from 'react';
import SubHeader from "../../general/subHeader";
import MainHeader from "../../general/mainHeader/mainHeader";
import "./goalsScreen.css"

function GoalsScreen({totalGoal,currentBloodCount}) {
    return (
        <div className="goalsScreen">
            <div className="goalsScreen_headers">
                <MainHeader/>
                <SubHeader className="goalsScreen_dropSection"
                           current={currentBloodCount}
                           total={totalGoal} />
            </div>

            <div className="goalsScreen_padding"/>

            {/*enter any content here*/}

        </div>
    );
}

export default GoalsScreen;