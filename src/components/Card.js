import React, { useState } from 'react'
import data from '../data'
import './Card.css'
import Person from './Person'
import Buttons from './Buttons'
import Modal from './Modal'
import EditModal from './EditModal'
const Card = () => {
  const [index, setIndex] = useState(0)
  const [rerender, setReRender] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenEdit, setIsOpenEdit] = useState(false)

  const currentP = data[index]

  console.log(index)

  const deleteFunction = () => {
    data.splice(index, 1)
    setReRender(!rerender)
  }
  const openModal = () => {
    setIsOpen(true)
  }
  const openModalEdit = () => {
    setIsOpenEdit(true)
  }

  return (
    <>
      <div className="card-container">
        <Person currentPerson={currentP} index={index} />
      </div>
      <Buttons
        index={index}
        setIndex={setIndex}
        delFunc={deleteFunction}
        openModal={openModal}
        openModalEdit={openModalEdit}
      />
      <Modal open={isOpen} closeModal={() => setIsOpen(false)}></Modal>
      <EditModal
        index={index}
        open={isOpenEdit}
        currentP={currentP}
        closeModal={() => setIsOpenEdit(false)}
      ></EditModal>
    </>
  )
}

export default Card
