import type { Metadata } from "next";
import "./globals.css";
import WhatsAppButton from "./components/WhatsAppButton";
import MusicPlayer from "./components/MusicPlayer";

export const metadata: Metadata = {
  title: "הקליניקה של אושר",
  description: "מרכז לטיפולים הוליסטיים ופיתוח אישי",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body>
        {children}
        <WhatsAppButton />
        <MusicPlayer />
      </body>
    </html>
  );
}
