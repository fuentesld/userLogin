import PropTypes from 'prop-types'
import {Navigate, Routes, Route} from 'react-router-dom'
import { UsersPage } from '../pages/UsersPage'
import { Navbar } from '../components/layout/Navbar'
import { RegisterPage } from '../pages/RegisterPage'

export const UserRoutes = ({login, handlerLogout}) => {
  return (
    <>
      <Navbar 
          login = {login}
          handlerLogout = {handlerLogout} />
          
      <Routes>
        <Route  path="users" element={<UsersPage />}/>
        <Route  path="users/register" 
                element={<RegisterPage  
                            handlerAddUser={handlerAddUser} 
                            initiaUserForm={initiaUserForm}/>}/>
        <Route  path="/" element={<Navigate to="/users"/>} />
      </Routes>
    </>
  )
}

UserRoutes.propTypes = {
  login: PropTypes.object.isRequired,
  handlerLogout: PropTypes.func.isRequired,
}
