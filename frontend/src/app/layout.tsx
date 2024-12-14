import type { Metadata } from "next";
import "./styles/globals.css";
import Navbarz from "@/app/components/Navbar";



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
    <Navbarz/>
      <body>
        {children}
      </body>
    </html>
  );
}
