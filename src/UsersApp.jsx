import { useReducer, useState } from "react"
import { UserForm } from "./components/UserForm"
import { UsersList } from "./components/UsersList"
import { usersReducer } from "./reducers/usersReducer"

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

export const UsersApp = () => {

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
    console.log(user);
    setUserSelected({...user})
  }
  
  return (
    <div className="container my-4">
      <h2>Users App</h2>
      <div className="row">

        <div className="col">
          <UserForm
            initialUserForm={ initialUserForm }
            handlerAddUser = { handlerAddUser }
            userSelected={ userSelected }
          />
        </div>

        <div className="col">
          {users.length === 0 
            ? <div className="alert alert-warning">No hay usuarios en el sistema</div>
            : <UsersList 
                users = {users}
                handlerRemoveUser = { handlerRemoveUser }
                handlerUserSelectedForm = {handlerUserSelectedForm}/>
          }
        </div>

      </div>
    </div>
  )
}