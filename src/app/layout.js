import Navbar from "../components/Navbar/Navbar";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ weight: ["400", "500", "700"], subsets: ["latin"] });

export const metadata = {
  title: "Portfolio App",
  description: "Created by Ante Antonini",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
