import { MessageSquare } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../components/ui/tabs"
import { FeedbackForm } from "../../../components/ui/feedback-form"

export default function QuejasSugerenciasPage() {
  return (
    <div className="h-[800px] overflow-y-scroll md:overflow-y-visible">

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 relative z-1">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Quejas y Sugerencias</h1>

          <Tabs defaultValue="nuevo" className="w-full mb-8">
            <TabsList className="bg-gray-100 mb-6">
              <TabsTrigger value="nuevo" className="data-[state=active]:bg-red-600 data-[state=active]:text-white">
                Nuevo Comentario
              </TabsTrigger>

              {/* en caso de querer un apartado extra en esta vista */}

              {/* <TabsTrigger value="historial" className="data-[state=active]:bg-red-600 data-[state=active]:text-white">
                Historial
              </TabsTrigger> */}
            </TabsList>

            <TabsContent value="nuevo" className="mt-0">
              <Card className="bg-white/90 backdrop-blur-sm shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-red-600">
                    <MessageSquare className="h-5 w-5" />
                    Enviar Comentario
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <FeedbackForm />
                </CardContent>
              </Card>
            </TabsContent>

          </Tabs>

          {/* Información adicional */}
          <div className="bg-blue-50 border border-blue-100 rounded-lg p-6 text-blue-700">
            <h3 className="font-semibold text-lg mb-3">Información importante</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Todos los comentarios son revisados por nuestro equipo de atención al paciente</li>
              <li>Recibirás una respuesta en un plazo máximo de 48 horas hábiles</li>
              <li>Para casos urgentes, te recomendamos contactar directamente al (555) 123-4567</li>
              <li>Tus comentarios nos ayudan a mejorar nuestros servicios</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  )
}