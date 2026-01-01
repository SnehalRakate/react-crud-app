import React, { useEffect } from "react";
import { useState } from "react";

const CrudComplete=()=>{
  const [users,setUsers]= useState([]);
  const [name,setName] = useState("");
  const [email,setEmail] = useState('');
  const [editId,setEditId] = useState(null);

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=> res.json())
    .then(data => {
      console.log(data);
      
      setUsers(data)})
  },[])

  const handleCreate=()=>{
    if(!name || !email){
      alert('All fileds are required')
      return
    }
    const newUser={
      id: users.length ? users[users.length-1].id+1:1,
      name,
      email
    }
    setUsers([...users, newUser]);
    setName('');
    setEmail('')
  }

  const handelEdit=(user)=>{
    setEditId(user.id);
    setName(user.name);
    setEmail(user.email);
  }

  const handelUpdate=()=>{
    const updatedUser = users.map(user=>
      user.id === editId ? {...user, name,email}:user
    );
    setUsers(updatedUser)
    setName('');
    setEmail('');
    setEditId(null);
  }

  const handelDelete=(id)=>{
    setUsers(users.filter(user=> user.id !== id));
  }


  return(
    <div style={{padding:"20px"}}>
      <h2>CRUD APP</h2>
      <input type="text" 
      value={name}
      placeholder="Username"
      onChange={(e)=>setName(e.target.value)}
      className="form-control my-3"
      />
      <input type="text" 
      value={email}
      placeholder="User Email"
      onChange={(e)=>setEmail(e.target.value)}
      className="form-control my-3"
      />
      {editId ? (<button onClick={handelUpdate} className="btn btn-warning  w-100">Update</button>):(<button className="btn btn-success  w-100" onClick={handleCreate}>Create</button>)}

      <table className="table table-striped table-bordered" border="1" cellPadding="10" style={{marginTop:"20px", width:"100%"}}>
        <thead className="text-center">
          <tr><th>Id</th><th>Name</th><th>Email</th><th>Actions</th></tr>
        </thead>

        <tbody>
          {users.map(user=> (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button className="btn btn-primary mx-3" onClick={()=> handelEdit(user)}>Edit</button>
                <button className="btn btn-danger" onClick={()=>handelDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))}

        </tbody>
      </table>
    </div>
  )
}
export default CrudComplete;