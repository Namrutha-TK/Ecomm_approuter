import type { Metadata } from "next";
import { Inter } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.css';
import Header from "./components/header/Header";
import "./globals.css";
import Footer from "./components/footer/Footer";
import { CartCountProvider } from "./context/CartContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className="container-fluid m-0 p-0">
      <CartCountProvider>
        <Header/>
        {children}
        <Footer/>
        </CartCountProvider>
        </div>
        </body>
    </html>
  );
}
