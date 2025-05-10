import { Calendar, Search, Filter, Download, X, Eye, Clock, Stethoscope } from "lucide-react"
import { Button } from "../../../components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../components/ui/tabs"
import { Input } from "../../../components/ui/input"
import { Badge } from "../../../components/ui/badge"
import { useEffect, useState } from "react"
import { getCitas } from "../services/datingHidtory"

const idEmpleado = localStorage.getItem("id_empleado")

// Datos de ejemplo para el historial
const historial = [
  {
    id: 101,
    fecha: "10/01/2025",
    hora: "09:30",
    servicio: "Consulta General",
    doctor: "Dra. María Rodríguez",
    estado: "completada",
  },
  {
    id: 102,
    fecha: "05/12/2024",
    hora: "14:15",
    servicio: "Cardiología",
    doctor: "Dr. Carlos Méndez",
    estado: "completada",
  },
  {
    id: 103,
    fecha: "22/11/2024",
    hora: "11:00",
    servicio: "Laboratorio",
    doctor: "Dra. Ana López",
    estado: "completada",
  },
  {
    id: 104,
    fecha: "15/10/2024",
    hora: "16:45",
    servicio: "Consulta General",
    doctor: "Dr. Juan Pérez",
    estado: "cancelada",
  },
]

export default function HistorialCitasPage() {
  const [citas, setCitas] = useState<any[]>([])

  useEffect(() => {
  
      const fetchData = async () => {
        try {
          const response = await getCitas(idEmpleado || "");
          const citas = response.Data
          // console.log(citas)
  
          setCitas(citas)
        } catch (error) {
          console.error("Error al obtener citas:", error);
        }
      };
  
      fetchData();
    }, []); // El arreglo vacío [] asegura que solo se ejecute una vez al montarse

  return (
    <div className="min-h-screen relative">
      
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 relative z-1">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Historial de Citas</h1>

          <Tabs defaultValue="proximas" className="w-full">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
              <TabsList className="bg-gray-100">
                <TabsTrigger value="proximas" className="data-[state=active]:bg-red-600 data-[state=active]:text-white">
                  Próximas Citas
                </TabsTrigger>
                <TabsTrigger
                  value="historial"
                  className="data-[state=active]:bg-red-600 data-[state=active]:text-white"
                >
                  Historial
                </TabsTrigger>
              </TabsList>

              <div className="flex items-center gap-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input type="text" placeholder="Buscar citas..." className="pl-10 pr-4 py-2 w-full sm:w-auto bg-white" />
                </div>

                {/* Dropdown para filtrar por servicio (opcional) */}

                {/* <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="icon">
                      <Filter className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Todos los servicios</DropdownMenuItem>
                    <DropdownMenuItem>Consulta General</DropdownMenuItem>
                    <DropdownMenuItem>Especialidades</DropdownMenuItem>
                    <DropdownMenuItem>Laboratorio</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu> */}

              </div>
            </div>

            <TabsContent value="proximas" className="mt-0">
              <Card className="bg-white/90 backdrop-blur-sm shadow-sm">
                <CardHeader className="pb-0">
                  <CardTitle className="text-lg text-gray-700">Citas Programadas</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-red-50 text-left">
                          <th className="px-4 py-3 text-sm font-medium text-red-800">Fecha</th>
                          <th className="px-4 py-3 text-sm font-medium text-red-800">Hora</th>
                          <th className="px-4 py-3 text-sm font-medium text-red-800">Servicio</th>
                          <th className="px-4 py-3 text-sm font-medium text-red-800">Estado</th>
                          <th className="px-4 py-3 text-sm font-medium text-red-800">Acciones</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        {citas.map((cita) => (
                          <tr key={cita.id_agenda} className="hover:bg-gray-50">
                            <td className="px-4 py-4 text-sm">{cita.fecha}</td>
                            <td className="px-4 py-4 text-sm">{cita.hora}</td>
                            <td className="px-4 py-4 text-sm font-medium">{cita.nombre_ser}</td>
                            <td className="px-4 py-4 text-sm">
                              <Badge
                                className={
                                  cita.estatus === "procesando"
                                    ? "bg-yellow-100 text-yellow-800 hover:bg-green-100"
                                    : cita.estado === "cancelada"
                                      ? "bg-red-100 text-red-800 hover:bg-red-100"
                                      : "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
                                }
                              >
                                {cita.estatus}
                              </Badge>
                            </td>
                            <td className="px-4 py-4 text-sm">
                              <div className="flex items-center gap-2">
                                {/* <Button variant="outline" size="sm" className="h-8 px-2 text-gray-600">
                                  <Eye className="h-3.5 w-3.5 mr-1" />
                                  <span className="hidden sm:inline">Ver</span>
                                </Button> */}
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="h-8 px-2 text-red-600 border-red-200 hover:bg-red-50 hover:text-red-700"
                                >
                                  <X className="h-3.5 w-3.5 mr-1" />
                                  <span className="hidden sm:inline">Cancelar</span>
                                </Button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="historial" className="mt-0">
              <Card className="bg-white/90 backdrop-blur-sm shadow-sm">
                <CardHeader className="pb-0">
                  <CardTitle className="text-lg text-gray-700">Historial de Citas</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-red-50 text-left">
                          <th className="px-4 py-3 text-sm font-medium text-red-800">Fecha</th>
                          <th className="px-4 py-3 text-sm font-medium text-red-800">Hora</th>
                          <th className="px-4 py-3 text-sm font-medium text-red-800">Servicio</th>
                          <th className="px-4 py-3 text-sm font-medium text-red-800">Estado</th>
                          <th className="px-4 py-3 text-sm font-medium text-red-800">Acciones</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        {historial.map((cita) => (
                          <tr key={cita.id} className="hover:bg-gray-50">
                            <td className="px-4 py-4 text-sm">{cita.fecha}</td>
                            <td className="px-4 py-4 text-sm">{cita.hora}</td>
                            <td className="px-4 py-4 text-sm font-medium">{cita.servicio}</td>
                            <td className="px-4 py-4 text-sm">
                              <Badge
                                className={
                                  cita.estado === "completada"
                                    ? "bg-green-100 text-green-800 hover:bg-green-100"
                                    : cita.estado === "cancelada"
                                      ? "bg-red-100 text-red-800 hover:bg-red-100"
                                      : "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
                                }
                              >
                                {cita.estado === "completada"
                                  ? "Completada"
                                  : cita.estado === "cancelada"
                                    ? "Cancelada"
                                    : "Pendiente"}
                              </Badge>
                            </td>
                            <td className="px-4 py-4 text-sm">
                              <Button variant="outline" size="sm" className="h-8 px-2 text-gray-600">
                                <Eye className="h-3.5 w-3.5 mr-1" />
                                <span className="hidden sm:inline">Detalles</span>
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Resumen de citas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <Card className="bg-white/90 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-blue-100">
                    <Calendar className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Total de Citas</p>
                    <p className="text-2xl font-bold">{citas.length + historial.length}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-yellow-100">
                    <Clock className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Citas Pendientes</p>
                    <p className="text-2xl font-bold">{citas.length}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-green-100">
                    <Stethoscope className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Citas Completadas</p>
                    <p className="text-2xl font-bold">{historial.filter((c) => c.estado === "completada").length}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
