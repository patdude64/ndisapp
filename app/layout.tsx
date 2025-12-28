import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "NDIS Compliance Portal",
  description: "Advanced compliance management system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="bg-slate-50 text-slate-900 font-sans antialiased dark:bg-slate-950 dark:text-slate-50">
        <div className="flex min-h-screen">
          <Sidebar />
          <div className="flex-1 md:ml-64 flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 p-6 mt-16 overflow-y-auto">
              <div className="mx-auto max-w-6xl space-y-8">
                {children}
              </div>
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
