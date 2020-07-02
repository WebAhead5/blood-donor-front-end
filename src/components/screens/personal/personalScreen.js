import React from 'react';
import HistoryLogList from '../../general/historyLogList';
import Image from "../../general/image";
import './personalScreen.css'
import TitleHeader from '../../general/titleHeader'
import MainScreenWrapper from '../../general/mainScreenWrapper'
import {useRecoilValue} from 'recoil';
import { textDirection } from '../../../store/textDirection';
import {logsState ,useClearEmptyValuesLogsState,useAddLogItemToLogsState} from '../../../store/logs';
import { FormattedMessage } from 'react-intl';
import HistoryLogFooter from '../../general/historyLogFooter';

const PersonalScreen = () => {
    const logsItemsState = useRecoilValue(logsState);
    const addLogToState = useAddLogItemToLogsState();
    const clearEmptyLogs= useClearEmptyValuesLogsState();

    const direction = useRecoilValue(textDirection)

    const includeEmptyItem = (arr) => {
        let empty = false

        if(!arr){
            return;
        }
        //I use the try catch to throw exception and stop the forEach loop
        try {
            arr.forEach(element => {
                if (!element.date && !element.pulse && !element.pressure && !element.hemoglobin) {
                    empty = true;
                    throw new Error('empty');
                }
            });
        } catch (e) {
            if (e.message === "empty") {
                //Do nothing
            } else {
                console.error(e);
            }

        }
        return empty;
    }

    const onAddClick = () => {
        //if one element is empty ignore the click
        if (includeEmptyItem(logsItemsState)) {
            clearEmptyLogs(logsItemsState);
            return;
        }
        
        addLogToState ({ date: "", pulse: "", pressure: "", hemoglobin: "" })
    }


    return (
        <MainScreenWrapper className='personalScreenMainWrapper'>
            <TitleHeader title={<FormattedMessage id="PersonalScreenTitle" />} />
            <HistoryLogList />
            <Image src="/img/icon-add.svg" className={`personalScreenContainerAddBtn ${direction === "rtl" && 'personalScreenContainerAddBtnRtl'}`} alt="Add button" onClick={onAddClick} />
            <HistoryLogFooter />

        </MainScreenWrapper>

    )
}

export default PersonalScreen;