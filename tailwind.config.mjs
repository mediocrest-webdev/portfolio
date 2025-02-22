/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				text: "hsl(300, 75%, 1%)",
				background: "hsl(240, 60%, 99%)",
				primary: "hsl(243, 68%, 48%)", 
				accent: "hsl(242, 100%, 62%)",
			},
			fontFamily: {
				'regular': ['InterTight-Regular', 'sans-serif'],
				'medium': ['InterTight-Medium', 'sans-serif'],
				'semibold': ['InterTight-Semibold', 'sans-serif'],
			},
			// Add section spacer with more values
			spacing: {
				'section-sm': '2rem',   // Small section spacing
				'section-md': '4rem',   // Medium section spacing
				'section-lg': '6rem',   // Large section spacing
				'section-xl': '8rem',   // Extra-large section spacing
				'section-xxl': '10rem', // Extra extra-large section spacing
			},
		},
	},
	plugins: [],
}
