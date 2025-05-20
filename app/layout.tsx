import type { Metadata } from "next";
import "./globals.css";
import AuthProvider from "@/components/provider/AuthProvider";
import Navbar from "@/components/utils/Navbar";



export const metadata: Metadata = {
  title: "NOORIX",
  description: "NOORIX -Where Noor meets Logic.",
  icons:{
    icon:"favicon.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` antialiased`}
      > 
        <AuthProvider>
          <Navbar/>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
