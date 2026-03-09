import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Confession Guide — Catholic Aid for the Sacrament of Reconciliation",
  description:
    "Prepare for confession with a structured examination of conscience, step-by-step rite guidance, and private on-device sessions. Available on iOS and Android.",
  openGraph: {
    title: "Confession Guide — Catholic Aid",
    description: "Your personal companion for a meaningful confession.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
