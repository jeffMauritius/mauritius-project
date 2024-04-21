import { NavigationMenuComponent } from "@/components/navigationMenu"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="flex ">
      <NavigationMenuComponent />
      <Button>Click me</Button>
    </main>
  )
}
