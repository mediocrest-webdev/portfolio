// tailwind.config.js
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
        sans: ['OpenSauceSans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },	
			colors: {
				text: 'hsl(300, 75%, 1%)',
				background: 'hsl(240, 60%, 98%)',
			},
			spacing: {
				'section-sm': '2rem',
				'section-md': '4rem',
				'section-lg': '6rem',
				'section-xl': '8rem',
				'section-xxl': '10rem',
			},
		},
	},
	plugins: [],
};
