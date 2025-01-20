import { useEffect, useState } from "react";


const UserInfo = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) throw new Error('Failed to fetch users! Something went wrong');
        
        const data = await response.json();
        setUsers(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <p className="error">{error}</p>;
  }

  return (
    <div className="user-info-container">
      <h1 className="title">Users Info</h1>
      
      <input
        type="text"
        placeholder="Search users by name..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-input"
      />
      
      <ul className="user-list">
        {filteredUsers.map((user) => (
          <li key={user.id} className="user-card">
            <h3 className="user-name">{user.name}</h3>
            <p className="user-email">{user.email}</p>
            <p className="user-phone">{user.phone}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserInfo;
