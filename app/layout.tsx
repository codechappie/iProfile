import "@/app/globals.css";
import { Session } from 'next-auth';
import { Poppins as FontSans } from "next/font/google";
import { ReactNode } from 'react';
import NextAuthProvider from "@/lib/auth/NextAuthProvider";
import Providers from '@/lib/redux/providers';
import { cn } from "@/lib/utils";

interface RootLayoutProps {
  children: ReactNode;
  session: undefined | null | Session;
}


const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "700"]
});

export const metadata = {
  title: 'iProfile',
  description: "Tu espacio personal para mostrar quién eres y construir tu presencia digital. Organiza tus enlaces y proyectos.",
  themeColor: '#000000',
  manifest: "/static/manifest.json"
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es" className="dark" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <NextAuthProvider>
          <Providers>
            {children}
          </Providers>
        </NextAuthProvider>
      </body>
    </html>
  )
}
