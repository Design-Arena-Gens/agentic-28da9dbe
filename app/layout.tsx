import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Crave - Food Discovery",
  description: "Discover, order, and track your favorite food experiences",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
