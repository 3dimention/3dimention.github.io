import * as defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
	mode: 'jit',
	content: ['./src/**/*.{html,mdx,ts,tsx,svelte}'],
	darkMode: 'class',
	theme: {
		...defaultTheme,
		screens: {
			sm: '375px',
			md: '768px',
			lg: '1024px',
			xl: '1280px'
		},
		colors: {
			inherit: 'inherit',
			current: 'currentColor',
			transparent: 'transparent',
			baseline: '#150856',
			primary: {
				normal: '#3a18db',
				focus: '#3a18db',
				hover: '#411cff',
				active: '#b8a9fa',
				disabled: '#c5c5c5'
			},
			secondary: {
				normal: '#b73adf',
				focus: '#b73adf',
				hover: '#d342ff',
				active: '#e7c3f3',
				disabled: '#c5c5c5'
			},
			success: '#26ba12',
			info: '#efd34b',
			warning: '#e27429',
			error: '#e62222',
			black: '#000',
			white: '#fff'
		},
		fontFamily: {
			...defaultTheme.fontFamily,
			sans: ['Instrument Sans', ...defaultTheme.fontFamily.sans]
		},
		spacing: {
			...defaultTheme.spacing,
			xs: '8px',
			sm: '16px',
			md: '24px',
			lg: '32px',
			xl: '64px'
		}
	}
};
