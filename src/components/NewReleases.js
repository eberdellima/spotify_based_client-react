import React, { useState, useEffect} from 'react'
import axios from 'axios'
import DumbGrid from './DumbGrid.js'


const NewReleases = () => {

  const [items, setItems] = useState([])

  useEffect(() => {
    const access_token = window.localStorage.getItem('accessToken')
    if (access_token === 'undefined' || !access_token) {
      window.location.href = 'http://localhost:300'
    }
    axios.get('https://api.spotify.com/v1/browse/new-releases?access_token=' + access_token)
      .then(result => {setItems(result.data.albums.items)})
      .catch(err => { console.log(err) })
  })

  return <DumbGrid sectionName='new release' items={items} />
}

export default NewReleases;
