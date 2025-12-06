import "./globals.css";
import "../styles/theme.css";
import "../styles/components.css";
import "react-photo-view/dist/react-photo-view.css";

import type { Metadata } from "next";
import SessionProviderWrapper from "./providers/SessionProviderWrapper";
import localFont from "next/font/local";

const playfair = localFont({
  src: [
    { path: "../public/fonts/PlayfairDisplay-Regular.ttf", weight: "400" },
    { path: "../public/fonts/PlayfairDisplay-Medium.ttf", weight: "500" },
    { path: "../public/fonts/PlayfairDisplay-SemiBold.ttf", weight: "600" },
  ],
  variable: "--font-serif",
  display: "swap",
});

const greatVibes = localFont({
  src: "../public/fonts/GreatVibes-Regular.ttf",
  variable: "--font-script",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yourdomain.com"),
  title: "Loving",
  description: "Welcome to our wedding website!",
  openGraph: {
    title: "Our Wedding",
    description: "Join us on our special day!",
    images: ["/images/hero.jpg"],
  },
  icons: { icon: "/icons/icon3.png" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${greatVibes.variable}`}>
      <body className="font-body bg-background text-ink">
        <SessionProviderWrapper>{children}</SessionProviderWrapper>
      </body>
    </html>
  );
}
