import type { Config } from "tailwindcss";

export default {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary: {
					default: "var(--primary)",
					50: "#E6EEF4",
					100: "#CDDCEA",
					200: "#9BB9D5",
					300: "#6997BF",
					400: "#3774AA",
					500: "#055195",
					600: "#044177",
					700: "#033159",
					800: "#02203C",
					900: "#01101E",
					950: "#01080F",
				},
        accent: {
          default: "var(--accent)",
          50: "#FCECE6",
          100: "#FAD8CC",
          200: "#F5B199",
          300: "#EF8B66",
          400: "#EA6433",
          500: "#E53D00",
          600: "#B73100",
          700: "#892500",
          800: "#5C1800",
          900: "#2E0C00",
          950: "#170600",
        },
				background: "var(--background)",
				foreground: "var(--foreground)",
			},
		},
	},
	plugins: [],
} satisfies Config;
