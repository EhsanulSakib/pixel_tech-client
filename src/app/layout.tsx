import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import { EdgeStoreProvider } from "@/edgestore/edgestore";
import { NextUIProvider } from "@nextui-org/react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});


export const metadata: Metadata = {
  title: "Pixel Tech",
  description: "Online Tech product selling E-Commerce platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className='light'>
      <body
        className={`bg-slate-50 text-gray-800 dark:bg-gray-800 dark:text-slate-50 text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl ${poppins.className}`}
      >
        <EdgeStoreProvider>
          <NextUIProvider>
            {children}
          </NextUIProvider>
        </EdgeStoreProvider>
      </body>
    </html>
  );
}
