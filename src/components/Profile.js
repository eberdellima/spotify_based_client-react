import React from 'react'
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

class Profile extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      userData: {}
    }
  }

  async componentDidMount() {
    const access_token = window.localStorage.getItem('accessToken')
    if (access_token === 'undefined' || !access_token) {
      window.location.href = 'http://localhost:3000'
    }
    const result = await axios.get('https://api.spotify.com/v1/me?access_token=' + access_token).catch(err => { console.log(err) })
    this.setState({userData: result.data})
  }

  render() {
    const userData = this.state.userData

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
}

export default Profile;
