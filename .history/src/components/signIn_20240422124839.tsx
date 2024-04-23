import { LogIn } from "lucide-react"

import { Button } from "@/components/ui/button"

export function ButtonWithIcon() {
  return (
    <Button>
      <LogIn className="mr-2 h-4 w-4" /> Sign in
    </Button>
  )
}
