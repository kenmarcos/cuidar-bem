import { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main className="pt-24 min-h-[calc(100vh-176px)]">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
