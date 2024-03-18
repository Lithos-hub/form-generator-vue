import { defineConfig } from 'vite';
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import dts from 'vite-plugin-dts';
import tailwindcss from 'tailwindcss';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue(), cssInjectedByJsPlugin(), dts()],
	build: {
		sourcemap: true,
		emptyOutDir: true,
		cssCodeSplit: true,
		copyPublicDir: false,
		lib: {
			entry: resolve(__dirname, 'lib/index.ts'),
			name: 'VueFormLatte',
			fileName: (format) => `index.${format}.js`,
		},
		rollupOptions: {
			external: ['vue', 'tailwindcss', 'flowbite', '@heroicons/vue'],
			output: {
				globals: {
					vue: 'Vue',
					tailwindcss: 'tailwindcss',
				},
			},
		},
	},
	css: {
		postcss: {
			plugins: [tailwindcss],
		},
	},
	resolve: {
		alias: {
			'@': resolve(__dirname, 'src'),
		},
	},
});
