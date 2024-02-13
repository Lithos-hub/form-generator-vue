import { defineConfig } from 'vitest/config';
import Vue from '@vitejs/plugin-vue';

export default defineConfig({
	plugins: [Vue()],
	test: {
		globals: true,
		environment: 'jsdom',
		coverage: {
			provider: 'v8',
			reporter: ['text', 'json', 'html'],
			include: ['**/lib/**/*.vue'],
			exclude: ['**/index.ts'],
		},
		setupFiles: ['./jest.setup.ts'],
	},
});
