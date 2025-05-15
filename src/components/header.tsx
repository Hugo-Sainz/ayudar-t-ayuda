import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
/* 
**import { Search, Bell, Filter } from "lucide-react"; 
**opcional para agregar barra de busqueda 
*/
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const username = localStorage.getItem("nombre_completo");
  const navigate = useNavigate()

    return (
        <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 relative">
              <img src="/logo.png" alt="Logo" className="object-contain" />
            </div>
            <span className="font-semibold text-red-600 text-lg hidden md:inline">Centro Médico</span>
          </div>

          {/* <div className="hidden md:flex items-center gap-4 flex-1 max-w-md mx-4">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Buscar servicios, citas..."
                className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
              />
            </div>
          </div> */}

          <div className="flex items-center gap-3">
            {/* <button className="relative p-2 rounded-full hover:bg-gray-100">
              <Bell className="h-5 w-5 text-gray-600" />
              <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-red-600">
                2
              </Badge>
            </button> */}
            <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    {/* <Button variant="outline" size="icon">
                      <Filter className="h-4 w-4" />
                    </Button> */}
                    <div className="flex items-center gap-3 cursor-pointer">
                      <Avatar className="h-9 w-9 border-2 border-red-100 rounded-full bg-red-100">
                        <AvatarImage src="/placeholder.svg?height=36&width=36" alt="Saul Mino Cabrera" />
                        <AvatarFallback className="bg-red-100 text-red-800 rounded-full flex items-center justify-center">
                          <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="24" 
                            height="24" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            stroke-width="2" 
                            stroke-linecap="round" 
                            stroke-linejoin="round"
                          >
                            <path 
                              d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"
                            />
                            <circle 
                              cx="12" 
                              cy="7" 
                              r="4"
                            />
                          </svg>
                        </AvatarFallback>
                      </Avatar>
                      <div className="hidden md:block">
                        <p className="text-sm font-medium">{username}</p>
                        <p className="text-xs text-gray-500">Empleado</p>
                      </div>
                    </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="bg-white shadow-lg rounded-md p-2">
                    <DropdownMenuItem 
                      onClick={() => navigate("/dataUser")}>
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="24" 
                        height="24" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        stroke-width="2" 
                        stroke-linecap="round" 
                        stroke-linejoin="round"
                        className="mr-2"
                      >
                        <path d="M2 21a8 8 0 0 1 13.292-6"/>
                        <circle cx="10" cy="8" r="5"/>
                        <path d="m16 19 2 2 4-4"/>
                      </svg>
                      Información Personal
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => navigate("/updatePassword")}>
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="24" 
                        height="24" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        stroke-width="2" 
                        stroke-linecap="round" 
                        stroke-linejoin="round" 
                        className="mr-2"
                      >
                        <path 
                          d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>
                        <path d="M6.376 18.91a6 6 0 0 1 11.249.003"/>
                        <circle cx="12" cy="11" r="4"/>
                      </svg>
                      Cambiar Contraseña
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

            
          </div>
        </div>
      </header>
    )
}