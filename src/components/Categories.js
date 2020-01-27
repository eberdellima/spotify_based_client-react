import React, { useState, useEffect } from 'react'
import axios from 'axios'
import DumbGrid from './DumbGrid.js'


const Categories = () => {

  const [items, setItems] = useState([])

  useEffect(() => {
    let access_token = window.localStorage.getItem('accessToken')
    if(access_token === 'undefined' || !access_token) {
      access_token = window.location.hash.split('=')[1]
      if(!access_token) {
        window.location.href = 'http://localhost:300'
      }
      window.localStorage.setItem('accessToken', access_token)
      setTimeout(handleClearToken, 3600 * 1000)
    }
    
    axios.get('https://api.spotify.com/v1/browse/categories?access_token=' + access_token)
      .then(result => {
        setItems(result.data.categories.items)
      })
      .catch(err => {
        window.localStorage.removeItem('accessToken')
        window.location.href = 'http://localhost:300'
       })
  })

  const handleClearToken = () => {
    window.localStorage.removeItem('accessToken')
  }

  return <DumbGrid sectionName='categories' items={items} />
}

export default Categories;
