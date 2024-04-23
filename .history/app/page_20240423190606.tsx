"use client"
import { BoatHomePageComponent } from "@/components/homeComponents/boat"
import { CalendarHomePageComponent } from "@/components/homeComponents/calendar"
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
      <div className="flex gap-4">
        <div className="flex-1">
          <BoatHomePageComponent />
        </div>
        <div className="flex-2">
          <CalendarHomePageComponent />
        </div>
      </div>
    </div>
  )
}
