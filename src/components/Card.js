import React from 'react'
import { Link } from 'react-router-dom'

import '../static/dumbgrid.scss'

const Card = (props) => {

  let destination = ''
  let reqCase = ''

  if (props.sectionName === 'new releases') {
    destination = '/content/playlist/'
    reqCase = 2
  } else if (props.sectionName === 'categories') {
    destination = '/content/categories/'
    reqCase = 1
  } else if (props.sectionName === 'results:') {
    destination = '/content/playlist/'
    reqCase = 3
  } else {
    destination = '/content/playlist/'
    reqCase = 1
  }

  return (
    <div className="card">
      <Link to={destination + props.id + '?case=' + reqCase}>
        <div className="container-data">
          {
            props.images ? 
              <img src={props.images[0].url}  id={props.id} alt=""/>
              : <img src={props.icons[0].url} id={props.id} alt=""/>
          }
          {
            props.sectionName === 'categories' ? 
              <div className="image-text">
                {props.name}
              </div>
                : null
          }
        </div>
      </Link>
    </div>
  )
}

export default Card;
