// import React from 'react'
import PropTypes from 'prop-types'

const UserRow = ({id, username, email, handlerRemoveUser }) => {
  const onRemoveUser = (id) => {
    handlerRemoveUser(id)
  }
  return (
    <tr>
      <td>{id}</td>
      <td>{username}</td>
      <td>{email}</td>
      <td>
        <button 
          type='button'
          className='btn btn-secondary btn-sm'>
          Actualizar
        </button>
      </td>
      <td>
        <button 
          type='button'
          className='btn btn-danger btn-sm'
          onClick={() => onRemoveUser(id)}
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
  handlerRemoveUser: PropTypes.func.isRequired,
}

export default UserRow