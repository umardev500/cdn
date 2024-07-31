// vite.config.js
import tailwindcss from 'tailwindcss';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [
        tailwindcss(),
    ],
    base: './'
})