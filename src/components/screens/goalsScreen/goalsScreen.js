import React from 'react';
import SubHeader from "../../general/subHeader";
import MainHeader from "../../general/mainHeader";
import "./goalsScreen.css"
import MainScreenWrapper from '../../general/mainScreenWrapper'


function GoalsScreen({ totalGoal, currentBloodCount }) {
    return (
        <MainScreenWrapper>
            <div className="goalsScreen">
                <div className="goalsScreen_headers">
                    <MainHeader />
                    <SubHeader className="goalsScreen_dropSection"
                        current={currentBloodCount}
                               dropScale={1.2}
                        total={totalGoal} />
                </div>

                <div className="goalsScreen_padding" />


                {/*enter any content here*/}

            </div>
        </MainScreenWrapper>
    );
}

export default GoalsScreen;