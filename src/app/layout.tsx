import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import {
  ClerkProvider,
} from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import ModalProvider from "@/providers/modal-provider";


const font = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fuzzie",
  description: "Automate your Work with Fuzzie",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
    afterSignOutUrl="/"
    appearance={{
      baseTheme: dark,
    }}
    >
      <html lang="en">
        <body className={font.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <ModalProvider>
            {children}
            </ModalProvider>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
