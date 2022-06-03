import React from 'react'
import './Buttons.css'
import data from '../data'

const Buttons = ({ index, setIndex, delFunc, openModal, openModalEdit }) => {
  const handleNext = e => {
    if (index >= `${data.length - 1}`) {
      alert('cant go anymo yo')
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
  const deleteHandler = () => {
    delFunc(index)
  }
  const modalHandler = () => {
    openModal()
  }
  const editModalHandler = () => {
    openModalEdit()
  }
  return (
    <div className="buttons-container">
      <div className="previousBtn">
        <button onClick={handlePrev}>Previous</button>
      </div>
      <div className="crudBtns">
        <button onClick={editModalHandler}>Edit</button>
        <button onClick={deleteHandler}>Delete</button>
        <button onClick={modalHandler}>New</button>
      </div>
      <div className="nextBtn">
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  )
}

export default Buttons
