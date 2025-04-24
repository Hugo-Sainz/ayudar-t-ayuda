import { Avatar, AvatarFallback } from "./avatar"
import { Card, CardContent } from "./card"


interface AppointmentCardProps {
  date: string
  time: string
  doctor: string
  specialty: string
  status: "confirmed" | "pending" | "cancelled"
}

export function AppointmentCard({
  date,
  time,
  doctor,
  specialty,
  status,
}: AppointmentCardProps) {
  const statusConfig = {
    confirmed: { label: "Confirmada", color: "bg-green-100 text-green-800" },
    pending: { label: "Pendiente", color: "bg-yellow-100 text-yellow-800" },
    cancelled: { label: "Cancelada", color: "bg-red-100 text-red-800" },
  }

  return (
    <Card className="overflow-hidden bg-white/90 backdrop-blur-sm">
      <div className="bg-red-600 py-2 px-4">
        <p className="text-white font-medium text-sm">
          {date} - {time}
        </p>
      </div>
      <CardContent className="p-4">
        <div className="flex items-start gap-3">
          <Avatar className="h-10 w-10 mt-1">
            <AvatarFallback className="bg-red-100 text-red-800">
              {doctor
                .split(" ")
                .map((name) => name[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium">{doctor}</p>
            <p className="text-sm text-gray-500">{specialty}</p>
            <div className="mt-2">
              <span className={`text-xs px-2 py-1 rounded-full ${statusConfig[status].color}`}>
                {statusConfig[status].label}
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

