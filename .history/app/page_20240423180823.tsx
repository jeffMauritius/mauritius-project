"use client"
import { useUser } from "@clerk/nextjs"

export default function Example() {
  const { isLoaded, isSignedIn, user } = useUser()

  if (!isLoaded || !isSignedIn) {
    return null
  }

  return (
    <div className="flex h-full gap-4">
      Hello, {user.firstName} welcome to mauritius project
    </div>
  )
}
