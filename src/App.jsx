import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {UserProvider} from './context/UserContext';
import BookingProvider from './context/BookingContext';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import HotelPage from './pages/HotelPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HotelListPage from './pages/HotelListPage';
import ProfilePage from './pages/ProfilePage';
import About from './components/About';
import Footer from './components/Footer';
import Contact from './Contact';

const App = () => {
  return (
    <UserProvider>
      <BookingProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/hotels" element={<HotelListPage />} />
            <Route path='/profile' element={<ProfilePage/>} />
            <Route path="/hotels/:id" element={<HotelPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer/>
        </Router>
      </BookingProvider>
    </UserProvider>
  );
};

export default App;
