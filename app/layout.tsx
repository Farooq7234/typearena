
import type { Metadata } from "next";
import Header from "@/components/header";
import "./globals.css";
import { Toaster as Sonner } from "@/components/ui/sonner";
import AuthProvider from "@/context/authProvider";

export const metadata: Metadata = {
  title: "TypeArena",
  description: "Online typing speed test and multiplayer typing competition.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <AuthProvider>
          <Header />
          {children}
          <Sonner richColors expand={true} position="bottom-right" />
        </AuthProvider>
      </body>
    </html>
  );
}
