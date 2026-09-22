import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AdminLayout from './components/admin/AdminLayout';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminBooking from './pages/admin/AdminBooking';
import AdminPayment from './pages/admin/AdminPayment';
import AdminTrail from './pages/admin/AdminTrail';
import AdminGuides from './pages/admin/AdminGuides';
import AdminContent from './pages/admin/AdminContent';
import AdminAnnouncement from './pages/admin/AdminAnnouncement';
import AdminReports from './pages/admin/AdminReports';
import AdminUser from './pages/admin/AdminUser';
import AdminSection from './pages/admin/AdminSection';
import ScrollToTop from './components/common/ScrollToTop';
import { ADMIN_SECTIONS } from './admin/navConfig';
import { Toaster } from './components/ui/toast';

import '../css/app.css';

const ADMIN_ROUTE_PATHS = Object.keys(ADMIN_SECTIONS);
const GENERIC_SECTION_PATHS = (path) =>
    path !== '/admin/dashboard' && path !== '/admin/bookings' && path !== '/admin/payments' && path !== '/admin/trails' && path !== '/admin/guides' && path !== '/admin/content' && path !== '/admin/announcements' && path !== '/admin/reports' && path !== '/admin/users';

const AdminApp = () => (
    <BrowserRouter>
        <ScrollToTop />
        <Toaster />
        <Routes>
            <Route path="/admin" element={<Navigate to="/admin/dashboard" replace />} />
            <Route element={<AdminLayout />}>
                <Route path="/admin/dashboard" element={<AdminDashboard />} />
                <Route path="/admin/bookings" element={<AdminBooking />} />
                <Route path="/admin/payments" element={<AdminPayment />} />
                <Route path="/admin/trails" element={<AdminTrail />} />
                <Route path="/admin/guides" element={<AdminGuides />} />
                <Route path="/admin/content" element={<AdminContent />} />
                <Route path="/admin/announcements" element={<AdminAnnouncement />} />
                <Route path="/admin/reports" element={<AdminReports />} />
                <Route path="/admin/users" element={<AdminUser />} />
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