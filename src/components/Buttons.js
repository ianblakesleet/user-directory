import React from 'react'
import './Buttons.css'

const Buttons = ({ index, setIndex }) => {
  const handleNext = e => {
    if (index > 24) {
      console.log('exceeded 24')
      alert('thats it!')
      return
    }
    let nextIndex = index + 1
    setIndex(nextIndex)
  }
  const handlePrev = e => {
    if (index <= 0) {
      alert('cant go back more!')
      return
    }
    let prevIndex = index - 1
    setIndex(prevIndex)
  }
  return (
    <div className="buttons-container">
      <div className="previousBtn">
        <button onClick={handlePrev}>Previous</button>
      </div>
      <div className="crudBtns">
        <button>Edit</button>
        <button>Save</button>
        <button>Delete</button>
      </div>
      <div className="nextBtn">
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  )
}

export default Buttons
