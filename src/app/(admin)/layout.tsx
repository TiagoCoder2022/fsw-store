import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

import { AuthProvider } from "@/providers/auth";

import { Toaster } from "@/components/ui/toaster";
import Sidebar from "./dashboard/components/sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FSW Store",
  description: "Os Melhores periféricos para seu PC",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-full flex-col">
          <AuthProvider>
            <div className="flex">
              <Sidebar />
              {children}
            </div>
            <Toaster />
          </AuthProvider>
        </div>
      </body>
    </html>
  );
}
