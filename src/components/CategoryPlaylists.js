import React from 'react'
import DumbGrid from './DumbGrid.js'
import axios from 'axios'

class CategoryPlaylists extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      items: [],
      categoryName: ''
    }
  }

  async componentDidMount() {
    const name = this.props.match.params.name
    const access_token = window.localStorage.getItem('accessToken')
    if (access_token === 'undefined' || !access_token) {
      window.location.href = 'https://spotify-based-client-react.herokuapp.com'
    }
    const result = await axios.get('https://api.spotify.com/v1/browse/categories/' + name + '/playlists?access_token=' + access_token).catch(err => { console.log(err) })
    this.setState({categoryName: name, items: result.data.playlists.items})
  }

  render() {
    const items = this.state.items
    const name = this.state.categoryName

    return (
      <DumbGrid sectionName={name} items={items}/>
    )
  }
}

export default CategoryPlaylists;
