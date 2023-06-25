import React, { useState } from 'react'
import { UserForm } from '../components/UserForm'


export const RegisterPage = ({handlerAddUser, initiaUserForm}) => {
  const [userSelected, setUserSelected] = useState(initiaUserForm)
  return (
    <div className='container my-4'>
        <h4>Registro de usuarios</h4>
        <div className="row">
          <div className="col">
            <UserForm 
              userSelected = {userSelected}
              handlerAddUser={handlerAddUser} 
              initialUserForm={initiaUserForm}
            />
          </div>
        </div>
    </div>
  )
}
