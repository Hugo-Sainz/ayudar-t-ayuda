"use client"

import * as React from "react"
import { cn } from "../../lib/utils"
import { useEffect, useState } from "react"
import { getHorarios } from "../../app/user/services/appointments"

interface Props {
  date: string,
  service: string, 
  onTimeChange: (date: string) => void,
}

function obtenerDiaSemana(fecha: any) {
  const diasSemana = ["DOMINGO", "LUNES", "MARTES", "MIÉRCOLES", "JUEVES", "VIERNES", "SÁBADO"];
  const [year, month, day] = fecha.split('-');
  const fechaLocal = new Date(year, month - 1, day);
  const dia = fechaLocal.getDay();
  return diasSemana[dia];
}

const ALL_TIMES = [
  "08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30",
  "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30",
];

export function TimeSlotPicker({ date, service, onTimeChange }: Props) {

  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [timeSlots, setTimeSlots] = useState<{ time: string, available: boolean }[]>([])

  const diaSemana = obtenerDiaSemana(date)

  useEffect(() => {
    if (selectedTime !== null) {
      onTimeChange(selectedTime);
    }
  }, [selectedTime, onTimeChange]);
  

  useEffect(() => {
    if (date && service) {
      const fetchData = async () => {
        try {
          const response = await getHorarios(service, diaSemana)
          const horariosDisponibles: string[] = response.horarios

          const actualizados = ALL_TIMES.map(time => ({
            time,
            available: horariosDisponibles.includes(time)
          }))

          setTimeSlots(actualizados)
        } catch (error) {
          console.error("Error en obtener Horarios", error)
        }
      }
      fetchData()
    }
  }, [date, service])

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
              : "bg-red-100 text-gray-400 cursor-not-allowed border-gray-200",
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
