import React from 'react'
import { connect } from 'react-redux'

import { 
  dispatchEndSong, 
  dispatchToggleSong
} from '../store/dispatchers/index'

import '../static/player.scss'


const SongInfo = (props) => {
  const data = props.playing ? props.playing : {}
  return (
    <div id="song-info">
      <div className="thumbnail">
        <img src={data ? data.icon ? data.icon.url : '' : ''} alt=""/>
      </div>
      <p style={{padding: 0, margin: 0, display: 'inline-block', position: 'relative', top: '14px'}}>
        {data ? data.name ? data.name : '' : ''}
      </p>
    </div>
  )
}

const FakeAudio = (props) => {
  return (
    <div id="timeline">
      <div id="playhead"></div>
    </div>
  )
}


class Player extends React.Component {

  constructor(props){
    super(props)
    this.audioRef = React.createRef();
  }


  timeUpdate = (e) => {
    const music = document.querySelector('#audio-player')
    const playhead = document.querySelector('#playhead')
    let playPercent = 100 * ((music.currentTime / music.duration) - 0.009)
    playPercent = playPercent <= 0 ? 0 : playPercent
    playhead.style.marginLeft = playPercent + '%'
  }

  endSong = (e) => {
    dispatchEndSong()
  }

  togglePlay = (e) => {
    const player = this.audioRef.current
    if (player.getAttribute('src') !== null && player.getAttribute('src') !== undefined) {
      if (player.paused) {
        player.play()
      } else {
        player.pause()
      }
      const isPlaying = this.props.isPlaying;
      dispatchToggleSong(!isPlaying)
    }
  }

  render(){
    let playing = this.props.song
    const isPlaying = this.props.isPlaying

    return ( 
      <div className="player">
        <SongInfo playing={playing}/>
        <audio ref={this.audioRef} id="audio-player" src={playing ? playing.uri : ''} controls  autoPlay preload="auto" onTimeUpdate={this.timeUpdate} onEnded={this.endSong}></audio>
        <div className={!isPlaying ? 'control-button play-button': 'control-button pause-button'}  onClick={this.togglePlay}></div>
        <FakeAudio />
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    song: state.song,
    isPlaying: state.isPlaying
  }
}

export default connect(mapStateToProps)(Player);
