import type { Metadata } from "next";
import "./styles/globals.css";
import Navbarz from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";



export const metadata: Metadata = {
  title: "Mile High Auto Sales",
  description: "Put some kind of awesome description about this business here.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
      <Navbarz/>
      <main className="flex-grow">{children}</main>
      <Footer />
      </body>
    </html>
  );
}
