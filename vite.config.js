import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'path';

export default defineConfig({
    resolve: {
        alias: {
            '@': resolve(__dirname, 'resources/js'),
        },
    },
    plugins: [
        laravel(['resources/js/app.jsx', 'resources/js/admin.jsx']),
        react({ include: /\.(js|jsx|ts|tsx)$/ }),
        tailwindcss(),
    ],
    // server: {
    //     host: '0.0.0.0',
    //     port: 5173,
    //     hmr: {
    //       host: '192.168.254.103' // Tells React Refresh / HMR to connect directly to PC IP
    //     }
    //   }
});