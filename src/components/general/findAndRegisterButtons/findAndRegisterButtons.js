import React from 'react'
import './findAndRegisterButtons.css'
import { routes } from "../../../constants";
import { useHistory } from "react-router-dom";

function FindAndRegisterButtons() {

    let history=useHistory();

    return (
        <div className="findAndRegisterButtons_container">
            <button className="bigButton findNearestCenter"
                onClick={(e) => {
                    //store selected item index
                    // setRefresh(!refresh)
                    //redirect the user to the given route
                    history.push(routes.map);
                }}
            >Find the nearest center</button>

            <button className="bigButton registerDonation"
                onClick={(e) => {
                    //store selected item index
                    // setRefresh(!refresh)
                    //redirect the user to the given route
                    history.push(routes.personal);
                }}
            >Register a Donation</button>
        </div>

    )
}

export default FindAndRegisterButtons