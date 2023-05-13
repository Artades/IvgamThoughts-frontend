/** @type {import('tailwindcss').Config}*/
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			
			animation: {
				pulselogo: "pulselogo 1.5s ease infinite alternate",
				pulsetitle: "pulsetitle 1.5s ease infinite alternate",
			},
			keyframes: {
				pulselogo: {
					"0%": {
						boxShadow: "0 0 0 rgba(0, 0, 0, 0.3)",
					},
					"100%": {
						boxShadow: "0 0 30px rgba(0,90, 234, 0.8)",
					},
				},
				
			},
		},
	},
	plugins: [],
};
