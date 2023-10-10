import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
    plugins: [
        vue(),
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
    ],
    resolve: {
        alias: {
            '@component': path.resolve(__dirname, 'resources/js/src/component'),
            '@img': path.resolve(__dirname, 'public/img'),
            '@store': path.resolve(__dirname, 'resources/js/store'),
            '@composable': path.resolve(__dirname, 'resources/js/composables'),
        }
    },
});
