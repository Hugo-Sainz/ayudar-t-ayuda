import { CalendarCheck } from "lucide-react"
import { Button } from "../../../components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../../../components/ui/card"
import { DatePicker } from "../../../components/ui/date-picker"
import { Label } from "../../../components/ui/laber"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../components/ui/select"
import { TimeSlotPicker } from "../../../components/ui/time-slot-picker"
import SelectDinamic from "../../../components/selectDinamic"
import { getServices } from "../services/appointments"
import { useEffect, useState } from "react"

export default function Appointments() {
  const [selectedServicio, setSelectedServicio] = useState("")
  const [selectedUrgencias, setSelectedUrgencias] = useState("")
  const [fechaSeleccionada, setFechaSeleccionada] = useState("")
  const [services, setServices] = useState()

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await getServices();
        const services = response.servicios

        setServices(services)
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    };

    fetchData(); // Se ejecuta justo al cargar el componente
  }, []); // El arreglo vacío [] asegura que solo se ejecute una vez al montarse

  const handleSubmit = (event:any) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    
    const dataObject : any = {};
    formData.forEach((value, key) => {
      dataObject[key] = value;
    });

    console.log('Datos del formulario:', dataObject);

    // Aquí puedes enviar los datos a tu backend usando fetch o axios
    // fetch('/api/endpoint', { method: 'POST', body: JSON.stringify(dataObject) });
  };

  return (
    <div className="min-h-screen relative">
      
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 relative z-1">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Agendar Cita</h1>
          <form onSubmit={handleSubmit}>
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
                  <SelectDinamic 
                    items={services || []} 
                    onSelectChange={setSelectedServicio}/>
                </div>
                    
                {/* Select de Urgencias */}
                {selectedServicio === "URGENCIAS" && (
                  <SelectDinamic
                    items={[
                      { id_servicio: 1,
                        nombre: "Accidente Laboral", 
                        precio: "0" },
                      { id_servicio: 2,
                        nombre: "Enfermedad General",
                        precio: "0" },
                      ]} 
                    onSelectChange={setSelectedUrgencias}
                  />
                )}


                {/* Seleccionar Fecha */}
                <div className="space-y-2">
                  <DatePicker 
                    onDateChange={setFechaSeleccionada}
                    disabled={selectedServicio === "URGENCIAS"}
                  />
                </div>

                {/* Seleccionar Horario */}
                <div className={`space-y-2 ${selectedServicio === "URGENCIAS" ? "hidden" : ""}`}>
                  <Label className="text-base font-medium">Seleccionar Horario:</Label>
                  <TimeSlotPicker 
                    date={fechaSeleccionada} 
                    service={selectedServicio}
                  />
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
                <Button 
                  className="bg-red-600 hover:bg-red-700 text-white" 
                  type="submit"
                >
                  <CalendarCheck className="mr-2 h-4 w-4 " />
                  Programar Cita
                </Button>
              </CardFooter>
            </Card>
          </form>

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
