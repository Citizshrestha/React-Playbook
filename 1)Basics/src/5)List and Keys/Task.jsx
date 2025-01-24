import React from 'react'

const Task = () => {
    const tasks = [
        { id: 1, title: "Learn React", status: "In Progress" },
        { id: 2, title: "Build a Project", status: "Pending" },
        { id: 3, title: "Practice Daily", status: "Completed" },
      ];
  return (
    <div>
        <h1>Task List</h1>
        <ul>
            <li>
                {tasks.map(({id,title,status})=>(
                     <li key={id}>
                        <h2>{title}</h2>
                        <p>Status: {status}</p>
                     </li>
                    ))
                }
            </li>
        </ul>
    </div>
  )
}

export default Task