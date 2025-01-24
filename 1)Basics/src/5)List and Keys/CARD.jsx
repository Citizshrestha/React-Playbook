// import React from 'react'

const CARD = () => {
    const users = [
      { id: 1, name: "Sita Sharma", age: 25, city: "Kathmandu", profession: "Developer" },
      { id: 2, name: "Rajesh Bhandari", age: 30, city: "Pokhara", profession: "Tour Guide" },
      { id: 3, name: "Anjali Thapa", age: 28, city: "Lalitpur", profession: "Designer" },
      { id: 4, name: "Kiran Maharjan", age: 35, city: "Bhaktapur", profession: "Engineer" },
    ];
    const handleClick = ({name}) =>{
        alert(`Friend request sent to ${name} `)
      }
    return (
      <div
        style={{
          padding: "20px",
          fontFamily: "Arial, sans-serif",
          backgroundColor: "#f3f4f6",
          minHeight: "100vh",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "20px",
            color: "#333",
            fontSize: "28px",
          }}
        >
          User's Profile
        </h2>
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          {users.map(({ id, name, age, city, profession }) => (
            <li
              key={id}
              style={{
                backgroundColor: "white",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                padding: "20px",
                width: "250px",
                textAlign: "center",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
              }}
            >
              <h2 style={{ fontSize: "20px", color: "#4caf50", marginBottom: "10px" }}>{name}</h2>
              <h3 style={{ fontSize: "16px", color: "#666", marginBottom: "8px" }}>
                {`${age} years old`}
              </h3>
              <h3 style={{ fontSize: "16px", color: "#666", marginBottom: "8px" }}>{city}</h3>
              <h3 style={{ fontSize: "16px", color: "#333", fontWeight: "bold" }}>{profession}</h3>
              <button onClick={handleClick}>Send Friend Request</button>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default CARD;
  