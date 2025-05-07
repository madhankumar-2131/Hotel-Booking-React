import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import './Header.css';

const Header = () => {
  const { user, logout } = useContext(UserContext);

  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">HotelBooking</Link>
      </div>
      <nav className="header__nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/hotels">Hotels</Link></li>
        </ul>
      </nav>
      <div className="header__user">
        {user.isLoggedIn ? (
          <>
            <Link to="/profile">
              {user.profilePicture ? (
                <img src={user.profilePicture} alt="Profile" className="header__profile-pic" />
              ) : (
                <span>Profile</span>
              )}
            </Link> | 
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link> | 
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
