import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'

import '../static/playlist.scss'


const PlaylistInfo = (props) => {
  return (
    <div className="info-holder">
      <div className="image-holder">
        <img src={props.content.images ? props.content.images[0].url : ''} alt=''/>
      </div>
      <div className="playlist-name">
        <p>{props.content.name}</p>
      </div>
    </div>
  )
}

const PlaylistTrack = (props) => {

  const track = props.track
  const active = props.active
  const index = props.index

  return (
    <div onClick={() => props.selectSong(index)} key={track.track ? track.track.name : track.name} className={(track.track ? track.track.preview_url !== null : track.preview_url !== null) ? 'track' : 'disabled-track'} >
      <span>&#119136;</span>
      <p className={active === index ? 'active' : ''}>{track.track ? track.track.name : track.name}</p>
   </div>
  )
}


class Playlist extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      content: {},
      tracks: [],
      active: ''
    }
  }

  async componentDidMount() {
    const id = this.props.match.params.id
    const reqCase = this.props.location.search.split('=')[1]
    const access_token = window.localStorage.getItem('accessToken')
    if (access_token === 'undefined' || !access_token) {
      window.location.href = 'https://spotify-based-client-react.herokuapp.com'
    }
    let url = '';
    if(!this.state.tracks || this.state.tracks.length === 0) {
      if (reqCase === '2') {
        url = 'https://api.spotify.com/v1/albums/'
      } else if (reqCase === '3') {
        url = 'https://api.spotify.com/v1/tracks/'
      } else {
        url = 'https://api.spotify.com/v1/playlists/'
      }
    }
    const result = await axios.get(url + id + '?access_token=' + access_token).catch(err => { console.log(err) })
    if (reqCase !== '3') {
      const {images, name, tracks} = {...result.data}
      this.setState({
        content: {images, name},
        tracks: tracks.items
      })
    } else {
      const {name} = {...result.data}
      const images = result.data.album.images
      this.setState({
        content: {images, name},
        tracks: [{...result.data}]
      })
    }
  }

  selectSong = async (index) => {
    const tracks = this.state.tracks
    const name = await tracks[index].track ? tracks[index].track.name : tracks[index].name
    const uri = await tracks[index].track ? tracks[index].track.preview_url : tracks[index].preview_url
    const icon = await tracks[index].track ? tracks[index].track.album.images[2]
    : tracks[index].album ? tracks[index].album.images[2] : this.state.content.images[2]
    this.props.setSong({type: 'SET_SONG', song: {name, uri, icon}})
    this.setState({active: index})
  }

  render() {
    const content = this.state.content
    const tracks = this.state.tracks
    const active = this.state.active

    return (
      <div className="playlist">
        <PlaylistInfo content={content} />
        <div className="tracks-list">
          {tracks.map((track, index) => <PlaylistTrack selectSong={this.selectSong} key={index} track={track} index={index} active={active}/>)}
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setSong: data => {
      dispatch(data)
    }
  }
}

export default connect(null,mapDispatchToProps)(Playlist);
