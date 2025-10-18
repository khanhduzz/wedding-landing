import "./globals.css";
import "../styles/theme.css";
import "../styles/components.css";
import type { Metadata } from "next";

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
    <html lang="en">
      <body className="font-body bg-background text-ink">{children}</body>
    </html>
  );
}
