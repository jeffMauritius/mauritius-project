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
      <div className="flex">
        <div className="flex-1">visuel bateau</div>
        <div className="flex-2">reservation calendar</div>
      </div>
    </div>
  )
}
