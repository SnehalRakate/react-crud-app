import React, { useEffect, useState } from "react";

const FetchUsers=()=>{
    const [show, setShow] = useState(false);
    const [user,setUsers] = useState([])
    
    useEffect(()=>{
        fetch("http://jsonplaceholder.typicode.com/users")
        .then(res=> res.json())
        .then(data=> setUsers(data))
    },[])

    return(
        <div>
          <button onClick={()=>setShow(!show)}>{show?"Hide ":" Load "}User</button>
          {show?<ul>
            {user.map((user,index)=> (
                <li key={index}>{user.name}</li>
            ))}
          </ul>: ""}
        </div>
    )
}
export default FetchUsers;