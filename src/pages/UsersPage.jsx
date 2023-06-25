import PropTypes from "prop-types"
import { UserModalForm } from "../components/UserModalForm"
import { UsersList } from "../components/UsersList"

export const UsersPage = ({
  initialUserForm,
  users, 
  userSelected, 
  visibleForm,
  handlerAddUser, 
  handlerRemoveUser, 
  handlerUserSelectedForm,
  handlerOpenForm,
  handlerCloseForm,
}) => {
  

  
  return (<>
    { !visibleForm || 
        <UserModalForm 
          initialUserForm = {initialUserForm}
          userSelected = {userSelected}
          handlerAddUser = {handlerAddUser}
          handlerCloseForm = {handlerCloseForm}
        />
    }
    
    <div className="container my-4">
      <h2>Users App</h2>
      <div className="row">
        <div className="col">
          {visibleForm || <button 
                className="btn btn-primary my-2"
                onClick={handlerOpenForm}>
                Nuevo Usuario
              </button>
          }


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
  </>)
}

UsersPage.propTypes = {
  initialUserForm: PropTypes.object.isRequired,
  users: PropTypes.array.isRequired,
  userSelected: PropTypes.object.isRequired,
  visibleForm: PropTypes.bool.isRequired,
  handlerAddUser:PropTypes.func.isRequired,
  handlerRemoveUser: PropTypes.func.isRequired,
  handlerOpenForm:PropTypes.func.isRequired,
  handlerUserSelectedForm: PropTypes.func.isRequired,
  handlerCloseForm:PropTypes.func.isRequired,
}