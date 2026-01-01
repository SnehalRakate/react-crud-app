import React, { useEffect, useState } from "react";

const SearchUsers=()=>{
    const [search,setSearch] = useState('');
    const [users,setUsers] = useState([]);
    const [loading,setLoading] = useState(true);
    

    const filterdItems = users.filter((i)=> 
        i.email.toLowerCase().includes(search.toLowerCase()));

    const handelChange=(e)=>{
        setSearch(e.target.value)
    }

    useEffect(()=>{
       fetch("https://jsonplaceholder.typicode.com/users")
       .then(res=> res.json())
       .then((data)=> {
        setUsers(data)
        setLoading(false)
       })
    },[])

    const handelDelete=(id)=>{
        setUsers(users.filter(user=> user.id !== id));
    }

    return(
        <div>
            <h2>User Management</h2>
            <input type="text" 
            value={search}
            placeholder="UserEmail"
            onChange={handelChange}
            />
            <div className="container my-5">
                <div className="row g-4">
                    {loading? <p>Users Loading..!</p>: filterdItems.map(user=> (
                    <div className="col-12 col-md-6 col-lg-3" key={user.id}>
                        <div className="card shadow h-100">
                            <div className="card-body text-center">
                                <h2 className="card-title">
                                  {user.name}
                                </h2>
                                <p className="card-text">{user.email}</p>
                                 <button onClick={()=> handelDelete(user.id)}>Delete</button>
                            </div>
                        </div>
                    </div> 
                ))}
                </div>
            </div>
             {filterdItems.length ===0 && <p>User not found</p>}


        </div>
    )
}
export default SearchUsers;