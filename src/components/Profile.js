import React, { useState, useEffect } from 'react'
import axios from 'axios'

import '../static/profile.scss'

const ProfileAvatar = (props) => {
  return (
    <div className="profile-pic-holder">
      <img className="avatar" src={props.userData.images ? props.userData.images[0].url : ''} alt=""/>
    </div>
  )
}

const ProfileInfo = (props) => {
  return (
    <div className="username">
      <p>{props.userData.display_name}</p>
      <div className="followers">
        <p>Followers: {props.userData.followers ? props.userData.followers.total : ''}</p>
      </div>
      <div className="email">
        <p>{props.userData.external_urls ? props.userData.external_urls.spotify : ''}</p>
      </div>
    </div>
  )
}

const Profile = () => {

  const [userData, setUserData] = useState({})

  useEffect(() => {
    const access_token = window.localStorage.getItem('accessToken')
    if (access_token === 'undefined' || !access_token) {
      window.location.href = 'http://localhost:300'
    }
    axios.get('https://api.spotify.com/v1/me?access_token=' + access_token)
      .then(result => setUserData(result.data))
      .catch(err => { console.log(err) })
  })

  return ( 
    <div className="content">
      <div className="page-title">
        <h2>Profile</h2>
      </div>
      <div className="profile-container">
        <ProfileAvatar userData={userData}/>
        <ProfileInfo userData={userData}/>
      </div>
    </div>
  )
}

export default Profile;
