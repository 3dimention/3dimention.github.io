import type { StorybookConfig } from "@storybook/sveltekit";
const config: StorybookConfig = {
	stories: [
		'../stories/**/*.mdx',
		'../stories/**/*.stories.@(svelte|tsx)'
	],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		'@storybook/addon-svelte-csf',
		'@storybook/addon-styling'
	],
	framework: {
		name: '@storybook/sveltekit',
		options: {},
	},
	docs: {
		autodocs: 'tag',
	},
};
export default config;
