// import React from 'react'
import { useState } from "react";
const Todo = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Learn React", isCompleted: false },
    { id: 2, text: "Be Better at JS", isCompleted: true },
  ]);

  const [newTaskText, setNewTaskText] = useState("");

  // Update input state when typing
  const handleChange = (e) => {
    e.preventDefault();
    setNewTaskText(e.target.value);
  };

  // Add a new task
  const addTask = (newTaskText) => {
    if (newTaskText.trim() === "") return; // Prevent empty tasks

    const newTask = {
      id: tasks.length + 1, // Unique ID for new task
      text: newTaskText,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]); // Add task to the state
    setNewTaskText(""); // Clear input
  };

  // Toggle task completion status
  const isCompletedHandle = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  // Delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <>
      <h1>To Do App</h1>
      {/* Input and Add Button */}
      <input
        onChange={handleChange}
        type="text"
        placeholder="Enter New Task"
        value={newTaskText}
      />
      &ensp;
      <button onClick={() => addTask(newTaskText)}>Add</button>
      <div className="Tasks">
        <ul>
          {/* Display tasks */}
          {tasks.map((task) => (
            <li key={task.id} style={{ marginBottom: "10px" }}>
              <span
                style={{
                  textDecoration: task.isCompleted ? "line-through" : "none",
                }}
              >
                {task.text}
              </span>
              &ensp;
              {/* Toggle Completion Button */}
              <button onClick={() => isCompletedHandle(task.id)}>Toggle</button>
              &ensp;
              {/* Delete Button */}
              <button onClick={() => deleteTask(task.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Todo
