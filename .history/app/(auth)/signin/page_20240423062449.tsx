import { signIn, auth, providerMap } from "@/auth.ts"

export default async function SignInPage() {
  return (
    <div className="flex flex-col gap-2">
      {Object.values(providerMap).map(provider => (
        <form
          action={async () => {
            "use server"
            await signIn(provider.id)
          }}
        >
          <button type="submit">
            <span>Sign in with {provider.name}</span>
          </button>
        </form>
      ))}
    </div>
  )
}
