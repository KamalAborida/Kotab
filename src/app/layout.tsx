// app/layout.tsx

import { Almarai } from "next/font/google";
import { Navbar } from "./components/Navbar/Navbar";
import "./globals.css";

import Providers from "@/redux/Providers";

const almarai = Almarai({
  weight: ["400", "700"],
  subsets: ["arabic"],
  variable: "--font-almarai",
});

export const metadata = {
  title: "موقعي",
  description: "موقع عربي لعرض الأسئلة والاختبارات",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${almarai.className}`}>
        <Providers>
          <Navbar />
          {children}
          {/* <Footer /> */}
        </Providers>
      </body>
    </html>
  );
}
