import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MobileActionButtons from "@/components/MobileActionButtons";

const HomeLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <>
      <Header />
      {children}
      <MobileActionButtons />
      <Footer />
    </>
  );
};

export default HomeLayout;
