import PropTypes from 'prop-types'
import {Navigate, Routes, Route} from 'react-router-dom'
import { UsersPage } from '../pages/UsersPage'
import { Navbar } from '../components/layout/Navbar'
import { RegisterPage } from '../pages/RegisterPage'
import { useUsers } from '../hooks/useUsers'

export const UserRoutes = ({login, handlerLogout}) => {
  const {
    initialUserForm,
    users, 
    userSelected, 
    visibleForm,
    handlerAddUser, 
    handlerRemoveUser, 
    handlerUserSelectedForm,
    handlerOpenForm,
    handlerCloseForm,
  } = useUsers()

  return (
    <>
      <Navbar 
          login = {login}
          handlerLogout = {handlerLogout} />
          
      <Routes>
        <Route  
          path=     "users" 
          element=  {<UsersPage 
                        initialUserForm = {initialUserForm}
                        users={users}
                        userSelected= {userSelected}
                        visibleForm={visibleForm}
                        handlerAddUser={handlerAddUser}
                        handlerRemoveUser={handlerRemoveUser}
                        handlerUserSelectedForm={handlerUserSelectedForm}
                        handlerOpenForm={handlerOpenForm}
                        handlerCloseForm={handlerCloseForm}

                    />}
        />

        <Route  
          path=     "users/register" 
          element=  {<RegisterPage  
                        handlerAddUser={handlerAddUser} 
                        initialUserForm={initialUserForm}
                    />}
        />

        <Route  
          path=     "/" 
          element=  {<Navigate to="/users"/>} 
        />
      </Routes>
    </>
  )
}

UserRoutes.propTypes = {
  login: PropTypes.object.isRequired,
  handlerLogout: PropTypes.func.isRequired,
}
