import React from "react";

const ListRendering=()=>{
    const data = ["HTML","CSS","JavaScript","React"];

    return(
        <div>
            <h2>List Rendering</h2>
            {data.map((ele,index)=>(
                <li key={index}>{ele}</li>
            ))}
        </div>
    )
}
export default ListRendering;