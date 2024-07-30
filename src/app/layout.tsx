import Footer from "@/components/footer";
import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { repositoryName } from "@/prismicio";
import { PrismicPreview } from "@prismicio/next";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Orbitron, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const StarrySkyCanvas = dynamic(() => import("@/components/starry-sky-canvas"), {
  ssr: false,
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
});
const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron" });


const metadataTitle = "TUDSaT";
const metadataDescription = "TUDSaT is a space focused student association at TU Darmstadt.";

export const metadata: Metadata = {
  title: metadataTitle,
  description: metadataDescription,
  openGraph: {
    type: "website",
    url: "https://tudsat.space",
    title: metadataTitle,
    description: metadataDescription,
    siteName: "TUDSaT",
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          orbitron.variable,
          plusJakartaSans.variable,
          "bg-background min-h-screen flex flex-col",
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark">
          <StarrySkyCanvas />
          <Header />
          <main className="flex flex-1 flex-col items-center">{children}</main>
          <Footer />
        </ThemeProvider>
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}
