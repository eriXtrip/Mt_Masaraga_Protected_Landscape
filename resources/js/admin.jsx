import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AdminLayout from './components/admin/AdminLayout';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminSection from './pages/admin/AdminSection';
import { ADMIN_SECTIONS } from './admin/navConfig';

import '../css/app.css';

const ADMIN_ROUTE_PATHS = Object.keys(ADMIN_SECTIONS);

const AdminApp = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/admin" element={<Navigate to="/admin/dashboard" replace />} />
            <Route element={<AdminLayout />}>
                <Route path="/admin/dashboard" element={<AdminDashboard />} />
                {ADMIN_ROUTE_PATHS.filter((path) => path !== '/admin/dashboard').map((path) => (
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