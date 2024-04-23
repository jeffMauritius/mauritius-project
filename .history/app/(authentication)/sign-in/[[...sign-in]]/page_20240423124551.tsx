import { SignIn } from "@clerk/nextjs"

export default function Page() {
  return (
    <div className="h-full justify-center">
      <SignIn path="/sign-in" />
    </div>
  )
}
