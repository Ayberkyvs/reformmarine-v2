import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "../globals.css";

const HomeLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default HomeLayout;
