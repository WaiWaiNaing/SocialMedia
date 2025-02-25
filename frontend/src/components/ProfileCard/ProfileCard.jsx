import React from 'react'
import Cover from '../../img/cover.jpg'
import Profile from '../../img/profileImg.jpg'
import "./ProfileCard.css"

const ProfileCard = () => {
    const ProfilePage = true;

  return (
    <div className="ProfileCard">
        <div className="ProfileImages">
            <img src={Cover} alt="Cover" />
            <img src={Profile} alt="" />
        </div>
        <div className="ProfileName">
            <span>John Doe</span>
            <span>@johndoe</span>
        </div>
        <div className="followStatus">
            <hr />
            <div>
                <div className="follow">
                    <span>6,000</span>
                    <span>Followers</span>
                </div>
                <div className="vl"></div>
                <div className="follow">
                    <span>100</span>
                    <span>Following</span>
                </div>
                {
                    ProfilePage && (
                        <>
                            <div className="vl">
                            </div>
                            <div className="follow">
                                <span>3</span>
                                <span>Posts</span>
                            </div>
                        </>
                    )
                }
            </div>
            <hr />
        </div>
        { ProfilePage ? "" :  <span>My Profile</span>}
       
    </div>
  )
}

export default ProfileCard