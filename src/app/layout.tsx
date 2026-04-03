import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto_Mono, Lato, Noto_Sans } from "next/font/google";
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

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
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
      className={`${geistSans.variable} ${geistMono.variable} ${robotoMono.variable} ${lato.variable} ${notoSans.variable}`}
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
