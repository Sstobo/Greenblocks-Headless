import type { Metadata } from "next";
import Image from "next/image";
import { Suspense } from "react";

import "./globals.css";

import Loading from "@/app/loading";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import LeftBar from "@/components/LeftBar/LeftBar";

import ShimmerEffect from "@/components/utils/ShimmerEffect";
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body>
        <div className="container flex flex-wrap flex-row min-h-screen shadow-2xl bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-emerald-600 to-emerald-900 bg-gradient-to-r mx-auto">
          {/* header */}
          <div className="w-full p-3 border-b border-green-100">
            <Header target="primary-menu" />
          </div>

          {/* left panel */}
          <div className="flex flex-col p-3 border-r border-green-100 basis-1/4">
            <Suspense fallback={<Loading />}>
              <LeftBar />
            </Suspense>
          </div>

          {/* content */}
      
          <div className="bg-contain bg-no-repeat bg-center flex flex-col min-h-screen basis-3/4 p-6 relative">
         
            <Suspense fallback={<Loading />}>{children}</Suspense>
           
          </div>

          {/* footer */}
          <div className="w-full p-3 border-t border-green-100">
            <Footer target="footer-menu" />
          </div>
        </div>
      </body>
    </html>
  );
}
