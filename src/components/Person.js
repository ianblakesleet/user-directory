import data from '../data'
import React from 'react'

const Person = ({ currentPerson, index }) => {
  let movies = currentPerson.favoriteMovies.map((elem, index) => {
    return <li key={index}>{elem}</li>
  })
  // console.log(currentPerson)
  return (
    <div>
      <div className="id-container">
        {index + 1}/{data.length}
      </div>
      <div className="name-container">
        <h2>
          {currentPerson.name.first} {currentPerson.name.last}
        </h2>
      </div>
      <div className="about-container">
        <div>
          <b>From: </b>
          {currentPerson.city}, {currentPerson.country}
        </div>
        <div>
          <b>Job Title: </b>
          {currentPerson.title}
        </div>
        <div>
          <b>Employer: </b>
          {currentPerson.employer}
        </div>
      </div>
      <div className="movies-container">
        <div>
          <b>Favorite Movies: </b>
        </div>
        <ol>{movies}</ol>
      </div>
    </div>
  )
}

export default Person
