import {
  UserCircle,
  Calendar,
  ClipboardList,
  Stethoscope,
  MessageSquare,
  HelpCircle,
  LogOut,
} from "lucide-react"
import { Button } from "../../../components/ui/button"
import { ServiceCard } from "../../../components/ui/service-card"
import { AppointmentCard } from "../../../components/ui/appointment-card"
import { QuickActionCard } from "../../../components/ui/quick-action-card"

export default function Home() {
  return (
    <div className="min-h-screen relative">
      
      {/* Main Content */}
      <main className="container mx-auto px-10 py-8 relative z-1">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Bienvenido, Saul</h1>
          <p className="text-gray-600">¿Qué deseas hacer hoy?</p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          <QuickActionCard
            icon={<Calendar className="h-6 w-6 text-red-600" />}
            title="Agendar Cita"
            href={"/appointments"}
            notification={false}
            exit="false"
          />
          <QuickActionCard
            icon={<ClipboardList className="h-6 w-6 text-red-600" />}
            title="Historial de Citas"
            href={"/history"}
            notification={true}
            notificationCount={3}
            exit="false"
          />
          <QuickActionCard
            icon={<Stethoscope className="h-6 w-6 text-red-600" />}
            title="Servicios"
            href="/services"
            notification={false}
            exit="false"
          />
          <QuickActionCard
            icon={<MessageSquare className="h-6 w-6 text-red-600" />}
            title="Quejas y Sugerencias"
            href="/complaints"
            notification={false}
            exit="false"
          />
          <QuickActionCard
            icon={<HelpCircle className="h-6 w-6 text-red-600" />}
            title="Ayuda"
            href="/help"
            notification={false}
            exit="false"
          />
          <QuickActionCard
            icon={<LogOut className="h-6 w-6 text-red-600" />}
            title="Salir"
            href="/"
            notification={false}
            exit="true"
          />
        </div>

        {/* Upcoming Appointments */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900">Próximas Citas</h2>
            <Button
              variant="outline"
              size="sm"
              className="text-black-600 bg-white border-black-200 hover:bg-red-50 hover:text-red-700"
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
              className="text-black-600 bg-white border-black-200 hover:bg-red-50 hover:text-red-700"
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




