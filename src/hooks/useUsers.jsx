import { useReducer, useState } from "react"
import { useNavigate } from "react-router-dom"
import { usersReducer } from "../reducers/usersReducer"
import Swal from "sweetalert2"

const initialUsers =[
  {
    id:1,
    username: 'pepe',
    password: '12345',
    email: 'pepe@correo.com' 
  },
]

const initialUserForm = {
  id: 0,
  username: '',
  password: '',
  email: ''
}

export const useUsers = () => {
  
  const [users, distpatch] = useReducer(usersReducer, initialUsers)
  const [userSelected, setUserSelected] = useState(initialUserForm)
  const [visibleForm, setVisibleForm] = useState(false)
  const navigate = useNavigate()

  const handlerAddUser = (user)=>{
    
    distpatch(
      {
        type: (user.id===0 ) ? 'addUser' : 'updateUser',
        payload: user
      }
    )
    Swal.fire(
      (user.id===0 ) 
        ? 'Usuario Creado'
        : 'Usuario Actualizado',
      (user.id===0 ) 
        ? 'El usuario ha sido creado con exito'
        : 'El usuario ha sido actualizado correctamente',
      'success'
    )
    handlerCloseForm()
    navigate('/users')
  }

  const handlerRemoveUser = (id) => {
    Swal.fire({
      title: 'Esta seguro que desea eliminar?',
      text: 'No podra revertir esta operación!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar!'
    }).then((result) => {
      
      if (result.isConfirmed) {
        distpatch({
          type: 'removeUser',
          payload: id,
        })
        Swal.fire(
          'Usuario Eliminado!',
          'El usuario ha sido eliminado con exito.',
          'success'
        )
      }
    })
  }

  const handlerUserSelectedForm = (user) => {
    setVisibleForm(true)
    setUserSelected({...user})
  }

  const handlerOpenForm = () => {
    setVisibleForm(true)
  }

  const handlerCloseForm = () => {
    setVisibleForm(false)
    setUserSelected(initialUserForm)
  }
  
  return {
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
}
