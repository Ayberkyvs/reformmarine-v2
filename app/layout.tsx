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
		"Reform Marine activity is providing mechanical and electrical service for ship and supplying spare parts. Our goal is to ensure safety and satisfaction in maritime operations by delivering high-quality service and a wide range of products to our customers in a timely and reliable manner.With our expert team and wide range of services, we offer fast and reliable solutions to all kinds of maritime needs of our customers. Reform Marine is proud to be a reliable service in the maritime world. We constantly improve ourselves and follow innovative technologies to understand the needs of our customers and offer them the most suitable solutions. Reform Marine is a company that set out with the mission of providing innovative and high-quality solutions to the maritime sector.",
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
