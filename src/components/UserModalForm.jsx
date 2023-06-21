// import React from 'react'
import { UserForm } from "./UserForm"
import { PropTypes } from "prop-types"

export const UserModalForm = ({initialUserForm, userSelected, handlerAddUser, handlerCloseForm,}) => {
  return (
    <div className="abrir-modal animacion fadeIn">
        <div className="modal" style={{display: "block"}} tabIndex={"-1"}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  {userSelected.id > 0 ? 'Editar' : 'Crear'} Usuario
                </h5>
              </div>
              <div className="modal-body">
                <UserForm
                  initialUserForm={ initialUserForm }
                  userSelected={ userSelected }
                  handlerAddUser = { handlerAddUser }
                  handlerCloseForm = { handlerCloseForm }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

UserModalForm.propTypes = {
  initialUserForm: PropTypes.object.isRequired,
  userSelected: PropTypes.object.isRequired,
  handlerAddUser: PropTypes.func.isRequired,
  handlerCloseForm: PropTypes.func.isRequired,

}