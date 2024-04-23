import { SignUp } from "@clerk/nextjs"
import { dark } from "@clerk/themes"

export default function Page() {
  return (
    <div className="flex h-full justify-center">
      <SignUp path="/sign-up" appearance={dark} />
    </div>
  )
}
