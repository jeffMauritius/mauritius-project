"use client"
import { useUser } from "@clerk/nextjs"

export default function Example() {
  const { isLoaded, isSignedIn, user } = useUser()

  if (!isLoaded || !isSignedIn) {
    return null
  }

  return (
    <div>
      Hello, {user.firstName} welcome to mauritius project
      {user.emailAddresses.map((email) => () => {email}
      {console.log(user)}
    </div>
  )
}
