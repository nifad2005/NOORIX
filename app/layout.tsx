import type { Metadata } from "next";
import "./globals.css";



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
        {children}
      </body>
    </html>
  );
}
