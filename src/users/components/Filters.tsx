import { useEffect, useState } from "react";
import { useUsersCtx } from "../hooks/useUsers";

const Filters = () => {
  const {loading, filter, users} = useUsersCtx()
  const [inName, setInName] = useState<string>("");

  useEffect(() => {
    setInName('')
    //console.log(users);
    
  }, [users])

  if (loading) {
    return null;
  }

  const onFilter = () => {
    filter({name: inName})
  }

  return (
    <div>
      <span>
        <label htmlFor="inName">name: </label> <input id="inName" value={inName} onChange={e => {
          setInName(e.target.value)
        }} />
      </span>
      <button onClick={onFilter}>filter</button>
    </div>
  )
}

export default Filters;