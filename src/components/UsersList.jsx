// import PropTypes from 'prop-types'
import UserRow from './UserRow'
import { useContext } from 'react'
import { UserContext } from '../context/userContext'

export const UsersList = () => {
  const {users,}=useContext(UserContext)
  return (<>
      <table className="table table-hover table striped">
        <thead>
          <tr>
            <th>#</th>
            <th>username</th>
            <th>email</th>
            <th>update</th>
            <th>update route</th>
            <th>remove</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map(({id, username, email}) => (
                <UserRow 
                  key = {id} 
                  id = {id}
                  username = {username}
                  email={email}
                />
              )
            )
          }

        </tbody>
      </table>
  </>)
}

// UsersList.propTypes = {
//   users: PropTypes.array.isRequired,
//   handlerRemoveUser: PropTypes.func.isRequired,
//   handlerUserSelectedForm: PropTypes.func.isRequired
// }
