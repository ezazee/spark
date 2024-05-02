import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { siteConfig } from "@/config/site";
import { fontPoppins } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import clsx from "clsx";
import Footer from "@/components/Footer";
import HotjarScript from "@/components/HotjarScript";
import { Analytics } from "@vercel/analytics/react";
 

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	icons: {
		icon: "/favicon.ico",
	},
};

export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HotjarScript />
      </head>
      <body
        className={clsx(
          "min-h-screen bg-background antialiased page-wrapper relative",
          fontPoppins.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <div className="relative flex flex-col h-screen">
            <main className="">
              <Navbar />
              {children}
              <Footer />
              <Analytics />
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
