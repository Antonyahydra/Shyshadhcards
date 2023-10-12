import React, { useState } from 'react'
import '../toggle/Toggle.css'
function Toggle() {
    const[toggleButton,setToggleButton]=useState(false);
    const handleClick=()=>{
        setToggleButton(!toggleButton)
    }

  return (
    <div className='toggle-main'>
    <div onClick={handleClick} className='toggle'>
       {toggleButton? <div className='toggle-left'></div>:
        <div className='toggle-right'></div>}

    </div>
    </div>
  )
}

export default Toggle