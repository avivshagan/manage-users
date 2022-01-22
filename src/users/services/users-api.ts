import axios from "axios";
import { User } from "../models/users";

const delay = (ms = 1000) => new Promise<any>((res, rej) => {
  setTimeout(() => {
    res({})
  }, ms);
})

export const getUsers = async () => {
  var response = await axios.get<User[]>("https://jsonplaceholder.typicode.com/users")
  await delay(2000);
  return response.data;
}