import { CalendarCheck } from "lucide-react"
import { Button } from "../../../components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../../../components/ui/card"
import { DatePicker } from "../../../components/ui/date-picker"
import { Label } from "../../../components/ui/laber"
import { TimeSlotPicker } from "../../../components/ui/time-slot-picker"
import SelectDinamic from "../../../components/selectDinamic"
import { getServices, uploadAppointments } from "../services/appointments"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Swal from 'sweetalert2'  

export default function Appointments() {
  const navigate = useNavigate()
  const hoy = new Date() 

  const [selectedServicio, setSelectedServicio] = useState("")
  const [selectedUrgencias, setSelectedUrgencias] = useState("")
  const [fechaSeleccionada, setFechaSeleccionada] = useState("")
  const [timeSelect, setTimeSelect] = useState("")
  const [services, setServices] = useState()

  useEffect(() => { // Efecto para obtener los servicios al cargar el componente
    const fetchData = async () => {
      try {
        const response = await getServices();
        const services = response.servicios;

        setServices(services)
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    };

    fetchData(); // Se ejecuta justo al cargar el componente
  }, []); // El arreglo vacío [] asegura que solo se ejecute una vez al montarse

  const handleSubmit = async (event:any) => { // Manejo del evento de envío del formulario
    event.preventDefault();

    const formData = {
      servicio: selectedServicio,
      fecha: fechaSeleccionada,
      horario: timeSelect,
      fk_empleado: localStorage.getItem("id_empleado"),
      estatus: "procesando"
    }

    const formDataUrgencias = {
      ...formData,
      servicio: selectedUrgencias,
      fecha: hoy.toISOString().split('T')[0], // Formato YYYY-MM-DD
      horario: hoy.toTimeString().split(' ')[0], // Formato HH:MM:SS
      
    }

    const formDataPsicologia = {
      ...formData,
      servicio: selectedServicio,
      fecha: hoy.toISOString().split('T')[0], // Formato YYYY-MM-DD
      horario: hoy.toTimeString().split(' ')[0], // Formato HH:MM:SS
    }

    const fechaSel = new Date(fechaSeleccionada);
    fechaSel.setHours(0,0,0,0);

    const hoySinHora = new Date();
    hoySinHora.setHours(0,0,0,0);

    if ( //si la fecha seleccionada es hoy y la hora seleccionada ya ha pasado mandar un mensaje de advertencia
      fechaSeleccionada && 
      timeSelect &&
      hoySinHora === fechaSel &&
      Number(timeSelect) <= hoy.getTime()
    ) {
      console.log(hoy, "fecha selected: ", fechaSeleccionada);
      Swal.fire({
          icon: 'warning',
          title: '¡Hora no válida!',
          text: 'La hora seleccionada ya ha pasado. ¿Quieres agendar una cita personalizada para hoy?',
          showCancelButton: true,
          confirmButtonText: 'Sí, contactar por WhatsApp',
          cancelButtonText: 'Cancelar'
      }).then((result:any) => {
          if (result.isConfirmed) {
              const nombreUsuario = localStorage.getItem('nombre_completo');
              const mensaje = encodeURIComponent(
                  `Hola, quiero agendar una cita personalizada para hoy. Mi nombre es: ${nombreUsuario}. El servicio que requiero es: ${selectedServicio}.`
              );
              window.open(`https://wa.me/2221072513?text=${mensaje}`, '_blank');
          }
      });
      return;
    }

    try {
      if(selectedServicio === "URGENCIAS"){
        if(!selectedUrgencias){
          Swal.fire({
            icon: 'warning',
            title: '¡Selecciona un servicio de urgencias!',
            text: 'Por favor, selecciona un servicio de urgencias.',
            confirmButtonText: 'Aceptar'
          })
          return
        }
        await uploadAppointments(formDataUrgencias)
        Swal.fire({
            icon: 'success',
            title: '¡Cita registrada exitosamente!',
            text: 'Tu cita ha sido guardada.',
            confirmButtonText: 'Aceptar'
        })
        
        navigate("/history")

        return
      }
      
      if(selectedServicio === "PSICOLOGÍA"){
        await uploadAppointments(formDataPsicologia)
         // Mostrar un SweetAlert con un mensaje personalizado
        Swal.fire({
            title: 'Cita Agendada',
            text: 'Solicitud de cita agendada. En breve será contactado para agendar una hora y fecha.',
            icon: 'info',
            confirmButtonText: 'Aceptar'
        })
        navigate("/history")

        return
      }

      if (!selectedServicio || !fechaSeleccionada || !timeSelect) {
        Swal.fire({
          icon: 'warning',
          title: '¡Completa los campos!',
          text: 'Por favor, completa todos los campos.',
          confirmButtonText: 'Aceptar'
        })
        return
      }

      await uploadAppointments(formData)
       Swal.fire({
            icon: 'success',
            title: '¡Cita registrada exitosamente!',
            text: 'Tu cita ha sido guardada.',
            confirmButtonText: 'Aceptar'
        })
      navigate("/history")

      return
    } catch (error) {
      console.log("Error: ",error)
       Swal.fire({
            icon: 'error',
            title: '¡Error al registrar la cita!',
            text: 'Ocurrió un problema durante el registro. Por favor, intenta nuevamente.',
            confirmButtonText: 'Aceptar'
        });
    }
  };

  return (
    <div>
      
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
                  <SelectDinamic 
                    items={services || []} 
                    onSelectChange={setSelectedServicio}/>
                </div>
                    
                {/* Select de Urgencias */}
                {selectedServicio === "URGENCIAS" && (
                  <SelectDinamic
                    items={[
                      { id_servicio: 1,
                        nombre: "URGENCIAS - Accidente Laboral", 
                        precio: "0" },
                      { id_servicio: 2,
                        nombre: "URGENCIAS - Enfermedad General",
                        precio: "0" },
                      ]} 
                    onSelectChange={setSelectedUrgencias}
                  />
                )}

                {/* Seleccionar Fecha */}
                <div className="space-y-2">
                  <DatePicker 
                    onDateChange={setFechaSeleccionada}
                    disabled={selectedServicio === "URGENCIAS" || selectedServicio === "PSICOLOGÍA"}
                  />
                </div>

                {/* Seleccionar Horario */}
                <div 
                  className={
                  `space-y-2 ${selectedServicio === "URGENCIAS" || 
                    selectedServicio === "PSICOLOGÍA" ? 
                      "hidden" : ""}`
                  }
                >
                  <Label className="text-base font-medium">Seleccionar Horario:</Label>
                  <TimeSlotPicker 
                    onTimeChange = {setTimeSelect}
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
                <Button  
                  variant="outline" 
                  onClick={() => navigate("/home")}
                  className="hover:bg-gray-300 text-gray-800 cursor-pointer"
                >
                  Cancelar
                </Button>
                <Button 
                  className="bg-red-600 hover:bg-red-700 text-white" 
                  onClick={handleSubmit}
                >
                  <CalendarCheck className="mr-2 h-4 w-4 " />
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
