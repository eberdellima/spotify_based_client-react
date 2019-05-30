import React from 'react'
import axios from 'axios'
import DumbGrid from './DumbGrid.js'

class SearchResult extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      items: []
    }
  }

  async componentDidMount() {
    const access_token = window.localStorage.getItem('accessToken')
    if (access_token === 'undefined' || !access_token) {
      window.location.href = 'https://spotify-based-client-react.herokuapp.com'
    }
    const query = this.props.location.search
    const result = await axios.get('https://api.spotify.com/v1/search?access_token=' + access_token + '&q=' + query.q + '&type=track&limit=3').catch(err => { console.log(err) })
    const tracks = result.data.tracks.items.map(track => {
      return {
        images: [...track.album.images],
        name: track.name,
        id: track.id
      }
    })
    this.setState({items: tracks})
  }

  render() {
    const items = this.state.items
    return (
      <DumbGrid sectionName='results:' items={items} />
    )
  }

}

export default SearchResult
