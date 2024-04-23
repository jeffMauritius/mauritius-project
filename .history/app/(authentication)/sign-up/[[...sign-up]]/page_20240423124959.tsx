import { SignUp } from "@clerk/nextjs"

export default function Page() {
  return (
    <div className="flex h-full justify-center">
      <SignUp path="/sign-up" />
    </div>
  )
}
