// import React from 'react'

const MAP = () => {
    const fruits = ["Apple","Banana","Cherry"]

  return (
    <div>
        <h1>Fruits List</h1>
        <ul>
            {
                fruits.map((fruit,idx) => (
                    <li key={idx}>{fruit}</li>
                ))
            }
        </ul>
    </div>
  )
}

export default MAP