import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import Home from './pages/home/home';

import '../css/app.css';

ReactDOM.createRoot(document.getElementById('app')).render(
    <React.StrictMode>
        <BrowserRouter>
            <Home />
        </BrowserRouter>
    </React.StrictMode>
);
