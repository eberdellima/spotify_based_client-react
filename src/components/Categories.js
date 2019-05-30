import React, { Component } from 'react'
import axios from 'axios'
import DumbGrid from './DumbGrid.js'

class Categories extends Component {

  constructor(props) {
    super(props)
    this.state = {
      items: []
    }
  }

  async componentDidMount() {
    let access_token = window.localStorage.getItem('accessToken')
    if(access_token === 'undefined' || !access_token){
      access_token = window.location.hash.split('=')[1]
      if(!access_token){
        window.location.href = 'https://spotify-based-client-react.herokuapp.com'
      }
      window.localStorage.setItem('accessToken', access_token)
      setTimeout(() => { this.clearToken() }, 3600 * 1000)
    }
    const result = await axios.get('https://api.spotify.com/v1/browse/categories?access_token=' + access_token).catch(err => { console.log(err) })
    if(!result){
      window.localStorage.removeItem('accessToken')
      window.location.href = 'https://spotify-based-client-react.herokuapp.com'
    }
    this.setState({items: result.data.categories.items})
  }

  clearToken = () => {
    window.localStorage.removeItem('accessToken')
  }

  render() {
    const items = this.state.items

    return (
      <DumbGrid sectionName='categories' items={items}/>
    )
  }
}

export default Categories;
