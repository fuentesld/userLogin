import PropTypes from "prop-types"
import { useAuth } from "../hooks/UseAuth"
import { AuthContext } from "./AuthContext"

export const AuthProvider = ({children}) => {
  const { login, handlerLogin, handlerLogout, } = useAuth()
  return (
    <AuthContext.Provider value={
      { login, 
        handlerLogin, 
        handlerLogout, 
      }
    }>
      {children}
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
  children: PropTypes.object.isRequired
}