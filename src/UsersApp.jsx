// import { UserForm } from "./components/UserForm"
import { UsersPage } from "./pages/UsersPage"
import {LoginPage} from "./auth/pages/LoginPage"
import { useReducer } from "react"
import { loginReducer } from "./auth/reducers/loginReducer"
import Swal from 'sweetalert2'

const initialLogin = JSON.parse(sessionStorage.getItem('login'))|| 
        {
          isAuth: false,
          user:undefined
        }
export const UsersApp = () => {
  const [login, dispatch] = useReducer(loginReducer, initialLogin)

  const handlerLogin = ({username, password}) => {
    console.log(username);
    if(username === 'admin' && password === '12345'){
      const user = {username: 'admin'}
      dispatch({
        type: 'login',
        payload: user,
      })
      sessionStorage.setItem(
        'login', 
        JSON.stringify({isAuth:true, user}))
    } else {
      Swal.fire('Error de Validación', 'Username y password requerido', 'error')

    }
  }


  return (<>
    {login.isAuth 
      ? <UsersPage /> 
      : <LoginPage handlerLogin = {handlerLogin}/>}
    
  </>)
}