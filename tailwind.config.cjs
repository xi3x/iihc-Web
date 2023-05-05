/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [
		require("daisyui")
	],

	daisyui: {
		themes: [
		  {
			mytheme: {
			
   "primary": "#dc2626",
			
   "secondary": "#34d399",
			
   "accent": "#f87171",
			
   "neutral": "#f3f4f6",
			
   "base-100": "#f3f4f6",
			
   "info": "#3ABFF8",
			
   "success": "#36D399",
			
   "warning": "#FBBD23",
			
   "error": "#F87272",
			},
		  },
		],
	  }, 
}
