import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomeLayout from './components/Layout/HomeLayout';
import Login from './components/Accout/Login';
import RegistrationForm from './components/Accout/Register';
import Listcinema from './Layout/Listcinema'
import Detailrap from './Layout/Detailrap';
import Header from './components/Layout/Trangchu/Header';
import Footer from './components/Layout/Trangchu/footer'
import NotFound from './pages/NotFound';
const App = () => {
  return (
    <Router>
      <div className="App">
        <header>
          <Header />
        </header>


        <Routes>
          <Route exact path="/" element={<HomeLayout />} />
          <Route path="/lich" element={<Listcinema />} />
          <Route path="/rap" element={<Detailrap />} />

          <Route path="/login" element={<Login />} />
          <Route path="/dang-ki" element={<RegistrationForm />} />
          <Route path="*" element={<NotFound />} />

        </Routes>
        <footer>
          <Footer />
        </footer>




      </div>
    </Router>
  );
}

export default App;