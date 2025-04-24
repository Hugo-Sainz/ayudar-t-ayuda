"use client"

import * as React from "react"
import { format } from "date-fns"

export function DatePicker() {
  const [date, setDate] = React.useState<string>("")

  // Calcular la fecha mínima (hoy)
  const today = new Date()
  const minDate = format(today, "yyyy-MM-dd")

  // Calcular la fecha máxima (3 meses desde hoy)
  const maxDate = format(new Date(today.setMonth(today.getMonth() + 3)), "yyyy-MM-dd")

  return (
    <input
      type="date"
      value={date}
      min={minDate}
      max={maxDate}
      onChange={(e) => setDate(e.target.value)}
      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
    />
  )
}
