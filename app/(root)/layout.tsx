import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";
/*
Marine Services,Marine Spare Parts
*/

const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
	return (
		<>
			<Header />
			<main>{children}</main>
			<Footer />
		</>
	);
};

export default Layout;
