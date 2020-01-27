import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { dispatchSetSong } from '../store/dispatchers/index'

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

const Playlist = (props) => {

  const [content, setContent] = useState({})
  const [tracks, setTracks] = useState([])
  const [active, setActive] = useState('')

  const id = props.match.params.id
  const reqCase = props.location.search.split('=')[1]

  useEffect(() => {
    const access_token = window.localStorage.getItem('accessToken')
    if (access_token === 'undefined' || !access_token) {
      window.location.href = 'http://localhost:3000'
    }
    let url = '';
    if(!tracks || tracks.length === 0) {
      if (reqCase === '2') {
        url = 'https://api.spotify.com/v1/albums/'
      } else if (reqCase === '3') {
        url = 'https://api.spotify.com/v1/tracks/'
      } else {
        url = 'https://api.spotify.com/v1/playlists/'
      }
    }
    axios.get(url + id + '?access_token=' + access_token)
      .then(result => {
        if(reqCase !== '3') {
          const {images, name, tracks} = {...result.data}
          setContent({images, name})
          setTracks(tracks.items)
        } else {
          const {name} = {...result.data}
          const images = result.data.album.images
          setContent({images, name})
          setTracks([{...result.data}])
        }
      })
      .catch(err => {console.log(err)})
  }, [id, reqCase])

  const selectSong = async (index) => {
    const name = await tracks[index].track ? tracks[index].track.name : tracks[index].name
    const uri = await tracks[index].track ? tracks[index].track.preview_url : tracks[index].preview_url
    const icon = await tracks[index].track ? tracks[index].track.album.images[2]
    : tracks[index].album ? tracks[index].album.images[2] : content.images[2]
    dispatchSetSong({name,uri,icon})
    setActive(index)
  }

  return (
    <div className="playlist">
      <PlaylistInfo content={content} />
      <div className="tracks-list">
        {tracks.map((track, index) => <PlaylistTrack selectSong={selectSong} key={index} track={track} index={index} active={active}/>)}
      </div>
    </div>
  )
}

export default Playlist;
