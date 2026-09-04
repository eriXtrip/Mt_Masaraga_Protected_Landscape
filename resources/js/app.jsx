import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';

import Home from './pages/home/home';

import '../css/app.css';

ReactDOM.createRoot(document.getElementById('app')).render(
    <React.StrictMode>
        <BrowserRouter>
            <Navbar />
            <Home />
            <Footer />
        </BrowserRouter>
    </React.StrictMode>
);
