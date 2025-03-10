import inertia from '@adonisjs/inertia/client';
import adonisjs from '@adonisjs/vite/client';
import react from '@vitejs/plugin-react';
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		inertia({ ssr: { enabled: true, entrypoint: 'inertia/app/ssr.tsx' } }),
		react(),
		adonisjs({ entrypoints: ['inertia/app/app.tsx'], reload: ['resources/views/**/*.edge'] }),
	],
	css: {
		postcss: {
			plugins: [tailwindcss(), autoprefixer()],
		},
	},
	resolve: {
		alias: {
			'@': '/inertia',
		},
	},
});
