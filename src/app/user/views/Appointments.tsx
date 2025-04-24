import { ArrowLeft, CalendarCheck } from "lucide-react"
import { Button } from "../../../components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../../../components/ui/card"
import { DatePicker } from "../../../components/ui/date-picker"
import { Label } from "../../../components/ui/laber"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../components/ui/select"
import { TimeSlotPicker } from "../../../components/ui/time-slot-picker"
import { useNavigate } from "react-router-dom"

export default function Appointments() {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/home") // cambia "/ruta-destino" por la ruta que quieras
  }

  return (
    <div className="min-h-screen relative">
      
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-3 flex items-center">
          <button 
            className="flex items-center gap-2 solid cursor-pointer" 
            onClick={handleClick}
            >
            <Button 
                variant="secondary" 
                size="icon" 
                className="mr-2">
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <span className="font-semibold text-red-600 text-lg hidden md:inline">Volver</span>
            <div className="h-10 w-10 relative">
                <img 
                    src="/logo.png" 
                    alt="Logo" 
                    className="object-contain" 
                />
            </div>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 relative z-1">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Agendar Cita</h1>

          <Card className="bg-white/90 backdrop-blur-sm shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-red-600">
                <CalendarCheck className="h-5 w-5" />
                Nueva Cita
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Seleccionar Servicio */}
              <div className="space-y-2">
                <Label htmlFor="service" className="text-base font-medium">
                  Seleccionar Servicio:
                </Label>
                <Select>
                  <SelectTrigger id="service" className="w-full">
                    <SelectValue placeholder="Seleccionar servicio" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="general">Consulta General</SelectItem>
                    <SelectItem value="especialidad">Consulta Especialidad</SelectItem>
                    <SelectItem value="pediatria">Pediatría</SelectItem>
                    <SelectItem value="ginecologia">Ginecología</SelectItem>
                    <SelectItem value="cardiologia">Cardiología</SelectItem>
                    <SelectItem value="dermatologia">Dermatología</SelectItem>
                    <SelectItem value="oftalmologia">Oftalmología</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Seleccionar Fecha */}
              <div className="space-y-2">
                <Label htmlFor="date" className="text-base font-medium">
                  Seleccionar Fecha:
                </Label>
                <DatePicker />
              </div>

              {/* Seleccionar Horario */}
              <div className="space-y-2">
                <Label className="text-base font-medium">Seleccionar Horario:</Label>
                <TimeSlotPicker />
              </div>

              {/* Notas adicionales */}
              {/* <div className="space-y-2">
                <Label htmlFor="notes" className="text-base font-medium">
                  Notas adicionales (opcional):
                </Label>
                <textarea
                  id="notes"
                  className="w-full min-h-[100px] p-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="Describa brevemente el motivo de su consulta..."
                />
              </div> */}
            </CardContent>
            <CardFooter className="flex justify-between border-t p-6">
              <Button variant="outline">Cancelar</Button>
              <Button className="bg-red-600 hover:bg-red-700">
                <CalendarCheck className="mr-2 h-4 w-4" />
                Programar Cita
              </Button>
            </CardFooter>
          </Card>

          {/* Información adicional */}
          <div className="mt-8 bg-blue-50 border border-blue-100 rounded-lg p-4 text-sm text-blue-700">
            <p className="font-medium mb-2">Información importante:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Llegue 15 minutos antes de su cita programada</li>
              <li>Traiga su identificación y tarjeta del seguro médico</li>
              <li>Si necesita cancelar, hágalo con al menos 24 horas de anticipación</li>
              <li>Para consultas de especialidad, es necesario traer su referencia médica</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  )
}
