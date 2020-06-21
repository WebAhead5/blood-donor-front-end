import React from 'react';
import HistoryLogList from '../../general/historyLogList';
import Image from "../../general/image";
import './personalScreen.css'
import TitleHeader from '../../general/titleHeader'

const PersonalScreen = () => {

    return (
       <div>
           <TitleHeader title='History Log' />
           <HistoryLogList/>
           <Image src="/img/icon-add.svg" className="personalScreenContainerAddBtn" alt="Add button"/>
           
       </div>
    )
}

export default PersonalScreen;