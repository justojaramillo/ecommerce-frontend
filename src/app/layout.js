import { Inter } from "next/font/google";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeaderTop from "@/components/HeaderTop";
import HeaderMain from "@/components/HeaderMain";
import Navbar from "@/components/Navbar";
import MobNavbar from "@/components/MobNavbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shopping App",
  description: "Shopping App for Everyone",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <HeaderTop />
        <HeaderMain />
        <Navbar />
        <MobNavbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
