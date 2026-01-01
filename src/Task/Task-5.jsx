import React, { useEffect, useState } from "react";

const FetchData=()=>{
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=> res.json())
        .then(data=> setUsers(data))
    },[])

    return(
        <div className="container my-4 ">
            <div className="row g-5">
            { users.map((user)=>(
            <div className="col-12 col-md-6 col-lg-3">    
            <div key={user.id} className="card mb-3 p-3 shadow h-100">
             <div className="card-body text-center">
               <h2>{user.name}</h2>
             <p>{user.email}</p>
             </div>
           </div>
           </div>
         ))}
             </div>
          </div>
       
    )
}
export default FetchData;