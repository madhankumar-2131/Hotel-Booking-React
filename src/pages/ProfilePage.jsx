import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import './ProfilePage.css';

const ProfilePage = () => {
  const { user} = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("User data in ProfilePage:", user);
  }, [user]);

  const handleLogout = () => {
    logout();
    navigate('/login'); // Redirect to login page after logout
  };

  return (
    <div className="profile-page">
      <h1>Your Profile</h1>
      <div className="profile-details">
        <div className="profile-picture">
          {user.profilePicture ? (
            <img src={user.profilePicture} alt="Profile" />
          ) : (
            <div className="placeholder-picture">No Profile Picture</div>
          )}
        </div>
        <div className="profile-info">
          <p><strong>Name:</strong> {user.name || "Name not available"}</p>
          <p><strong>Email:</strong> {user.email || "Email not available"}</p>
        </div>
      </div>
      <button className="logout-button" onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default ProfilePage;
