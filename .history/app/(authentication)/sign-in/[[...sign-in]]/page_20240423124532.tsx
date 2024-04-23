import { SignIn } from "@clerk/nextjs"

export default function Page() {
  return (
    <div className="h-full">
      <SignIn path="/sign-in" />
    </div>
  )
}
