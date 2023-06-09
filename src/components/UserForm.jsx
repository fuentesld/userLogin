import { useState } from "react"

const initialUserForm = {
  username: '',
  password: '',
  email: ''
}

export const UserForm = () => {

  const [userForm, setUserForm] = useState(initialUserForm)
  const {username, password, email} = userForm

  const onInputChange = ({target}) => {
    const {name, value} = target
    setUserForm({
      ...userForm,
      [name]: value,
    })
  }

  const onSubmit = (event) => {
    event.preventDefault()
    if (!username || !password || !email) {
      alert('Debe rellenar todos los campos del formulario')
      return
    }
    console.log('enviando formulario');
    //todo Guadar datos de usuario
    setUserForm(initialUserForm)
  }
  return (<>
    <form onSubmit = {onSubmit}>
      <input 
        type="text" 
        className="form-control my-3 w-75"
        placeholder="Username"
        value= {username}
        name="username" 
        onChange={onInputChange}
      />
      <input 
        type="password" 
        className="form-control my-3 w-75"
        placeholder="Password"
        value= {password}
        name="password" 
        onChange={onInputChange}
      />
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
          Crear
      </button>
    </form>
  </>)
}
