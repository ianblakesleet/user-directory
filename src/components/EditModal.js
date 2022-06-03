import React, { useState, useEffect } from 'react'
import data from '../data'

const EditModal = ({ open, currentP, index, closeModal }) => {
  const [first, setFirst] = useState('')
  const [last, setLast] = useState('')
  const [city, setCity] = useState('')
  const [country, setCountry] = useState('')
  const [jobTitle, setJobTitle] = useState('')
  const [employer, setEmployer] = useState('')
  const [favMovie1, setFaveMovie1] = useState('')
  const [favMovie2, setFaveMovie2] = useState('')
  const [favMovie3, setFaveMovie3] = useState('')

  useEffect(() => {
    setFirst(currentP.name.first)
    setLast(currentP.name.last)
    setCity(currentP.city)
    setCountry(currentP.country)
    setJobTitle(currentP.title)
    setEmployer(currentP.employer)
    setFaveMovie1(currentP.favoriteMovies[0])
    setFaveMovie2(currentP.favoriteMovies[1])
    setFaveMovie3(currentP.favoriteMovies[0])
  }, [index])

  console.log(first)

  const onSubmitEdit = e => {
    e.preventDefault()
    let userObj = {
      id: `${index + 1}`,
      name: { first: `${first}`, last: `${last}` },
      city: `${city}`,
      country: `${country}`,
      employer: `${employer}`,
      title: `${jobTitle}`,
      favoriteMovies: [`${favMovie1}`, `${favMovie2}`, `${favMovie3}`],
    }
    data.splice(index, 1, userObj)
    closeModal()
  }
  if (!open) return null
  return (
    <div className="form-container">
      <h1>Edit current user in directory</h1>
      <form onSubmit={onSubmitEdit}>
        <label htmlFor="first">First Name</label>
        <input
          type="text"
          id="first"
          value={first}
          onChange={e => setFirst(e.target.value)}
        />
        <label htmlFor="last">Last Name</label>
        <input
          type="text"
          id="last"
          value={last}
          onChange={e => setLast(e.target.value)}
        />
        <br />
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          value={city}
          onChange={e => setCity(e.target.value)}
        />
        <label htmlFor="country">Country</label>
        <input
          type="text"
          id="country"
          value={country}
          onChange={e => setCountry(e.target.value)}
        />
        <br />
        <label htmlFor="job-title">Job Title</label>
        <input
          type="text"
          id="job-title"
          value={jobTitle}
          onChange={e => setJobTitle(e.target.value)}
        />
        <br />
        <label htmlFor="employer">employer</label>
        <input
          type="text"
          id="employer"
          value={employer}
          onChange={e => setEmployer(e.target.value)}
        />
        <br />
        <label htmlFor="movies">Favorite movies</label>
        <br />
        <input
          type="text"
          id="movies"
          value={favMovie1}
          onChange={e => setFaveMovie1(e.target.value)}
        />
        <br />
        <input
          type="text"
          id="movies"
          value={favMovie2}
          onChange={e => setFaveMovie2(e.target.value)}
        />
        <br />
        <input
          type="text"
          id="movies"
          value={favMovie3}
          onChange={e => setFaveMovie3(e.target.value)}
        />
        <input type="submit" />
      </form>
    </div>
  )
}

export default EditModal
