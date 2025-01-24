import React, { useState } from 'react';

const Assignment2 = () => {
  const users = [
    { id: 1, name: "Sita Sharma", age: 25, city: "Kathmandu", profession: "Developer" },
    { id: 2, name: "Rajess Bhandari", age: 30, city: "Pokhara", profession: "Tour Guide" },
    { id: 3, name: "Anjali Thapa", age: 28, city: "Lalitpur", profession: "Designer" },
    { id: 4, name: "Kiran Maharjan", age: 35, city: "Bhaktapur", profession: "Engineer" },
  ];

 

  const handleFriendRequest = (name) => {
    alert(`Friend request sent to ${name}`);
  };

  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f3f4f6",
        minHeight: "100vh",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#333",
          marginBottom: "20px",
        }}
      >
        User Profiles
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {users.map((user) => (
          <div
            key={user.id}
            style={{
              backgroundColor: "white",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              padding: "20px",
              textAlign: "center",
              width: "250px",
              transition: "transform 0.2s ease",
            }}
          >
            <h2 style={{ color: "#4caf50" }}>{user.name}</h2>
            <h3 style={{ color: "#666" }}>{`${user.age} years old`}</h3>
            <h3 style={{ color: "#666" }}>{user.city}</h3>
            <h3 style={{ color: "#666" }}>{user.profession}</h3>
            <button
              onClick={() => handleFriendRequest(user.name)} // Pass user.name directly here
              style={{
                marginTop: "10px",
                backgroundColor: "#4caf50",
                color: "white",
                border: "none",
                borderRadius: "5px",
                padding: "10px 15px",
                cursor: "pointer",
                fontSize: "14px",
                transition: "background-color 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#45a049")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#4caf50")}
            >
              Send Friend Request
            </button>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Assignment2;
