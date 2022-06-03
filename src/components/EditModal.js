import React, { useState } from 'react'
import data from '../data'

const EditModal = ({ open, currentP }) => {
  const [first, setFirst] = useState('')
  const [last, setLast] = useState('')
  const [city, setCity] = useState('')
  const [country, setCountry] = useState('')
  const [jobTitle, setJobTitle] = useState('')
  const [employer, setEmployer] = useState('')
  const [favMovie1, setFaveMovie1] = useState('')
  const [favMovie2, setFaveMovie2] = useState('')
  const [favMovie3, setFaveMovie3] = useState('')

  const editPerson = () => {}
  if (!open) return null
  return (
    <div className="form-container">
      <h1>Edit current user in directory</h1>
      <form>
        <label htmlFor="first">First Name</label>
        <input
          type="text"
          id="first"
          value={currentP.name.first}
          onChange={e => setFirst(e.target.value)}
        />
        <label htmlFor="last">Last Name</label>
        <input
          type="text"
          id="last"
          value={currentP.name.last}
          onChange={e => setLast(e.target.value)}
        />
        <br />
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          value={currentP.city}
          onChange={e => setCity(e.target.value)}
        />
        <label htmlFor="country">Country</label>
        <input
          type="text"
          id="country"
          value={currentP.country}
          onChange={e => setCountry(e.target.value)}
        />
        <br />
        <label htmlFor="job-title">Job Title</label>
        <input
          type="text"
          id="job-title"
          value={currentP.title}
          onChange={e => setJobTitle(e.target.value)}
        />
        <br />
        <label htmlFor="employer">employer</label>
        <input
          type="text"
          id="employer"
          value={currentP.employer}
          onChange={e => setEmployer(e.target.value)}
        />
        <br />
        <label htmlFor="movies">Favorite movies</label>
        <br />
        <input
          type="text"
          id="movies"
          value={currentP.favoriteMovies[0]}
          onChange={e => setFaveMovie1(e.target.value)}
        />
        <br />
        <input
          type="text"
          id="movies"
          value={currentP.favoriteMovies[1]}
          onChange={e => setFaveMovie2(e.target.value)}
        />
        <br />
        <input
          type="text"
          id="movies"
          value={currentP.favoriteMovies[2]}
          onChange={e => setFaveMovie3(e.target.value)}
        />
        <input type="submit" />
      </form>
    </div>
  )
}

export default EditModal
