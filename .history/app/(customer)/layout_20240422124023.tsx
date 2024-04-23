import { NavigationMenuComponent } from "@/components/navigationMenu"
import type { LayoutParams } from "@/types/next"

export default async function RouteLayout(props: LayoutParams<{}>) {
  return (
    <div className="flex h-full items-center">
      <NavigationMenuComponent />
      {props.children}
    </div>
  )
}
