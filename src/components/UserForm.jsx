import { useEffect, useState } from "react"
import PropTypes from "prop-types"
import Swal from "sweetalert2"
import { useContext } from "react"
import { UserContext } from "../context/userContext"

export const UserForm = ({ userSelected, handlerCloseForm, }) => {

  const {initialUserForm, handlerAddUser} = useContext(UserContext)
  const [userForm, setUserForm] = useState(initialUserForm)
  const {id, username, password, email} = userForm

  useEffect(() => {
    setUserForm(
      {
        ...userSelected,
        password: ''
      })
  }, [userSelected])
  

  const onInputChange = ({target}) => {
    const {name, value} = target
    setUserForm({
      ...userForm,
      [name]: value,
    })
  }

  const onSubmit = (event) => {
    event.preventDefault()
    if (!username || (!password && id === 0) || !email) {
      Swal.fire(
        'Error de validación',
        'Debe completar todos los campos del formulario',
        'error'
      )
      return
    }
    
    handlerAddUser(userForm)
    setUserForm(initialUserForm)
  }

  const onCloseForm = () => {
    handlerCloseForm()
    setUserForm(initialUserForm)
  }
  return (<>
    <form onSubmit = {onSubmit}>
      <input 
        type="hidden"
        name="id"
        value={id}
      />
      <input 
        type="text" 
        className="form-control my-3 w-75"
        placeholder="Username"
        value= {username}
        name="username" 
        onChange={onInputChange}
      />
      {id > 0
            || <input 
            type="password" 
            className="form-control my-3 w-75"
            placeholder="Password"
            value= {password}
            name="password" 
            onChange={onInputChange}
          />
      }
      
      <input 
        type="email" 
        className="form-control my-3 w-75"
        placeholder="Email"
        value= {email}
        onChange={onInputChange}
        name="email" 
      />
      <button className="btn btn-primary" 
        type="submit">
          {id === 0
            ? 'Crear'
            : 'Editar'}
          
      </button>

      {!handlerCloseForm 
        ||  <button 
              className="btn btn-primary mx-2" 
              type="button"
              onClick={onCloseForm}>
              Cerrar
            </button>}
      
    </form>
  </>)
}

UserForm.propTypes = {
  userSelected: PropTypes.object.isRequired,
  handlerCloseForm: PropTypes.func,
}
