import type { Metadata } from "next";

import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import { Head } from "next/document";

export const metadata: Metadata = {
  title: "Click&Collect App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SidebarProvider>
          <AppSidebar />
          <main className="bg-[#f3f6f9] w-full">
            <div className="flex justify-between bg-white items-center h-20 ">
              <SidebarTrigger />
              <Header />
            </div>
            {children}
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
