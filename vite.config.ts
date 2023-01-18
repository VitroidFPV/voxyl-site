import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';

const config: UserConfig = {
	plugins: [sveltekit()],
	server: {
		port: 3000,
	},
	resolve: {
		alias: {
			$components: '/src/components',
			$lib: '/src/lib',
			$routes: '/src/routes',
			$stores: '/src/stores',
		},
	},
};

export default config;
