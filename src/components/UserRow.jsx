// import React from 'react'
import PropTypes from 'prop-types'

const UserRow = ({id, username, email}) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{username}</td>
      <td>{email}</td>
      <td>
        <button 
          type='button'
          className='btn btn-secondary btn-sm'>
          Actulizar
        </button>
      </td>
      <td>
        <button 
          type='button'
          className='btn btn-danger btn-sm'>
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