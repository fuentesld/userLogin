// import React from 'react'
import { useContext } from "react"
import { UserContext } from "../context/userContext"
import { UserForm } from "./UserForm"
import { PropTypes } from "prop-types"

export const UserModalForm = () => {
  const {userSelected, handlerCloseForm} = useContext(UserContext)

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
                  userSelected={ userSelected }
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
  userSelected: PropTypes.object,
  handlerCloseForm: PropTypes.func,
}
