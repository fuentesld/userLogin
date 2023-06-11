import { useEffect, useState } from "react"
import PropTypes from "prop-types"

export const UserForm = ({handlerAddUser, initialUserForm, userSelected}) => {

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
      alert('Debe rellenar todos los campos del formulario')
      return
    }
    
    handlerAddUser(userForm)
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
    </form>
  </>)
}

UserForm.propTypes = {
  handlerAddUser: PropTypes.func.isRequired,
  initialUserForm: PropTypes.object.isRequired,
  userSelected: PropTypes.object.isRequired
}
