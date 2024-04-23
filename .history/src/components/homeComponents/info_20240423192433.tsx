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

export function InfoHomePageComponent() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  return (
    <Card className="w-[450px]">
      <CardHeader>
        <CardTitle>
          <span>Information</span>
        </CardTitle>
        <CardDescription>Veuillez choisir votre date de sortie</CardDescription>
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
