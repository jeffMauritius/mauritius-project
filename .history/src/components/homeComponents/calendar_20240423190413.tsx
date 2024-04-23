import React, { useState } from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Calendar } from "@/components/ui/calendar"

export function CalendarHomePageComponent() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  return (
    <Card className="w-[450px]">
      <CardHeader>
        <CardTitle>
          <span className="text-orange-400 italic text-bold mr-2">150€</span>
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
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border shadow"
          />
        </div>
      </CardContent>
    </Card>
  )
}
