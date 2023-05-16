import React from 'react'
import { Link } from 'react-router-dom'
import { GrAdd } from 'react-icons/gr'

const AddButton = () => {
  return (
    <Link to='/note/new' className='floating-button'>
        <GrAdd />
    </Link>
  )
}

export default AddButton