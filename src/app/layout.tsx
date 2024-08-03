"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import '../roots.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from "@/shared-components/header/Header";
const inter = Inter({ subsets: ["latin"] });
import { usePathname } from "next/navigation";
import Footer from "@/shared-components/footer/Footer";
import { ToastContainer } from "react-toastify";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const hideNavbar = ['/login', '/dashboard'];
  const showHeaderFooter = hideNavbar.includes(pathname);

  return (
    <html lang="en">
      <body className={inter.className}>
        {!showHeaderFooter && <Header />}
        {children}
        {!showHeaderFooter && <Footer />}
        <ToastContainer />
      </body>
    </html>
  );
}
