import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "../globals.css";

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
