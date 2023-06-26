// import React from 'react'
import {NavLink} from "react-router-dom"
import PropTypes from 'prop-types'
import { useContext } from "react"
import { UserContext } from "../context/userContext"

const UserRow = ({id, username, email, }) => {
  const {handlerRemoveUser, handlerUserSelectedForm, } = useContext(UserContext)
  return (
    <tr>
      <td>{id}</td>
      <td>{username}</td>
      <td>{email}</td>
      <td>
        <button 
          type='button'
          className='btn btn-secondary btn-sm'
          onClick= {() => handlerUserSelectedForm({
            id,
            username,
            email, 
          })}>
          Editar
        </button>
      </td>
      <td>
        <NavLink 
          className={'btn btn-secondary btn-sm'} 
          to={'/users/edit/' + id}>
            {'users/edit/' + id}
        </NavLink>
      </td>
      <td>
        <button 
          type='button'
          className='btn btn-danger btn-sm'
          onClick={() => handlerRemoveUser(id)}
        >
          Borrar
        </button>
      </td>
    </tr>
  )
}

UserRow.propTypes = {
  id:PropTypes.number.isRequired,
  username:PropTypes.string.isRequired,
  email:PropTypes.string.isRequired,
}

export default UserRow