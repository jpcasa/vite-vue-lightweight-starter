import vue from '@vitejs/plugin-vue';
import path from 'path';
import { defineConfig } from 'vite';
import eslintPlugin from 'vite-plugin-eslint';
import svgLoader from 'vite-svg-loader';
import pugPlugin from 'vite-plugin-pug';

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src')
		}
	},
	plugins: [
		vue(),
		svgLoader(),
		eslintPlugin({
			cache: false,
			include: ['./src/**/*.vue', './src/**/*.ts', './src/**/*.js']
		}),
		pugPlugin({}, {})
	],
});
