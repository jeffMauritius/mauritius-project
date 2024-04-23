"use client"

import { ThemeProvider } from "@/components/theme-provider"
import "@/styles/globals.css"
import { Inter as FontSans } from "next/font/google"
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs"

import { cn } from "@/lib/utils"
import { NavigationMenu } from "@/components/ui/navigation-menu"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

type RootLayoutProps = {
  children: React.ReactNode
}
export default function RootLayout({ children }: RootLayoutProps) {
  function Header() {
    return (
      <header className="flex p-6 justify-between">
        <h1>Mauritius project</h1>
        <NavigationMenu />
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <SignInButton />
        </SignedOut>
      </header>
    )
  }
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable,
          )}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
