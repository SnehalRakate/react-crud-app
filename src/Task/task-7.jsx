import React, { useEffect, useState } from "react";

const SearchBar=()=>{
    const [search , setSearch] = useState("");
    const [users, setUsers] = useState([])
        
    useEffect(()=>{
      fetch("http://jsonplaceholder.typicode.com/users")
      .then(res=> res.json())
      .then(data=> setUsers(data))
    },[])

    const filterdItem = users.filter((i)=> i.name.toLowerCase().includes(search.toLowerCase()));

    return(
        <div>
            <input type="text" 
            value={search}
            placeholder="Search User"
            onChange={(e)=>setSearch(e.target.value)}
            />
            <ul>
                {filterdItem.map(user=> (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
            {filterdItem.length === 0 && <p>No users found</p>}

        </div>
    )
}
export default SearchBar;