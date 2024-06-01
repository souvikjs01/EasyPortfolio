
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import { RecoilRoot } from "recoil";
import AuthProvider from "../../components/Provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <RecoilRoot> */}
      <body className={inter.className}>
        <AuthProvider>
        {children}
        </AuthProvider>
        </body>
      {/* </RecoilRoot> */}
    </html>
  );
}
