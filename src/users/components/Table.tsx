import {useUsersCtx } from "../hooks/useUsers";

const Loading = () => {
  return <div>loading...</div>
}

const Table = () => {
  const {loading, filteredUsers, deleteUser} = useUsersCtx();

  if (loading) {
    return <Loading />
  }
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>username</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user, index) => {
            return (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td><button onClick={() => deleteUser(user.id)}>Delete</button></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Table;