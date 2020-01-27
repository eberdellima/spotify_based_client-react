import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import DumbGrid from './DumbGrid.js'
import axios from 'axios'


const CategoryPlaylists = () => {

  const [items, setItems] = useState([])
  const [categoryName, setCategoryName] = useState('')
  const { name } = useParams()

  useEffect(() => {
    const access_token = window.localStorage.getItem('accessToken')
    if(access_token === 'undefined' || !access_token) {
      window.location.href = 'http://localhost:300'
    }
    axios.get('https://api.spotify.com/v1/browse/categories/' + name + '/playlists?access_token=' + access_token)
      .then(result => {
        setCategoryName(name)
        setItems(result.data.playlists.items)
      })
      .catch(err => { console.log(err) })
  }, [name])

  return <DumbGrid sectionName={categoryName} items={items} />
}

export default CategoryPlaylists;
