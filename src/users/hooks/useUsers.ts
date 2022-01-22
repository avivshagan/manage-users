import { createContext, useContext, useEffect, useState } from "react"
import { User, UserInputs } from "../models/users"
import { getUsers } from "../services/users-api";


type UserFilter = {
  id?: number;
  name?: string;
  username?: string;
}

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const init = async () => {
      setLoading(true)
      var _users = await getUsers();
      setUsers(_users)
      setFilteredUsers(_users);
      setLoading(false)
    }
    init();
  }, [])

  const filter = (filters: UserFilter): void => {
    let _users = users;
    if (filters.name) {
      _users = _users.filter(a => a.name.includes(filters.name || ""))
    }
    setFilteredUsers(_users);
  }

  const deleteUser = (id: number): void => {
    let newUsers = users.filter(u => u.id !== id)
    setUsers(newUsers);
    setFilteredUsers(newUsers);
  }

  const addUser = (user: UserInputs): void => {
    let maxId = Math.max.apply(Math, users.map(function (u) { return u.id }));
    let newUser: User = {
      id: maxId + 1,
      ...user
    }
    let newUsers = [...users, newUser]
    setUsers(newUsers)
    setFilteredUsers(newUsers)
    //users.push(newUser); - ask shai
    setFilteredUsers(users);
  }

  return {
    users,
    filteredUsers,
    loading,
    filter,
    deleteUser,
    addUser
  }
}

interface IUsers {
  users: User[]
  filteredUsers: User[]
  loading: boolean
  filter: (filters: UserFilter) => void
  deleteUser: (userID: number) => void
  addUser: (user: UserInputs) => void
}

export const UsersContext = createContext<IUsers>({} as IUsers);

export const useUsersCtx = () => useContext(UsersContext);