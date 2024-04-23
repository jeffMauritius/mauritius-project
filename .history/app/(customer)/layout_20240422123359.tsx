import { NavigationMenuComponent } from "@/components/navigationMenu"
import type { LayoutParams } from "@/types/next"

export default async function RouteLayout(props: LayoutParams<{}>) {
  return (
    <div>
      <NavigationMenuComponent />
      {props.children}
    </div>
  )
}
