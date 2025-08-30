import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "./provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Areeb Hashir Portfolio",
  description:
    "Welcome to the portfolio of Areeb Hashir — a passionate full-stack developer and designer showcasing web projects, creative designs, and innovative solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
