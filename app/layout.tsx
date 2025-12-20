import type { Metadata } from "next";
import { Heebo, Cormorant_Garamond } from 'next/font/google';
import "./globals.css";
import WhatsAppButton from "./components/WhatsAppButton";
import MusicPlayer from "./components/MusicPlayer";

const heebo = Heebo({
  subsets: ['hebrew', 'latin'],
  variable: '--font-heebo',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
});

const IS_PRODUCTION = process.env.VERCEL_ENV === "production";

export const metadata: Metadata = {
  title: "הקליניקה של אושר",
  description: "מרכז לטיפולים הוליסטיים ופיתוח אישי",
  metadataBase: new URL("https://osherclinic.co.il"),
  verification: {
    google: "q3JciEMpkj8yh9XRC5LBx9Ey4frx_BonK8bgJa5WHOU",
  },
  robots: IS_PRODUCTION
    ? { index: true, follow: true }
    : { index: false, follow: false, nocache: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" className={`${heebo.variable} ${cormorant.variable}`}>
      <body className="font-body antialiased">
        {children}
        <WhatsAppButton />
        <MusicPlayer />
      </body>
    </html>
  );
}
