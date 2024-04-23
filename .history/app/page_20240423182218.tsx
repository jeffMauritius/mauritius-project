"use client"
import { useUser } from "@clerk/nextjs"

export default function Example() {
  const { isLoaded, isSignedIn, user } = useUser()

  if (!isLoaded || !isSignedIn) {
    return null
  }

  return (
    <div className="flex h-full gap-4">
      Bonjour, {user.firstName} vous souhaitez une sortie pêche dans le lagon !.
    </div>
  )
}
