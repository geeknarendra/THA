import React from 'react'
import { useState } from 'react'


function HelloWorld() {

    const [msg,setMsg]=useState("THA 15 IS Going");
    const handleClick=()=>{
        setMsg("THA 15 Done ");
    }
    return (
        <div>
            <p style={{font:"16px",background:"grey"}}>{msg}</p>
            <br/>

            <button onClick={handleClick}> Click ME</button>
        </div>
    )
}

export default HelloWorld
