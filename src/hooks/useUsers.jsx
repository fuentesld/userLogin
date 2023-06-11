import { useReducer, useState } from "react"
import { usersReducer } from "../reducers/usersReducer"

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

  const handlerAddUser = (user)=>{
    
    distpatch(
      {
        type: (user.id===0 ) ? 'addUser' : 'updateUser',
        payload: user
      }
    )
  }

  const handlerRemoveUser = (id) => {
    distpatch({
      type: 'removeUser',
      payload: id,
    })
  }

  const handlerUserSelectedForm = (user) => {
    setUserSelected({...user})
  }
  
  return {
    initialUserForm,
    users, 
    userSelected, 

    handlerAddUser, 
    handlerRemoveUser, 
    handlerUserSelectedForm 
  }
}
