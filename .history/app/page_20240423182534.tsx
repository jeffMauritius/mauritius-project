"use client"
import { useUser } from "@clerk/nextjs"

export default function Example() {
  const { isLoaded, isSignedIn, user } = useUser()

  if (!isLoaded || !isSignedIn) {
    return null
  }

  return (
    <div className="flex flex-col h-full gap-4 italic tracking-wide">
      <p>
        Bonjour, {user.firstName} vous souhaitez une sortie pêche dans le lagon
        !
      </p>
      <div>visuel bateau</div>
      <div>reservation calendar</div>
    </div>
  )
}
