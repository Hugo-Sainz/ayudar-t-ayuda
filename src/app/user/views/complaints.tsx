import { MessageSquare } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../components/ui/tabs"
import { FeedbackForm } from "../../../components/ui/feedback-form"

export default function QuejasSugerenciasPage() {
  return (
    <div className="min-h-screen relative">
    
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

// Datos de ejemplo para el historial de comentarios
const feedbackHistory = [
  {
    id: 1,
    tipo: "queja",
    fecha: "15/04/2025",
    asunto: "Tiempo de espera",
    mensaje: "El tiempo de espera para la consulta fue excesivo, estuve más de 1 hora esperando.",
    estado: "respondido",
    respuesta:
      "Lamentamos la espera. Estamos trabajando para mejorar nuestros tiempos de atención. Gracias por su comentario.",
  },
  {
    id: 2,
    tipo: "sugerencia",
    fecha: "02/03/2025",
    asunto: "Área de juegos para niños",
    mensaje: "Sería bueno contar con un área de juegos para niños en la sala de espera de pediatría.",
    estado: "en_revision",
    respuesta: null,
  },
]

// Componente para mostrar un elemento del historial
function FeedbackHistoryItem({ feedback }: { feedback: (typeof feedbackHistory)[0] }) {
  return (
    <div className="border rounded-lg overflow-hidden">
      <div className="bg-gray-50 p-4 flex justify-between items-center border-b">
        <div>
          <span
            className={`inline-block px-2 py-1 text-xs rounded-full ${
              feedback.tipo === "queja" ? "bg-red-100 text-red-800" : "bg-green-100 text-green-800"
            }`}
          >
            {feedback.tipo === "queja" ? "Queja" : "Sugerencia"}
          </span>
          <span className="ml-2 text-sm text-gray-500">{feedback.fecha}</span>
        </div>
        <span
          className={`inline-block px-2 py-1 text-xs rounded-full ${
            feedback.estado === "respondido" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
          }`}
        >
          {feedback.estado === "respondido" ? "Respondido" : "En revisión"}
        </span>
      </div>
      <div className="p-4">
        <h4 className="font-medium mb-2">{feedback.asunto}</h4>
        <p className="text-sm text-gray-600 mb-4">{feedback.mensaje}</p>

        {feedback.respuesta && (
          <div className="bg-gray-50 p-3 rounded-lg mt-3 border">
            <p className="text-xs font-medium text-gray-500 mb-1">Respuesta:</p>
            <p className="text-sm">{feedback.respuesta}</p>
          </div>
        )}
      </div>
    </div>
  )
}
