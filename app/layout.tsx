import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mohammadalmas & Tasmin | Wedding Invitation",
  description: "With the blessings of Allah, join us to celebrate the wedding of Mohammadalmas and Tasmin on 1 January 2027 in Ahmedabad.",
  themeColor: "#2a0b13",
  openGraph: {
    title: "Mohammadalmas & Tasmin — Wedding Invitation",
    description: "A celebration of faith, love and togetherness. 01 January 2027 · Ahmedabad.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}