import type React from "react"
import {
  UserCircle,
  Calendar,
  ClipboardList,
  Stethoscope,
  MessageSquare,
  HelpCircle,
  LogOut,
} from "lucide-react"
import { Avatar, AvatarFallback } from "../components/ui/avatar"
import { Button } from "../components/ui/button"
import { Card, CardContent } from "../components/ui/card"
import { Badge } from "../components/ui/badge"


export default function Home() {
  return (
    <div className="min-h-screen relative">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 z-0">
        <img src="/fondo.avif" alt="Fondo Centro Médico" className="object-cover opacity-100 w-full h-full" />
      </div>

      {/* Overlay para mejorar legibilidad */}
      <div className="absolute inset-0 bg-white/85 z-0"></div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 relative z-1 ">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Bienvenido, Saul</h1>
          <p className="text-gray-600">¿Qué deseas hacer hoy?</p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          <QuickActionCard
            icon={<Calendar className="h-6 w-6 text-red-600" />}
            title="Agendar Cita"
            href="#"
            notification={false}
          />
          <QuickActionCard
            icon={<ClipboardList className="h-6 w-6 text-red-600" />}
            title="Historial de Citas"
            href="#"
            notification={true}
            notificationCount={3}
          />
          <QuickActionCard
            icon={<Stethoscope className="h-6 w-6 text-red-600" />}
            title="Servicios"
            href="#"
            notification={false}
          />
          <QuickActionCard
            icon={<MessageSquare className="h-6 w-6 text-red-600" />}
            title="Quejas y Sugerencias"
            href="#"
            notification={false}
          />
          <QuickActionCard
            icon={<HelpCircle className="h-6 w-6 text-red-600" />}
            title="Ayuda"
            href="#"
            notification={false}
          />
          <QuickActionCard
            icon={<LogOut className="h-6 w-6 text-red-600" />}
            title="Salir"
            href="#"
            notification={false}
          />
        </div>

        {/* Upcoming Appointments */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900">Próximas Citas</h2>
            <Button
              variant="outline"
              size="sm"
              className="text-red-600 border-red-200 hover:bg-red-50 hover:text-red-700"
            >
              Ver todas
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <AppointmentCard
              date="15 Mayo, 2025"
              time="10:30 AM"
              doctor="Dra. María Rodríguez"
              specialty="Medicina General"
              status="confirmed"
            />
            <AppointmentCard
              date="22 Mayo, 2025"
              time="3:15 PM"
              doctor="Dr. Carlos Méndez"
              specialty="Cardiología"
              status="pending"
            />
          </div>
        </div>

        {/* Health Services */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900">Servicios Destacados</h2>
            <Button
              variant="outline"
              size="sm"
              className="text-red-600 border-red-200 hover:bg-red-50 hover:text-red-700"
            >
              Todos los servicios
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <ServiceCard
              title="Consulta General"
              description="Atención médica básica y preventiva"
              icon={<Stethoscope className="h-5 w-5" />}
            />
            <ServiceCard
              title="Laboratorio"
              description="Análisis clínicos y estudios"
              icon={<ClipboardList className="h-5 w-5" />}
            />
            <ServiceCard
              title="Especialidades"
              description="Consultas con especialistas"
              icon={<UserCircle className="h-5 w-5" />}
            />
            <ServiceCard
              title="Urgencias"
              description="Atención médica inmediata"
              icon={<HelpCircle className="h-5 w-5" />}
            />
          </div>
        </div>
      </main>
    </div>
  )
}

function QuickActionCard({
  icon,
  title,
  href,
  notification,
  notificationCount,
}: {
  icon: React.ReactNode
  title: string
  href: string
  notification: boolean
  notificationCount?: number
}) {
  return (
    <a
      href={href}
      className="relative bg-white/90 backdrop-blur-sm rounded-xl border border-gray-200 p-4 flex flex-col items-center justify-center gap-3 hover:shadow-md transition-shadow text-center h-32"
    >
      {notification && (
        <Badge className="absolute top-2 right-2 h-5 w-5 flex items-center justify-center p-0 bg-red-600">
          {notificationCount}
        </Badge>
      )}
      <div className="p-2 rounded-full bg-red-50">{icon}</div>
      <span className="font-medium text-sm">{title}</span>
    </a>
  )
}

function AppointmentCard({
  date,
  time,
  doctor,
  specialty,
  status,
}: {
  date: string
  time: string
  doctor: string
  specialty: string
  status: "confirmed" | "pending" | "cancelled"
}) {
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

function ServiceCard({
  title,
  description,
  icon,
}: {
  title: string
  description: string
  icon: React.ReactNode
}) {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow cursor-pointer bg-white/90 backdrop-blur-sm">
      <CardContent className="p-4">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 rounded-full bg-red-50 text-red-600">{icon}</div>
          <h3 className="font-medium">{title}</h3>
        </div>
        <p className="text-sm text-gray-500">{description}</p>
      </CardContent>
    </Card>
  )
}
