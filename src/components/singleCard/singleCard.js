import React from 'react'
import './singleCard.css'

function SingleCard({id, image, title, description, price}) {
 
  return (
    <div className='full-card'>
    <div className='card-top' key={id}>
      <img style={{width: '150px', height: '150px', paddingBottom: '10px'}} className='card-image' src={image} alt="image" />
    </div>
    <div className='card-bottom'>
      <h1 className='card-title'>{title}</h1>
      <p className='card-description'>{description}</p>
      <button className='card-price'>{price}$</button>
    </div>
    </div>
  )
}

export default SingleCard
