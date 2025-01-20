// import React from 'react'
import Child from "./Child"
import Profile from "./Profile"
const Parent = () => {
  return (
    <div>
      <Child name="Citiz"/>
      <Profile username="Sycon" age={20}/>
    </div>
  )
}

export default Parent