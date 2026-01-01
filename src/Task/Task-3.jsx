import React, { useState } from "react";

const ConditionalRendering=()=>{
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return(
        <div>
            <button onClick={()=>setIsLoggedIn(!isLoggedIn)}>Toggle</button>

            <p>{isLoggedIn ? "welcome Snehal" : "Please login"}</p>
        </div>
    )
}
export default ConditionalRendering;