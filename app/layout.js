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
      <body className="bg-zinc-900 text-zinc-200 relative">
        <Header />

        {/* Background Grid Wrapper */}
        <div className="relative overflow-hidden">
          <CursorEffect /> {/* Cursor Effect inside the grid only */}
          <GradientBg/>
          
          <div
            className="relative z-10 animate-[grid_20s_linear_infinite] 
            bg-[linear-gradient(rgba(75,75,75,0.05)_1px,transparent_2px),linear-gradient(90deg,rgba(75,75,75,0.05)_2px,transparent_1px)] 
            bg-[size:100px_100px] min-h-screen"
          >
            {children}
          </div>
        </div>

        <Footer />
      </body>
    </html>
  );
}
