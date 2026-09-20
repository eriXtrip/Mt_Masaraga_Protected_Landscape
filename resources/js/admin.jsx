import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AdminLayout from './components/admin/AdminLayout';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminBooking from './pages/admin/AdminBooking';
import AdminSection from './pages/admin/AdminSection';
import ScrollToTop from './components/common/ScrollToTop';
import { ADMIN_SECTIONS } from './admin/navConfig';
import { Toaster } from './components/ui/toast';

import '../css/app.css';

const ADMIN_ROUTE_PATHS = Object.keys(ADMIN_SECTIONS);
const GENERIC_SECTION_PATHS = (path) => path !== '/admin/dashboard' && path !== '/admin/bookings';

const AdminApp = () => (
    <BrowserRouter>
        <ScrollToTop />
        <Toaster />
        <Routes>
            <Route path="/admin" element={<Navigate to="/admin/dashboard" replace />} />
            <Route element={<AdminLayout />}>
                <Route path="/admin/dashboard" element={<AdminDashboard />} />
                <Route path="/admin/bookings" element={<AdminBooking />} />
                {ADMIN_ROUTE_PATHS.filter(GENERIC_SECTION_PATHS).map((path) => (
                    <Route key={path} path={path} element={<AdminSection />} />
                ))}
                <Route path="/admin/*" element={<AdminSection />} />
            </Route>
        </Routes>
    </BrowserRouter>
);

// Prevent HMR from calling createRoot repeatedly on the same DOM element.
const container = document.getElementById('admin-app');

if (container) {
    if (!window.__adminReactRoot) {
        window.__adminReactRoot = ReactDOM.createRoot(container);
    }

    window.__adminReactRoot.render(
        <React.StrictMode>
            <AdminApp />
        </React.StrictMode>
    );
}