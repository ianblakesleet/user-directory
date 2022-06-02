import React, { useState } from 'react'
import data from '../data'
import './Card.css'
import Person from './Person'
import Buttons from './Buttons'
const Card = () => {
  const [index, setIndex] = useState(0)
  const currentP = data[index]
  console.log(index)

  return (
    <>
      <div className="card-container">
        <Person currentPerson={currentP} />
      </div>
      <Buttons index={index} setIndex={setIndex} />
    </>
  )
}

export default Card
