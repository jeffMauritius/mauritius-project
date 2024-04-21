import Image from "next/image"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold text-center">
        Welcome to your Next.js app
      </h1>
      <Image
        src="/nextjs.svg"
        alt="Next.js logo"
        width={300}
        height={300}
        className="rounded-lg"
      />
    </main>
  )
}
