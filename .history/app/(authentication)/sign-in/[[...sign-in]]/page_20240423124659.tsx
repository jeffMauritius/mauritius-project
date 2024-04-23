import { SignIn } from "@clerk/nextjs"

export default function Page() {
  return (
    <div className="flex h-full justify-center">
      <SignIn path="/sign-in" />
    </div>
  )
}
