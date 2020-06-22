import React from 'react';
import HistoryLogList from '../../general/historyLogList';
import Image from "../../general/image";
import './personalScreen.css'
import TitleHeader from '../../general/titleHeader'



const PersonalScreen = () => {
    const [logs, setLogs] = React.useState([
        {
            date: "12-3-2005",
            pulse: "74",
            pressure: "70/120",
            hemoglobin: "13.5"
        },
        {
            date: "12-3-2005",
            pulse: "74",
            pressure: "70/120",
            hemoglobin: "13.5"
        }
    ])

    const includeEmptyItem = (arr) => {       
        let empty = false
        //I use the try catch to throw exception and stop the forEach loop
        try {
            arr.forEach(element => {
                if (!element.date && !element.pulse && !element.pressure && !element.hemoglobin) {
                    empty = true;
                    throw new Error('empty');
                }
            });
        } catch (e) {
            if(e.message === "empty"){
                //Do nothing
            }else{
                console.log(e);
            }

        }
        return empty;
    }

    const onAddClick = () => {
        //if one element is empty ignore the click
        if (includeEmptyItem(logs)) {
            return;
        }
        setLogs(logs.concat({ date: "", pulse: "", pressure: "", hemoglobin: "" }))
    }


    return (
        <div>
            <TitleHeader title='History Log' />
            <HistoryLogList logs={logs} />
            <Image src="/img/icon-add.svg" className="personalScreenContainerAddBtn" alt="Add button" onClick={onAddClick} />

        </div>
    )
}

export default PersonalScreen;