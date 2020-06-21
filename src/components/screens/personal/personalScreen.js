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

    const onAddClick= ()=> {
        console.log("fdasfd");
        
        
        setLogs(logs.concat({date:"", pulse:"", pressure:"", hemoglobin:"" }))
    }
    return (
       <div>
           <TitleHeader title='History Log' />
           <HistoryLogList logs ={logs}/>
           <Image src="/img/icon-add.svg" className="personalScreenContainerAddBtn" alt="Add button" onClick={onAddClick}/>
           
       </div>
    )
}

export default PersonalScreen;