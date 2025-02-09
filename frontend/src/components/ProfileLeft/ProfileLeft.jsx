import React from 'react'
import '../ProfileSide/ProfileSide.css'
import LogoSearch from '../LogoSearch/LogoSearch'
import FollowerCard from '../FollowerCard/FollowerCard'
import InfoCard from '../InfoCard/InfoCard'

const ProfileLeft = () => {
  return (
    <div className="ProfileSide">
        <LogoSearch />
        <InfoCard />
        <FollowerCard />
    </div>
  )
}

export default ProfileLeft