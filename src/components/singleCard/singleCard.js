import React from 'react'
import './singleCard.css'

function SingleCard({id, image, title, description, price}) {
 
  return (
    <div className='full-card'>
    <div className='card-top' key={id}>
      <img className='card-image' src={image} alt="image" />
    </div>
    <div className='card-bottom'>
      <h1 className='card-title'>title={title}</h1>
      <p className='card-description'>description={description}</p>
      <p className='card-price'>price = {price}</p>

    </div>
    </div>
  )
}

export default SingleCard
