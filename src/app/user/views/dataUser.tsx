import {  Mail, Phone, MapPin, Calendar, Key } from "lucide-react"
import { Button } from "../../../components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "../../../components/ui/avatar"
import { useNavigate } from "react-router-dom"

const userData = {
  nombre: localStorage.getItem("nombre_completo") || "",
  email: localStorage.getItem("correo") || "",
  telefono: localStorage.getItem("numero_telefonico") || "",
  direccion: localStorage.getItem("direccion") || "",
  fechaNacimiento: localStorage.getItem("fecha_nacimiento") || "",
  lugarNacimiento: localStorage.getItem("lugar_nacimiento") || "Desconocido",
  empresa: localStorage.getItem("empresa") || "",
  genero: localStorage.getItem("sexo") || "",
  puesto: localStorage.getItem("puesto") || "", 
  idEmpleado: localStorage.getItem("id_empleado") || "",
}

export default function DataUser() {
    const navigate = useNavigate()

  return (
    <div className="min-h-screen relative">

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 relative z-1">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
            <h1 className="text-2xl font-bold text-gray-900">Mi Perfil</h1>
            <div className="flex gap-3">
              <Button 
                    variant="outline" 
                    className="text-red-600 border-red-200 hover:bg-red-100 hover:text-red-700 bg-white cursor-pointer"
                    onClick={() => {navigate("/updatePassword")}}
                >
                  <Key className="mr-2 h-4 w-4" />
                  Cambiar Contraseña
                </Button>
            </div>
          </div>

          <Card className="bg-white/90 backdrop-blur-sm shadow-sm mb-8">
            <CardHeader className="pb-0">
              <CardTitle className="text-lg text-gray-700">Información Personal</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex flex-col items-center">
                  <Avatar className="h-32 w-32 border-4 border-red-100">
                    <AvatarImage src="/placeholder.svg?height=128&width=128" alt={userData.nombre} />
                    <AvatarFallback className="text-3xl bg-red-100 text-red-800">
                      {userData.nombre
                        .split(" ")
                        .map((name) => name[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <p className="mt-4 font-medium text-lg">{userData.nombre}</p>
                  <p className="text-sm text-gray-500">Empleado</p>
                </div>

                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mt-4 md:mt-0">
                  <div className="flex items-start gap-3">
                    <div className="p-1.5 rounded-full bg-red-50 text-red-600 mt-0.5">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Correo electrónico</p>
                      <p className="font-medium">{userData.email}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-1.5 rounded-full bg-red-50 text-red-600 mt-0.5">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Teléfono</p>
                      <p className="font-medium">{userData.telefono}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-1.5 rounded-full bg-red-50 text-red-600 mt-0.5">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Dirección</p>
                      <p className="font-medium">{userData.direccion}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-1.5 rounded-full bg-red-50 text-red-600 mt-0.5">
                      <Calendar className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Fecha de nacimiento</p>
                      <p className="font-medium">{userData.fechaNacimiento}</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/90 backdrop-blur-sm shadow-sm">
            <CardHeader className="pb-0">
              <CardTitle className="text-lg text-gray-700">Información Adicional</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <tbody className="divide-y divide-gray-100">
                    <tr>
                      <td className="px-4 py-3 text-sm font-medium text-gray-500 bg-gray-50 w-1/3">Lugar de nacimiento</td>
                      <td className="px-4 py-3">{userData.lugarNacimiento}</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm font-medium text-gray-500 bg-gray-50">
                        Empresa
                      </td>
                      <td className="px-4 py-3">{userData.empresa}</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm font-medium text-gray-500 bg-gray-50">Género</td>
                      <td className="px-4 py-3">{userData.genero}</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm font-medium text-gray-500 bg-gray-50">Puesto</td>
                      <td className="px-4 py-3">{userData.puesto}</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm font-medium text-gray-500 bg-gray-50">ID Empleado</td>
                      <td className="px-4 py-3">{userData.idEmpleado}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
