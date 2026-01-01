import React, { useState } from "react";

const Counter=()=>{
   const [count, setCount] = useState(0);

   return(
    <div>
        <h2>Counter : {count}</h2>
        <p>Text : clicked {count} times</p>
        <button onClick={()=>setCount(prev=> prev+1)}>Increment</button>
    </div>
   )
}
export default Counter;