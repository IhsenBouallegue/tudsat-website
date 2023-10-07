import Header from "@/components/header";
import "./globals.css";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Footer from "@/components/footer";

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TUDSaT",
  description: "TUDSaT is a student association at TU Darmstadt.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={plusJakartaSans.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
