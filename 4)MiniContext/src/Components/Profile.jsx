import { useContext } from 'react';
import { UserContext } from '../context/UserContextProvider';

const Profile = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="profile-container">
      {!user ? (
        <p>Please log in to see your profile</p>
      ) : (
        <h3>Welcome, {user.username}!</h3>
      )}
    </div>
  );
};

export default Profile;
