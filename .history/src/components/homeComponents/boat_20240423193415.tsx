import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Image from "next/image"
import { Badge } from "../ui/badge"

export function BoatHomePageComponent() {
  return (
    <Card className="w-[450px]">
      <CardHeader>
        <CardTitle>
          <Badge>150 €</Badge>
          {""}
          <span>1/2 journée de pêche dans le lagon</span>
        </CardTitle>
        <CardDescription>
          Materiel (cannes et appats) et boissons(softdrink) compris - pour 2
          personnes
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid w-full items-center gap-4">
          <Image src={"/fish2.jpeg"} width={400} height={100} alt={"boat"} />
        </div>
      </CardContent>
    </Card>
  )
}
