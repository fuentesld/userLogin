import { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import PropTypes from 'prop-types'
import { UserForm } from '../components/UserForm'


export const RegisterPage = ({ users=[],handlerAddUser, initialUserForm}) => {
  const [userSelected, setUserSelected] = useState(initialUserForm)
  const {id} = useParams()
  const user = users.find(u => u.id == id) || initialUserForm

  useEffect(() => {
    if (user.id > 0) setUserSelected(user)
  }, [user])
  
  return (
    <div className='container my-4'>

        <h4>{userSelected.id > 0
              ?'Editar'
              :'Registrar'} 
              Usuario
        </h4>

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
  users:PropTypes.array,
  handlerAddUser: PropTypes.func.isRequired,
  initialUserForm: PropTypes.object.isRequired,
}
