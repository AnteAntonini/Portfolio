import Navbar from "../components/Navbar/Navbar";
import "./globals.css";

export const metadata = {
  title: "Portfolio App",
  description: "Created by Ante Antonini",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
