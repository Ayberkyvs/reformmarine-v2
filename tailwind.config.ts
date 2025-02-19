import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary: {
					"50": "#E6EEF4",
					"100": "#CDDCEA",
					"200": "#9BB9D5",
					"300": "#6997BF",
					"400": "#3774AA",
					"500": "#055195",
					"600": "#044177",
					"700": "#033159",
					"800": "#02203C",
					"900": "#01101E",
					"950": "#01080F",
					default: "var(--primary)",
				},
				accent: {
					"50": "#FCECE6",
					"100": "#FAD8CC",
					"200": "#F5B199",
					"300": "#EF8B66",
					"400": "#EA6433",
					"500": "#E53D00",
					"600": "#B73100",
					"700": "#892500",
					"800": "#5C1800",
					"900": "#2E0C00",
					"950": "#170600",
					default: "var(--accent)",
				},
				background: "var(--background)",
				foreground: "var(--foreground)",
				"foreground-muted": "var(--foreground-muted)",
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			screens: {
				xs: "475px",
				"2xl": "1440px",
			},
			keyframes: {
				"accordion-down": {
					from: {
						height: "0",
					},
					to: {
						height: "var(--radix-accordion-content-height)",
					},
				},
				"accordion-up": {
					from: {
						height: "var(--radix-accordion-content-height)",
					},
					to: {
						height: "0",
					},
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
		},
	},
	plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
