// tailwind.config.ts
// import { Config } from "tailwindcss"; // Not needed in JS, so removed

const config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				// Silver Seed Investment brand colors - your exact palette
				primary: {
					50: "#f0fffe", // Very light teal variation
					100: "#d1f2f0", // Light teal variation
					200: "#a3e5e1",
					300: "#90D1CA", // Your light teal color
					400: "#5fc5bb",
					500: "#129990", // Your medium teal - main brand color
					600: "#0f8680",
					700: "#0d7269", // Darker variation
					800: "#096B68", // Your dark teal
					900: "#075a57", // Very dark teal
					950: "#044a47",
				},
				secondary: {
					50: "#FFFBDE", // Your cream color - lightest
					100: "#fffacc", // Slightly darker cream
					200: "#fff5b3",
					300: "#fff099",
					400: "#ffeb80",
					500: "#ffe666", // Medium cream
					600: "#ccb852",
					700: "#998a3d",
					800: "#665c29", // Darker cream/tan
					900: "#332e14",
					950: "#1a1709", // Very dark brown
				},
				accent: {
					50: "#f0fffe", // Very light teal
					100: "#d1f2f0",
					200: "#a3e5e1",
					300: "#90D1CA", // Your light teal as accent
					400: "#5fc5bb",
					500: "#129990", // Your medium teal
					600: "#0f8680",
					700: "#0d7269",
					800: "#096B68", // Your dark teal
					900: "#075a57",
					950: "#044a47",
				},
				// Direct color utilities for your exact hex values
				"silver-seed": {
					cream: "#FFFBDE", // Your cream color
					"light-teal": "#90D1CA", // Your light teal
					"medium-teal": "#129990", // Your medium teal
					"dark-teal": "#096B68", // Your dark teal
				},
				// CSS Custom Properties for dynamic theming
				theme: {
					primary: "var(--color-primary)",
					secondary: "var(--color-secondary)",
					background: "var(--color-background)",
					surface: "var(--color-surface)",
					text: "var(--color-text)",
					"text-secondary": "var(--color-text-secondary)",
					border: "var(--color-border)",
					accent: "var(--color-accent)",
					success: "var(--color-success)",
					warning: "var(--color-warning)",
					error: "var(--color-error)",
					muted: "var(--color-muted)",
				},
			},
			fontFamily: {
				sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
				// Silver Seed specific gradients
				"silver-seed-primary": "linear-gradient(135deg, #129990, #096B68)",
				"silver-seed-accent": "linear-gradient(135deg, #90D1CA, #129990)",
				"silver-seed-warm": "linear-gradient(135deg, #FFFBDE, #90D1CA)",
				"silver-seed-hero":
					"linear-gradient(135deg, #129990 0%, #096B68 50%, #044a47 100%)",
			},
			animation: {
				"fade-in": "fadeIn 0.5s ease-in-out",
				"fade-in-up": "fadeInUp 0.6s ease-out",
				"fade-in-down": "fadeInDown 0.6s ease-out",
				"slide-in-right": "slideInRight 0.4s ease-out",
				"slide-in-left": "slideInLeft 0.4s ease-out",
				"scale-in": "scaleIn 0.3s ease-out",
				"bounce-subtle": "bounceSubtle 2s infinite",
				"pulse-slow": "pulse 3s infinite",
				float: "float 3s ease-in-out infinite",
			},
			keyframes: {
				fadeIn: {
					"0%": { opacity: "0" },
					"100%": { opacity: "1" },
				},
				fadeInUp: {
					"0%": { opacity: "0", transform: "translateY(20px)" },
					"100%": { opacity: "1", transform: "translateY(0)" },
				},
				fadeInDown: {
					"0%": { opacity: "0", transform: "translateY(-20px)" },
					"100%": { opacity: "1", transform: "translateY(0)" },
				},
				slideInRight: {
					"0%": { opacity: "0", transform: "translateX(20px)" },
					"100%": { opacity: "1", transform: "translateX(0)" },
				},
				slideInLeft: {
					"0%": { opacity: "0", transform: "translateX(-20px)" },
					"100%": { opacity: "1", transform: "translateX(0)" },
				},
				scaleIn: {
					"0%": { opacity: "0", transform: "scale(0.9)" },
					"100%": { opacity: "1", transform: "scale(1)" },
				},
				bounceSubtle: {
					"0%, 100%": { transform: "translateY(0)" },
					"50%": { transform: "translateY(-5px)" },
				},
				float: {
					"0%, 100%": { transform: "translateY(0)" },
					"50%": { transform: "translateY(-10px)" },
				},
			},
			boxShadow: {
				"silver-seed":
					"0 4px 6px -1px rgba(18, 153, 144, 0.1), 0 2px 4px -1px rgba(18, 153, 144, 0.06)",
				"silver-seed-lg":
					"0 10px 15px -3px rgba(18, 153, 144, 0.1), 0 4px 6px -2px rgba(18, 153, 144, 0.05)",
				"silver-seed-xl":
					"0 20px 25px -5px rgba(18, 153, 144, 0.1), 0 10px 10px -5px rgba(18, 153, 144, 0.04)",
			},
			spacing: {
				18: "4.5rem",
				72: "18rem",
				84: "21rem",
				96: "24rem",
			},
		},
	},
	plugins: [],
};

export default config;
