// import { UserForm } from "./components/UserForm"
import { UsersPage } from "./pages/UsersPage"
import { LoginPage } from "./auth/pages/LoginPage"
import { Navbar } from "./components/layout/Navbar"
import { useAuth } from "./auth/hooks/UseAuth"


export const UsersApp = () => {
  const {login, handlerLogin, handlerLogout} = useAuth()


  return (<>
    {login.isAuth 
      ? (<>
          <Navbar handlerLogout = {handlerLogout}
              login = {login}/>
          <UsersPage />
        </>) 
      : <LoginPage handlerLogin = {handlerLogin}/>}
    
  </>)
}