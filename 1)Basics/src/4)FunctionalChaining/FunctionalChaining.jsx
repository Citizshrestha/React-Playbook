// import React from 'react'
import { useState } from "react"

const FunctionalChaining = () => {
  const [count, setCount] = useState(0)
  
const incrementFun = () => {
  setCount((prev)=>prev+1)
  console.log("INcreased by 1")
  setCount((prev)=>prev+4)
  console.log("INcreased by 4")

}
const decrementFun = () => {

  setCount((prev)=>(prev === 0 ? 0: prev-1))
  console.log("Decreased by 1")

  setCount((prev)=>(prev === 0 ? 0: prev-4))
  console.log("Decreased by 4")


  
}
  return (

    <div> 
     
      <h1>Count:{count}</h1>
      <button onClick={incrementFun}>Increment</button>
      <button onClick={decrementFun}>Decrement</button>
    </div>
  )
}

export default FunctionalChaining