import { defineConfig } from 'vite';
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';
// import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import dts from 'vite-plugin-dts';
import tailwindcss from 'tailwindcss';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue(), dts()],
	build: {
		sourcemap: true,
		emptyOutDir: true,
		cssCodeSplit: true,
		copyPublicDir: false,
		lib: {
			entry: resolve(__dirname, 'lib/index.ts'),
			name: 'VueFormLatte',
			formats: ['es', 'cjs'],
			fileName: (format) => `vue-form-latte.${format}.js`,
		},
		rollupOptions: {
			external: ['vue', 'tailwindcss', 'flowbite', '@heroicons/vue', 'yup'],
		},
	},
	css: {
		postcss: {
			plugins: [tailwindcss],
		},
	},
});
