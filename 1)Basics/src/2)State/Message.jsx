// import React from 'react'

import { useState } from "react"

const Message = () => {
  const[msg,setMsg] = useState("Hello")
  return (
    <div>
      <h1>Message: {msg}</h1>
      <button onClick={()=>setMsg("Goodbye!")}>Update Message</button>
    </div>
  )
}

export default Message