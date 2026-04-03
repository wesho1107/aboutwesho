import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto_Mono } from "next/font/google";
import "../styles/globals.css";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { NavLinks } from "../components/NavLinks";
import { Container } from "../components/Container";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "wesho",
  description: "About Wesley Ho",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${robotoMono.variable}`}
    >
      <body>
        <Container>
          <Header rightItem={<NavLinks/>}/>
          {children}
          <Footer/>
        </Container>
      </body>
    </html>
  );
}
