import React, { useEffect, useState } from "react";

const FetchAPI=()=>{
    const [users,setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=> res.json())
        .then(data=> {
             setUsers(data);
             setLoading(false);
        });
    },[])

   
    const handelDelete=(id)=>{
        setUsers(users.filter(user=> user.id !== id));
    }

    return(
        <div>
        <h2>User Management</h2>
      <div className="container my-5">
        <div className="row g-5" >
            {loading ? <p>User Loading...!</p>:users.map(user => (
            <div className="col-12 col-md-6 col-lg-3 " key={user.id}>
                <div className="card shadow mb-3 p-3 h-100">
                    <div className="card-body text-center">
                         <span className="card-title">{user.name}</span>
                        <button onClick={() => handelDelete(user.id)}>Delete</button>
                    </div>
                     </div>
                      </div>
                         ))}

        </div>

      </div>
           
        </div>
    )

}
export default FetchAPI;