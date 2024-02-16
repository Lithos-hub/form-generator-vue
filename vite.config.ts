import { defineConfig } from 'vite';
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue(), cssInjectedByJsPlugin(), dts()],
	build: {
		sourcemap: true,
		copyPublicDir: false,
		cssCodeSplit: true,
		outDir: 'dist',
		target: 'esnext',
		lib: {
			entry: resolve(__dirname, 'src/lib/index.ts'),
			name: 'vue-form-latte',
			fileName: (format) => `vue-form-latte.${format}.js`,
		},
		rollupOptions: {
			external: ['vue', 'tailwindcss', 'flowbite', '@heroicons/vue'],
			output: {
				globals: {
					vue: 'Vue',
				},
			},
		},
	},
	resolve: {
		alias: {
			'@': resolve(__dirname, 'src'),
		},
	},
});
