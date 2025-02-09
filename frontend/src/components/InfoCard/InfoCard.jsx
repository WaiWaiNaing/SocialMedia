import React, { useState } from 'react'
import './InfoCard.css'
import { UilPen } from '@iconscout/react-unicons'
import ProfileModal from '../ProfileModal/ProfileModal';

const InfoCard = () => {
  const [ modalOpened, setModalOpened ] = useState(false);
  return (
    <div className="infoCard">
        <div className="infoHead">
            <h4>Your Info</h4>
            <UilPen width="2rem" height="1.2rem" onClick={() => setModalOpened(true)}/>
            <ProfileModal modalOpened={modalOpened} setModalOpened={setModalOpened}/>
        </div>
        <div className="info">
            <span><b>Status</b></span>
            <span> Single</span>
        </div>
        <div className="info">
            <span><b>Lives In</b></span>
            <span> San Francisco</span>
        </div>
        <div className="info">
            <span><b>Work At</b></span>
            <span> Apple Inc.</span>
        </div>

        <button className="button logout-btn">
            Logout
        </button>
    </div>
  )
}

export default InfoCard