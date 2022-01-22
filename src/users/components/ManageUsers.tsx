import { UsersContext, useUsers } from "../hooks/useUsers";
import AddUser from "./AddUser";
import Filters from "./Filters";
import Table from "./Table";



const ManageUsers = () => {
  const users = useUsers();
  return (
    <UsersContext.Provider value={users}>
      <Filters />
      <Table />
      <AddUser />
    </UsersContext.Provider>
  )
}

export default ManageUsers;