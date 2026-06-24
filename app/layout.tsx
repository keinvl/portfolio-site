import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Keira Nevrada | Security Analyst",
  description: "Portfolio Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}