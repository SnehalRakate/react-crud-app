import React, { useState } from "react";

const FormHandling=()=>{
     const [name, setName] = useState("")

     return(
        <form action="">
            <input type="text"
            value={name}
            placeholder="Enter Name"
            onChange={(e)=>setName(e.target.value)}
            />
            <p>{name}</p>
        </form>
     )
}
export default FormHandling;