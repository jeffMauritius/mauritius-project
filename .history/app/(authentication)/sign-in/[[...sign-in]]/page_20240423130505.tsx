import { SignIn } from "@clerk/nextjs"
import { dark } from "@clerk/themes"

export default function Page() {
  return (
    <div className="flex h-full justify-center">
      <SignIn path="/sign-in" appearance="dark" />
    </div>
  )
}
