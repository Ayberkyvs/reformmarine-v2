import type { Metadata } from "next";
import { Poppins, Montserrat } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
	variable: "--font-poppins",
	weight: ["500", "600", "700", "800"],
	subsets: ["latin"],
});

const montserrat = Montserrat({
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: {
		template: "%s | Reform Marine",
		default: "Reform Marine",
	},
	description:
		"Reform Marine is a company specialized in maintenance and repair of electrical and machinery systems and offers special solutions for the maritime.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${poppins.variable} ${montserrat.className} antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
