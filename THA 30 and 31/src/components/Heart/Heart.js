import React, { useState } from 'react'
import "./Heart.css"
function Heart({id}) {
    const [active,setActive]=useState(false)
    
    const handleSubmit=(e)=>{
        e.stopPropagation()
        setActive(!active)
        console.log("clicked --- ",id)
    }
    return (
        <div class="stage">
             <div class={`heart ${active &&'is_active'}`} onClick={handleSubmit}></div>
        </div>
    )
}

export default Heart
