import React from 'react'
import "./FollowerCard.css"

import { FollowerData } from '../../Data/FollowerData'

const FollowerCard = () => {
  return (
   <div className="FollowerCard">
        <h3>Who is following you</h3>
           {FollowerData.map((follower, key) => {
                return (
                    <div className="follower" key={key}>
                        <div>
                            <img src={follower.img} alt=""  className='followerImg'/>
                            <div className='followerInfo'>
                                <span className='name'>{follower.name}</span>
                                <span>@{follower.username}</span>  
                            </div>
                        </div>
                        <button className='button fc-button'>Follow</button>
                    </div>      
                )
           })}    
   </div>
  )
}

export default FollowerCard