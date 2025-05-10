"use client"

import * as React from "react"
import { format } from "date-fns"
import { Label } from "./laber"

interface Props {
  onDateChange: (date: string) => void,
  disabled: boolean
}

export function DatePicker({ onDateChange, disabled }: Props) {
  const [date, setDate] = React.useState<string>("")

  const today = new Date()
  const minDate = format(today, "yyyy-MM-dd")
  const maxDate = format(new Date(today.setMonth(today.getMonth() + 3)), "yyyy-MM-dd")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = e.target.value
    setDate(selectedDate)
    onDateChange(selectedDate) // 👈 se lo mandamos al padre
  }

  return (
    <>
    <div hidden={disabled}>
      <Label htmlFor="date" className="text-base font-medium">
        Seleccionar Fecha:
      </Label>

      <input
        
        type="date"
        value={date}
        min={minDate}
        max={maxDate}
        onChange={handleChange}
        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      />
    </div>
    </>
  )
}
