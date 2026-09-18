import React, { useState, useEffect, useCallback } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import ScrollToTop from './components/common/ScrollToTop';
import SplashScreen from './components/common/SplashScreen';

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
import Maintenance from './pages/utilitypage/Maintenance';
import PrivacyNotice from './pages/legal/PrivacyNotice';
import CookieTerms from './pages/legal/CookieTerms';
import EcotourismNotice from './pages/legal/EcotourismNotice';
import WildlifeProtection from './pages/legal/WildlifeProtection';

import '../css/app.css';

// Layout component that renders Navbar and Footer around child routes
const MainLayout = () => (
    <>
        <Navbar />
        <Outlet />
        <Footer />
    </>
);

const App = () => {
    // Only show splash screen once per browser session
    const [showSplash, setShowSplash] = useState(() => {
        return !sessionStorage.getItem('hasSeenSplash');
    });

    // Handle smooth unmounting of splash screen
    const handleSplashComplete = useCallback(() => {
        sessionStorage.setItem('hasSeenSplash', 'true');
        setShowSplash(false);
    }, []);

    // Manage body overflow during splash screen
    useEffect(() => {
        if (showSplash) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [showSplash]);

    return (
        <BrowserRouter>
            {showSplash && (
                <SplashScreen onComplete={handleSplashComplete} />
            )}
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
                    <Route path="/booking" element={<Booking />} />
                    <Route path="/hiker/messages" element={<GroupChat />} />
                    <Route path="/hiker/transactions" element={<Transaction />} />
                    <Route path="/news/:id" element={<NewsDetail />} />
                    <Route path="/awards/:id" element={<AwardsDetail />} />
                    <Route path="/legal/privacy-policy" element={<PrivacyNotice />} />
                    <Route path="/legal/cookie-policy" element={<CookieTerms />} />
                    <Route path="/legal/ecotourism-policy" element={<EcotourismNotice />} />
                    <Route path="/legal/wildlife-protection" element={<WildlifeProtection />} />
                </Route>

                {/* Standalone full-page routes */}
                <Route path="*" element={<NotFound />} />
                <Route path="/access-denied" element={<AccessDenied />} />
                <Route path="/maintenance" element={<Maintenance />} />
            </Routes>
        </BrowserRouter>
    );
};

// Prevent HMR from calling createRoot repeatedly on the same DOM element
const container = document.getElementById('app');

if (container) {
    if (!window.__reactRoot) {
        window.__reactRoot = ReactDOM.createRoot(container);
    }

    window.__reactRoot.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
}