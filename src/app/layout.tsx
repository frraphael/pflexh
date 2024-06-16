import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const lato = Lato({subsets:['latin'], weight:['300','400','700','900']});

export const metadata: Metadata = {
  title: "PFLEXH Arquitetura",
  description: "Projetando sonhos que duram para sempre!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={lato.className}>
        <Navbar />
        <main>{children}</main>
        <Contact />
        <Footer />
      </body>
    </html>
  );
}
