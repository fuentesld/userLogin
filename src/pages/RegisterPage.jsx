import { useState } from 'react'
import PropTypes from 'prop-types'
import { UserForm } from '../components/UserForm'


export const RegisterPage = ({handlerAddUser, initialUserForm}) => {
  const [userSelected, setUserSelected] = useState(initialUserForm)
  // setUserSelected(initialUserForm)
  return (
    <div className='container my-4'>
        <h4>Registro de usuarios</h4>
        <div className="row">
          <div className="col">
            <UserForm 
              userSelected = {userSelected}
              handlerAddUser={handlerAddUser} 
              initialUserForm={initialUserForm}
            />
          </div>
        </div>
    </div>
  )
}

RegisterPage.propTypes = {
  handlerAddUser: PropTypes.func.isRequired,
  initialUserForm: PropTypes.object.isRequired,
}
