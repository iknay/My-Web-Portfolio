import type { Metadata } from "next";
import "./globals.css";
import NavigationBar from "@/components/customs/NavigationBar";
import { ThemeProvider } from "@/context/ThemeContext";
import Particles from "@/components/ui/Particles";

export const metadata: Metadata = {
  title: "Yancee",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body className={`container mt-12 overflow-x-hidden`}>
          <Particles
            className="fixed inset-0 -z-20"
            quantity={100}
            ease={80}
            color="#FF8FAB"
            refresh
            size={0.9}
          />
          {children}
          <NavigationBar />
          <div className="fixed bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />
        </body>
      </ThemeProvider>
    </html>
  );
}
