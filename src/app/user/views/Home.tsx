import {
  Calendar,
  ClipboardList,
  Stethoscope,
  MessageSquare,
  HelpCircle,
  LogOut,
} from "lucide-react"
import { Button } from "../../../components/ui/button"
import { AppointmentCard } from "../../../components/ui/appointment-card"
import { QuickActionCard } from "../../../components/ui/quick-action-card"
import { useNavigate } from "react-router-dom"
import { getCitas } from "../services/datingHistory"
import { useEffect, useState } from "react"

export default function Home() {
  const navigate = useNavigate()
  const [citas, setCitas] = useState<any[]>([])
  const username = localStorage.getItem("nombre_completo")
  const userId = localStorage.getItem("id_empleado")

  useEffect(() => { // Efecto para obtener las citas al cargar el componente
    const fetchData = async () => {
      try {
        const citasProximas = await getCitas(userId || "");
        const cita = citasProximas.Data || []
        console.log(citasProximas)

        setCitas(cita)
      } catch (error) {
        console.error("Error al obtener citas:", error);
      }
    };
    fetchData();
  }, []); // El arreglo vacío [] asegura que solo se ejecute una vez al montarse

  return (
    <div className="h-[800px] overflow-y-scroll md:overflow-y-visible bg-red-100">

      {/* Main Content */}
      <main className="container mx-auto px-10 py-8 relative z-1 h-full">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Bienvenido, {username}</h1>
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
            notification={false}
            notificationCount={0}
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
              onClick={() => navigate("/history")}
            >
              Ver todas
            </Button>
          </div>

          {
            citas.length === 0 ? (
              <div className="flex items-center justify-center h-64">
                <p className="text-gray-500">No tienes citas programadas.</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {citas
                  .filter((cita) => {
                    const fechaCita = new Date(cita.fecha);
                    const fechaActual = new Date();
                    fechaActual.setDate(fechaActual.getDate() - 1);
                    fechaActual.setHours(0, 0, 0, 0);

                    return (
                      fechaCita >= fechaActual
                    );
                  })
                  .map((cita) => (
                    <AppointmentCard
                      date= {cita.fecha}
                      time={cita.hora}
                      doctor={cita.nombre_ser}
                      specialty="Cruz Roja Mexicana"
                      status={cita.estatus === "procesando" ? "pending": "cancelled"}
                    />
                  ))
                }
              </div>
            )
          }
        </div>

        {/* Servicios Destacados */}
        
        {/* <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900">Servicios Destacados</h2>
            <Button
              variant="outline"
              size="sm"
              className="text-black-600 bg-white border-black-200 hover:bg-red-50 hover:text-red-700"
              onClick={() => navigate("/services")}
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
        </div> */}
      </main>
    </div>
  )
}




