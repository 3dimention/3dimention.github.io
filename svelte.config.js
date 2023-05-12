import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import adapter from '@sveltejs/adapter-static';

const dev = process.argv.includes('dev');

export default {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			precompress: false,
			strict: true
		}),
		paths: {
			base: dev ? '' : process.env.BASE_PATH
		}
	}
};
