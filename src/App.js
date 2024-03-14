import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomeLayout from './components/Layout/HomeLayout';
import Login from './components/Accout/Login';
import RegistrationForm from './components/Accout/Register';
import Listcinema from './Layout/Listcinema'
import Detailrap from './Layout/Detailrap';
import Header from './components/Layout/Trangchu/Header';
import Footer from './components/Layout/Trangchu/footer'
import NotFound from './pages/NotFound';
import BookingPage from './components/booking/BookingPage ';
const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route exact path="/" element={<HomeLayout />} />
            <Route path="/lich" element={<Listcinema />} />
            <Route path="/rap" element={<Detailrap />} />

            <Route path="/login" element={<Login />} />
            <Route path="/dang-ki" element={<RegistrationForm />} />
            <Route path="/booking/:movieId" element={<BookingPage />} /> 
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
