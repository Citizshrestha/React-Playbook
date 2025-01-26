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
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1 style={{ textAlign: "center", color: "#4CAF50" }}>To Do App</h1>

      {/* Input and Add Button */}
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="Enter New Task"
          value={newTaskText}
          style={{
            padding: "10px",
            width: "300px",
            borderRadius: "5px",
            border: "1px solid #ddd",
            marginRight: "10px",
          }}
        />
        <button
          onClick={() => addTask(newTaskText)}
          style={{
            padding: "10px 20px",
            backgroundColor: "#4CAF50",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            transition: "background-color 0.3s",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#45a049")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#4CAF50")}
        >
          Add
        </button>
      </div>

      <div className="Tasks">
        <ul style={{ listStyleType: "none", padding: "0" }}>
          {/* Display tasks */}
          {tasks.map((task) => (
            <li
              key={task.id}
              style={{
                backgroundColor: "#f9f9f9",
                margin: "10px 0",
                padding: "10px",
                borderRadius: "5px",
                boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <span
                style={{
                  textDecoration: task.isCompleted ? "line-through" : "none",
                  color: task.isCompleted ? "#888" : "#333",
                }}
              >
                {task.text}
              </span>
              <div>
                {/* Toggle Completion Button */}
                <button
                  onClick={() => isCompletedHandle(task.id)}
                  style={{
                    padding: "5px 10px",
                    marginRight: "10px",
                    backgroundColor: "#2196F3",
                    color: "#fff",
                    border: "none",
                    borderRadius: "3px",
                    cursor: "pointer",
                    transition: "background-color 0.3s",
                  }}
                  onMouseOver={(e) => (e.target.style.backgroundColor = "#0b7dda")}
                  onMouseOut={(e) => (e.target.style.backgroundColor = "#2196F3")}
                >
                  Toggle
                </button>

                {/* Delete Button */}
                <button
                  onClick={() => deleteTask(task.id)}
                  style={{
                    padding: "5px 10px",
                    backgroundColor: "#f44336",
                    color: "#fff",
                    border: "none",
                    borderRadius: "3px",
                    cursor: "pointer",
                    transition: "background-color 0.3s",
                  }}
                  onMouseOver={(e) => (e.target.style.backgroundColor = "#d32f2f")}
                  onMouseOut={(e) => (e.target.style.backgroundColor = "#f44336")}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;