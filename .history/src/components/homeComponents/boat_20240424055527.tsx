import * as React from "react"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import Image from "next/image"
import { Badge } from "../ui/badge"

export function BoatHomePageComponent() {
  return (
    <Card className="w-[450px]">
      <CardHeader>
        <CardTitle>
          <Badge className="italic text-base text-bold mr-2 rounded">
            150 €
          </Badge>
          {""}
          <span>forfait 1/2 journée de pêche dans le lagon</span>
        </CardTitle>
        <CardDescription>
          Materiel (cannes et appats) et boissons (softdrink) compris - pour 2
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
