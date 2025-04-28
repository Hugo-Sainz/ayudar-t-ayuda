import { Stethoscope} from "lucide-react"
import { Button } from "../../../components/ui/button"
import { Card, CardContent } from "../../../components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../components/ui/tabs"
import { ServiceGallery } from "../../../components/ui/serviceGallery"

// Datos de ejemplo para los servicios
const servicios = [
  // Si se desea agregar mas galerias de imagenes puedes agregarlo como un objeto con id unico y su arreglo de imagenes
  {
    id: 1,
    nombre: "Servicios Disponibles",
    descripcion: "Atención médica básica y preventiva para toda la familia",
    icono: Stethoscope,
    imagenes: [
      {
        url: "/services/Diapositiva1.PNG",
        alt: "Paquete de Atención de urgencias",
        titulo: "Paquete de Atención de Urgencias",
      },
      {
        url: "/services/Diapositiva2.PNG",
        alt: "Atención de urgencias",
        titulo: "Atención de Urgencias",
      },
      {
        url: "/services/Diapositiva3.PNG",
        alt: "Paquete de Atención de Urgencias Médicas ",
        titulo: "Paquete de Atención de Urgencias Médicas ",
      },
      {
        url: "/services/Diapositiva4.PNG",
        alt: "Paquete de Urgencias ",
        titulo: "Paquete de Urgencias ",
      },
      {
        url: "/services/Diapositiva5.PNG",
        alt: "Paquete de Ginecología",
        titulo: "Paquete de Ginecología",
      },
      {
        url: "/services/Diapositiva6.PNG",
        alt: "Atencion de Cirujía Geneneral",
        titulo: "Atencion de Cirujía Geneneral",
      },
    ],
  },

]

export default function Services() {
  return (
    <div className="min-h-screen relative">

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 relative z-1">
        <div className="max-w-6xl mx-auto bg-white p-4 rounded overflow-auto h-160">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Nuestros Servicios</h1>

          <p className="text-gray-600 mb-8 max-w-3xl">
            En nuestro Centro Médico ofrecemos una amplia gama de servicios médicos con profesionales altamente
            calificados y tecnología de vanguardia para cuidar de su salud y bienestar.
          </p>

          <Tabs defaultValue="galeria" className="w-full mb-8">
            <TabsList className="bg-gray-100 mb-6">
              <TabsTrigger value="galeria" className="data-[state=active]:bg-red-600 data-[state=active]:text-white">
                Galería
              </TabsTrigger>
              {/* <TabsTrigger value="lista" className="data-[state=active]:bg-red-600 data-[state=active]:text-white">
                Lista de Servicios
              </TabsTrigger> */}
            </TabsList>

            <TabsContent value="galeria" className="mt-0">
              <div className="grid grid-cols-1 gap-8">
                {servicios.map((servicio) => (
                  <div key={servicio.id} className="mb-12">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-full bg-red-50 text-red-600">
                        <servicio.icono className="h-6 w-6" />
                      </div>
                      <h2 className="text-xl font-semibold text-gray-900">{servicio.nombre}</h2>
                    </div>

                    <p className="text-gray-600 mb-6">{servicio.descripcion}</p>

                    <ServiceGallery images={servicio.imagenes} />
                  </div>
                ))}
              </div>
            </TabsContent>

            {/* Tabla opcional por si se quiere agregar otro apartado en esta vista */}
            <TabsContent value="lista" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {servicios.map((servicio) => (
                  <Card
                    key={servicio.id}
                    className="overflow-hidden hover:shadow-md transition-shadow cursor-pointer bg-white/90 backdrop-blur-sm"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 rounded-full bg-red-50 text-red-600">
                          <servicio.icono className="h-5 w-5" />
                        </div>
                        <h3 className="font-medium">{servicio.nombre}</h3>
                      </div>
                      <p className="text-sm text-gray-500 mb-4">{servicio.descripcion}</p>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full text-red-600 border-red-200 hover:bg-red-50 hover:text-red-700"
                      >
                        Ver detalles
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

          </Tabs>

        </div>
          {/* Información adicional */}
          <div className="bg-blue-50 border border-blue-100 rounded-lg p-6 text-blue-700 mt-8">
            <h3 className="font-semibold text-lg mb-3">Información sobre nuestros servicios</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Todos nuestros servicios están disponibles de lunes a viernes de 8:00 AM a 8:00 PM</li>
              <li>Para servicios de especialidad, se requiere agendar cita previa</li>
              <li>Aceptamos la mayoría de los seguros médicos</li>
              <li>Contamos con servicios de urgencias las 24 horas</li>
              <li>Para más información, puede contactarnos al (555) 123-4567</li>
            </ul>
          </div>
      </main>
    </div>
  )
}
