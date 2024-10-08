import type { Metadata } from "next";
import "./globals.css";
import "dopamine-design"

export const metadata: Metadata = {
  title: "Stitch It",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
