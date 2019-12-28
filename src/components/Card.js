import React from 'react'
import { Link } from 'react-router-dom'

import { getSectionData } from '../configs/section-data'

import '../static/dumbgrid.scss'


const CardImage = (props) => {
  return <img src={props.src} id={props.id} alt={props.alt} />
}


const ImageText = (props) => {
  return <div className="image-text">{props.name}</div>
}


const Card = (props) => {

  const { destination, reqCase } = getSectionData(props.sectionName)
  const image = props.images ? props.images[0] : props.icons[0]
  const sectionName = props.sectionName

  return (
    <div className="card">
      <Link to={destination + props.id + '?case=' + reqCase}>
        <div className="container-data">
          <CardImage src={image.url} id={props.id} alt="" />
          { sectionName === 'categories' ? <ImageText name={props.name}/> : null }
        </div>
      </Link>
    </div>
  )
}

export default Card;
