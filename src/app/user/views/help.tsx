import { 
  Phone, 
  Mail, 
  Clock, 
  AlertCircle, 
  MessageSquare 
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card"
import { Tabs, TabsContent } from "../../../components/ui/tabs"
import { ContactCard } from "../../../components/ui/contact-card"
import {Map, Marker, ZoomControl } from "pigeon-maps"

export default function AyudaPage() {
  return (
    <div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 relative z-1">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Centro de Ayuda</h1>

          <Tabs defaultValue="contacto" className="w-full mb-8">

            <TabsContent value="contacto" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ContactCard
                  title="ATENCIÓN A CLIENTES"
                  icon={<MessageSquare className="h-6 w-6" />}
                  items={[
                    {
                      icon: <Clock className="h-5 w-5" />,
                      label: "Horario:",
                      value: "Lunes a Viernes: 9:00 - 18:00",
                    },
                    {
                      icon: <Phone className="h-5 w-5" />,
                      label: "Número:",
                      value: "+52 222 107 2513",
                    },
                    {
                      icon: <Mail className="h-5 w-5" />,
                      label: "Correo electrónico:",
                      value: "atencion.clientes@centromedico.org",
                      isEmail: true,
                    },
                  ]}
                  whatsappNumber="+522221072513"
                  whatsappMessage="Hola, necesito información sobre..."
                />

                <ContactCard
                  title="URGENCIAS"
                  icon={<AlertCircle className="h-6 w-6" />}
                  items={[
                    {
                      icon: <Clock className="h-5 w-5" />,
                      label: "Horario:",
                      value: "24 horas, los 365 días del año",
                    },
                    {
                      icon: <Phone className="h-5 w-5" />,
                      label: "Número de Teléfono:",
                      value: "(222) 2-13-77-00",
                    },
                    {
                      icon: <Phone className="h-5 w-5" />,
                      label: "Número de WhatsApp:",
                      value: "+52 222 863 6854",
                    },
                  ]}
                  whatsappNumber="+522228636854"
                  whatsappMessage="Hola, tengo una emergencia..."
                  isEmergency={true}
                />
              </div>

              <Card className="mt-8 bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lg text-gray-700">Ubicaciones</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className=" md:grid-cols-2 gap-6">
                    <div >
                      <h3 className="font-medium mb-2">Sede Principal</h3>
                      <p className="text-sm text-gray-600 mb-1">C. 20 Ote 1002, San Francisco</p>
                      <p className="text-sm text-gray-600 mb-1">Heroica Puebla de Zaragoza, Pue, 72290</p>
                      <p className="text-sm text-gray-600">Tel: (222) 234-7942</p>

                      <div className="mt-4 h-48 bg-gray-200 rounded-lg relative overflow-hidden">
                        <div className=" inset-0 flex items-center justify-center">
                          {/* <p className="text-gray-500">Mapa de ubicación</p> */}
                          <Map 
                            height={200} 
                            defaultCenter={[19.04801, -98.18791]}
                            defaultZoom={17}
                          >
                            <Marker 
                              width={50} 
                              anchor={[19.04801, -98.18791]} 
                              onClick={() => {window.open("https://www.google.com.mx/maps/place/Cruz+Roja+Mexicana+Delegaci%C3%B3n+Estatal+Puebla/@19.0482874,-98.1881186,20.06z/data=!4m6!3m5!1s0x85cfc0fca961a605:0x403d45a15fbb2f39!8m2!3d19.0481212!4d-98.1880292!16s%2Fg%2F11f3y2b7mz?entry=ttu&g_ep=EgoyMDI1MDUxMy4xIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D", "_blank")}}
                            />
                            <ZoomControl/>
                          </Map>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Información adicional */}
          <div className="bg-blue-50 border border-blue-100 rounded-lg p-6 text-blue-700">
            <h3 className="font-semibold text-lg mb-3">Información importante</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Para emergencias médicas graves, llame al 911 o acuda directamente a urgencias</li>
              <li>Nuestro personal de atención a clientes está disponible para resolver todas sus dudas</li>
              <li>Si tiene problemas para usar el portal, puede solicitar asistencia telefónica</li>
              <li>Recuerde que puede agendar citas con al menos 24 horas de anticipación</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  )
}
