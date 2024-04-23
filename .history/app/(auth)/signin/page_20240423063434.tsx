import { signIn, auth, providerMap } from "@/auth/auth"

export default async function SignInPage() {
  return (
    <div className="flex flex-col gap-2">
      {Object.values(providerMap).map(provider => (
        <form
          key={provider.id}
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
