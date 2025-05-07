import React, { createContext, useState } from 'react';

// Create UserContext
export const UserContext = createContext();

// Create a provider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    isLoggedIn: false,
    profilePicture: '',
    // other user details
  });

  const login = (userData) => {
    setUser({ ...userData, isLoggedIn: true });
  };

  const logout = () => {
    setUser({ isLoggedIn: false, profilePicture: '' });
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
