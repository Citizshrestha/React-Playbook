import { useParams } from "react-router-dom";

const User = () => {
  const { id } = useParams(); // Extracts `id` from the URL

  const users = {
    1: { name: "John Doe", age: 25 },
    2: { name: "Jane Smith", age: 30 },
  };

  const user = users[id] || { name: "Unknown", age: "Unknown" };

  const cardStyle = {
    maxWidth: "400px",
    margin: "20px auto",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    backgroundColor: "#fff",
    fontFamily: "Arial, sans-serif",
  };

  const headingStyle = {
    fontSize: "1.8rem",
    marginBottom: "10px",
    color: "#333",
  };

  const detailStyle = {
    fontSize: "1rem",
    marginBottom: "8px",
    color: "#555",
  };

  const unknownStyle = {
    color: "#d9534f",
    fontWeight: "bold",
  };

  return (
    <div style={cardStyle}>
      <h1 style={headingStyle}>User Details</h1>
      <p style={detailStyle}>
        <strong>Name:</strong>{" "}
        <span style={user.name === "Unknown" ? unknownStyle : {}}>
          {user.name}
        </span>
      </p>
      <p style={detailStyle}>
        <strong>Age:</strong>{" "}
        <span style={user.age === "Unknown" ? unknownStyle : {}}>
          {user.age}
        </span>
      </p>
    </div>
  );
};

export default User;
