import type { Metadata } from "next";
import { Oxanium, Space_Grotesk } from "next/font/google";
import { TooltipProvider } from "@/components/ui/tooltip";
import "./globals.css";

const heading = Oxanium({
  variable: "--font-heading",
  subsets: ["latin"],
});

const body = Space_Grotesk({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Adharsh Unnikrishnan",
  description:
    "Cloud and DevOps Engineer focused on Azure, Data Engineering, CI/CD, Docker, Kubernetes, and Open-Source Contributions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${heading.variable} ${body.variable} h-full antialiased`}
    >
        <head>
          <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        </head>
      <body suppressHydrationWarning className="min-h-full flex flex-col">
        <TooltipProvider>{children}</TooltipProvider>
      </body>
    </html>
  );
}
