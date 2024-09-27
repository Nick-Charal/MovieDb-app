import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "MDb",
  description: "This is a movie database",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body data-theme=''>
        <Header />
        <Suspense>
          <NavBar />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
