import type { Metadata } from "next";
import { SpeedInsights } from '@vercel/speed-insights/next';
import "@/style/globals.css";
import '@mantine/core/styles.css';

import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { poppins } from "@/lib/fonts";
import { SiteMetadata } from "@/config/site";
import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/foo/Footer";
import ShoelaceSetup from "@/components/anim/shoelace/shoelace-setup";

export const metadata: Metadata = {
  ...SiteMetadata
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <head>
        <ColorSchemeScript defaultColorScheme="light" />
      </head>
      <body className={`${poppins.className} antialiased bg-white dark:bg-black text-black dark:text-white relative`}>  
          <MantineProvider forceColorScheme="light" defaultColorScheme="light" >
            <ShoelaceSetup>
              <Navbar />
              {children}
              <Footer />
            </ShoelaceSetup>
          </MantineProvider>
          <SpeedInsights />
      </body>
    </html>
  );
}
