"use client"

import * as React from "react"
import { cn } from "../../lib/utils"

const timeSlots = [
  { time: "08:00", available: true },
  { time: "08:30", available: true },
  { time: "09:00", available: true },
  { time: "09:30", available: false },
  { time: "10:00", available: true },
  { time: "10:30", available: true },
  { time: "11:00", available: false },
  { time: "11:30", available: true },
  { time: "12:00", available: true },
  { time: "12:30", available: false },
  { time: "13:00", available: false },
  { time: "15:00", available: true },
  { time: "15:30", available: true },
  { time: "16:00", available: true },
  { time: "16:30", available: true },
  { time: "17:00", available: true },
  { time: "17:30", available: false },
  { time: "18:00", available: true },
]

export function TimeSlotPicker() {
  const [selectedTime, setSelectedTime] = React.useState<string | null>(null)

  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
      {timeSlots.map((slot) => (
        <button
          key={slot.time}
          className={cn(
            "py-2 px-3 rounded-md text-sm font-medium border transition-colors",
            slot.available
              ? selectedTime === slot.time
                ? "bg-red-600 text-white border-red-600"
                : "border-gray-200 hover:border-red-200 hover:bg-red-50"
              : "bg-gray-100 text-gray-400 cursor-not-allowed border-gray-200",
          )}
          disabled={!slot.available}
          onClick={() => setSelectedTime(slot.time)}
        >
          {slot.time}
        </button>
      ))}
    </div>
  )
}
