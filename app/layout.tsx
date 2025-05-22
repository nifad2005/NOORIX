import type { Metadata } from "next";
import "./globals.css";
import AuthProvider from "@/components/provider/AuthProvider";
import Navbar from "@/components/utils/Navbar";
import ReduxProvider from "@/components/provider/Redux";
import Footer from "@/components/utils/Footer";



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
          <ReduxProvider>
            <Navbar/>
            {children}
            <Footer/>
          </ReduxProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
