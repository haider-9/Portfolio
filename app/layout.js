import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CursorEffect from "./components/CursorEffect"; // Import the glow effect
import { GradientBg } from "./components/ui/Gradientbg";

export const metadata = {
  title: "Haider • Portfolio",
  description:
    "Hello! I'm Haider, a passionate computer science student with a keen interest in web development. Welcome to my corner of the web where I share my projects, ideas, and insights into the ever-evolving world of technology.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="dark bg-zinc-900 text-zinc-200 relative">
        <Header />
        <div className="relative overflow-hidden">
          <CursorEffect /> 
          <GradientBg />
          <div className="mt-20">{children}</div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
