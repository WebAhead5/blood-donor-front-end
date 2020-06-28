import React from 'react';
import './historyLogFooter.css'
import { CircularProgressbar } from 'react-circular-progressbar';
import { personalSettings } from '../../../store/personalSettings'
import { useRecoilValue } from 'recoil';



const HistoryLogFooter = () => {

    const userSettings = useRecoilValue(personalSettings)

    let count = userSettings.donationCount;

    const levels = [{ title: 'Beginner', goal: 10, imgSrc: '/img/icon-frog.svg', alt: 'Novice level' },
    { title: 'Intermediate', goal: 20, imgSrc: '/img/icon-prince.svg', alt: 'Intermediate level' },
    { title: 'Expert', goal: 30, imgSrc: '/img/icon-king.svg', alt: 'Expert level' },
    { title: 'Expert', goal: 50, imgSrc: '/img/icon-king.svg', alt: 'Expert level' },
    { title: 'Expert', goal: 100, imgSrc: '/img/icon-king.svg', alt: 'Expert level' },
    { title: 'Expert', goal: 150, imgSrc: '/img/icon-king.svg', alt: 'Expert level' },
    { title: 'Expert', goal: 200, imgSrc: '/img/icon-king.svg', alt: 'Expert level' },
    ]

    const firstIndex = levels.findIndex(level => level.goal > count);
    const firstImg = levels[firstIndex];
    const secondImg = levels[firstIndex - 1];
    const thirdImg = levels[firstIndex + 1];


    return (

        <div className='HistoryLogFooter_container'>
            <div className="HistoryLogFooter_previous_goal_done" />
            {/* previous goal */}
            <div className="HistoryLogFooter_second_third_img_container">
                <div className='HistoryLogFooter_dim_done_next' />
                <img src={secondImg?.imgSrc ? secondImg.imgSrc : ''} alt={secondImg?.alt ? secondImg.alt : ''} />
                <CircularProgressbar value={secondImg ? 100 : 0} background={true} />
            </div>
            {/* Current goal */}
            <div className="HistoryLogFooter_first_img_container">
                <img src={firstImg?.imgSrc ? firstImg.imgSrc : ''} alt={firstImg?.alt ? firstImg.alt : ''} />
                <CircularProgressbar value={(count - (secondImg?.goal || 0)) / (firstImg?.goal - (secondImg?.goal || 0)) * 100} background={true} />
                <span>{`${count}/${firstImg.goal}`}</span>
                <br/>
                <div>Donations</div>
                
            </div>
            {/* next goal */}
            <div className="HistoryLogFooter_second_third_img_container">
                <div className='HistoryLogFooter_dim_done_next' />
                <img src={thirdImg?.imgSrc ? thirdImg.imgSrc : ''} alt={thirdImg?.alt ? thirdImg.alt : ''} />
                <CircularProgressbar value={0} background={true} />
            </div>
            <div className="HistoryLogFooter_next_goal" />
            <div className='HistoryLogFooter_background_split'/>
        </div>
    )

}

export default HistoryLogFooter
