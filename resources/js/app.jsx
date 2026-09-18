import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import ScrollToTop from './components/common/ScrollToTop';

import Home from './pages/home/home';
import About from './pages/about/about';
import Help from './pages/help/help';
import Contact from './pages/contact/contact';
import Signup from './pages/loginSignup/signup';
import Login from './pages/loginSignup/login';
import ForgotPassword from './pages/loginSignup/forgotpassword';
import Trail from './pages/trail/trail';
import Booking from './pages/booking/booking';
import GroupChat from './pages/groupchat/groupchat';
import Transaction from './pages/transaction/transaction';
import NewsDetail from './pages/content/NewsDetail';
import AwardsDetail from './pages/content/AwardsDetail';
import NotFound from './pages/utilitypage/NotFound';
import AccessDenied from './pages/utilitypage/AccessDenied';

import '../css/app.css';

// Layout component that renders Navbar and Footer around child routes
const MainLayout = () => (
    <>
        <Navbar />
        <Outlet />
        <Footer />
    </>
);

ReactDOM.createRoot(document.getElementById('app')).render(
    <React.StrictMode>
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                {/* Routes wrapped with Navbar and Footer */}
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/trail" element={<Trail />} />
                    <Route path="/trail/:id" element={<Trail />} />
                    <Route path="/help" element={<Help />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/forgot-password" element={<ForgotPassword />} />
                    <Route path="/booking/:id" element={<Booking />} />
                    <Route path="/booking/" element={<Booking />} />
                    <Route path="/hiker/messages" element={<GroupChat />} />
                    <Route path="/hiker/transactions" element={<Transaction />} />
                    <Route path="/news/:id" element={<NewsDetail />} />
                    <Route path="/awards/:id" element={<AwardsDetail />} />
                </Route>

                {/* Standalone full-page route without Navbar or Footer */}
                <Route path="*" element={<NotFound />} />
                <Route path="/access-denied" element={<AccessDenied />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);