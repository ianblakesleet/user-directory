import React, { useState } from 'react'
import data from '../data'
import './Modal.css'

const Modal = ({ open, closeModal, setNewUser }) => {
  const [first, setFirst] = useState('')
  const [last, setLast] = useState('')
  const [city, setCity] = useState('')
  const [country, setCountry] = useState('')
  const [jobTitle, setJobTitle] = useState('')
  const [employer, setEmployer] = useState('')
  const [favMovie1, setFaveMovie1] = useState('')
  const [favMovie2, setFaveMovie2] = useState('')
  const [favMovie3, setFaveMovie3] = useState('')

  let randomId = Math.random()
  const onSubmitForm = e => {
    e.preventDefault()
    let userObj = {
      id: `${randomId}`,
      name: { first: `${first}`, last: `${last}` },
      city: `${city}`,
      country: `${country}`,
      employer: `${employer}`,
      title: `${jobTitle}`,
      favoriteMovies: [`${favMovie1}`, `${favMovie2}`, `${favMovie3}`],
    }
    data.unshift(userObj)
    closeModal()
    console.log('clicked')
  }

  if (!open) return null
  return (
    <div className="form-container">
      <h1>Add user to directory</h1>
      <form onSubmit={onSubmitForm}>
        <label htmlFor="first">First Name</label>
        <input
          type="text"
          id="first"
          onChange={e => setFirst(e.target.value)}
        />
        <label htmlFor="last">Last Name</label>
        <input type="text" id="last" onChange={e => setLast(e.target.value)} />
        <br />
        <label htmlFor="city">City</label>
        <input type="text" id="city" onChange={e => setCity(e.target.value)} />
        <label htmlFor="country">Country</label>
        <input
          type="text"
          id="country"
          onChange={e => setCountry(e.target.value)}
        />
        <br />
        <label htmlFor="job-title">Job Title</label>
        <input
          type="text"
          id="job-title"
          onChange={e => setJobTitle(e.target.value)}
        />
        <br />
        <label htmlFor="employer">employer</label>
        <input
          type="text"
          id="employer"
          onChange={e => setEmployer(e.target.value)}
        />
        <br />
        <label htmlFor="movies">Favorite movies</label>
        <br />
        <input
          type="text"
          id="movies"
          onChange={e => setFaveMovie1(e.target.value)}
        />
        <br />
        <input
          type="text"
          id="movies"
          onChange={e => setFaveMovie2(e.target.value)}
        />
        <br />
        <input
          type="text"
          id="movies"
          onChange={e => setFaveMovie3(e.target.value)}
        />
        <input type="submit" />
      </form>
    </div>
  )
}

export default Modal
