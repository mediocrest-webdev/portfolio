/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				text: "hsl(300, 75%, 1%)",
				contrast:"hsl(300, 0%, 25%)",
				background: "hsl(240, 60%, 99%)",
				primary: "hsl(243, 68%, 48%)", 
				accent: "hsl(242, 100%, 62%)",
			},
			fontSize: {
				xs: "0.64rem",   
				sm: "0.8rem", 
				base: "1rem",   
				lg: "1.25rem",  
				xl: "1.563rem", 
				"2xl": "1.953rem", 
				"3xl": "2.441rem", 
				"4xl": "3.052rem", 
				"5xl": "3.815rem", 
			},
			fontFamily: {
				'light': ['GeneralSans-Light', 'sans-serif'],
				'regular': ['GeneralSans-Regular', 'sans-serif'],
				'medium': ['GeneralSans-Medium', 'sans-serif'],
				'semibold': ['GeneralSans-Semibold', 'sans-serif'],
				'bold': ['GeneralSans-Bold', 'sans-serif'],
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
