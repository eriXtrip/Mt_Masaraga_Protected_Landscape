import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';

import Home from './pages/home/home';
import About from './pages/about/about';
import Help from './pages/help/help';
import Contact from './pages/contact/contact';
import Signup from './pages/loginSignup/signup';

import '../css/app.css';

ReactDOM.createRoot(document.getElementById('app')).render(
    <React.StrictMode>
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/help" element={<Help />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    </React.StrictMode>
);
