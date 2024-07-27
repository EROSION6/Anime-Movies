/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				white: {
					100: '#F5F5F5',
				},
				brown: {
					400: '#924444',
				},
				gray: {
					200: '#87959F',
					300: '#68696B',
					400: '#444444',
				},
				pink: {
					100: '#F87A61',
					200: '#E84444',
				},
			},
			screens: {
				smx: { max: '425px' },
				md: { max: '768px' },
				lg: { max: '1024px' },
				xl: { max: '1280px' },
				xl2: { max: '1440px' },
			},
		},
	},
	plugins: [],
}
