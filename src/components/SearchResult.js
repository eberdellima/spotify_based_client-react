import React, { useState, useEffect } from 'react'
import axios from 'axios'
import DumbGrid from './DumbGrid.js'


const SearchResult = (props) => {

  const [items, setItems] = useState([])
  
  let query = props.location.search 
  query = query.split('').slice(1).join('')

  useEffect(() => {
    const access_token = window.localStorage.getItem('accessToken')
    if (access_token === 'undefined' || !access_token) {
      window.location.href = 'http://localhost:3000'
    }
    axios.get('https://api.spotify.com/v1/search?access_token=' + access_token + '&' + query+ '&type=track&limit=3')
      .then(result => {
        console.log(result)
        const tracks = result.data.tracks.items.map(track => {
          return {
            images: [...track.album.images],
            name: track.name,
            id: track.id
          }
        })
        setItems(tracks)
      })
      .catch(err => { console.log(err) })
  }, [query])

  return <DumbGrid sectionName='results:' items={items} />
}

export default SearchResult
