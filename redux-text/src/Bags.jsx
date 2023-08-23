import React from 'react'
import { useState } from 'react'


const Bags = (props) => {
  const{name, image, dollarPrice} =props

  return (
    <div >
        <p >{name}</p>
        <p >{dollarPrice}</p>
        <img className='image' src={image}/>
        </div>
  )
}

export default Bags