
// import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { id } = useParams(); // Extracts `id` from the URL

  const users = {
    1: { name: "John Doe", age: 25 },
    2: { name: "Jane Smith", age: 30 },
  };

  const user = users[id] || { name: "Unknown", age: "Unknown" };

  return (
    <div>
      <h1>User Details</h1>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
    </div>
  );
};

export default User;
