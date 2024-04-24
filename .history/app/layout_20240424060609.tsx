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
import { frFR } from "@clerk/localizations"
import { cn } from "@/lib/utils"
import { NavigationMenuComponent } from "@/components/navigationMenu"
import { dark } from "@clerk/themes"

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
      <header className="flex p-6 justify-end gap-4">
        <div className="flex flex-1">
          {" "}
          <NavigationMenuComponent />
        </div>
        <SignedIn>
          <UserButton appearance={dark} />
        </SignedIn>
        <SignedOut>
          <SignInButton />
        </SignedOut>
      </header>
    )
  }
  return (
    <ClerkProvider localization={frFR}>
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
            <div className="flex h-full p-6 justify-center">{children}</div>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
