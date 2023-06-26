import PropTypes from 'prop-types'
import { UserContext } from "./userContext"
import { useUsers } from '../hooks/useUsers'

export const UserProvider = ({children})=>{
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
    <UserContext.Provider value={
      {
        initialUserForm,
        users, 
        userSelected, 
        visibleForm,
        handlerAddUser, 
        handlerRemoveUser, 
        handlerUserSelectedForm,
        handlerOpenForm,
        handlerCloseForm,
      }
    }>
      {children}
    </UserContext.Provider>
  )
}

UserProvider.propTypes={
  children: PropTypes.array.isRequired,
}