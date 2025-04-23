import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { Search, Bell } from "lucide-react";
import { Badge } from "./ui/badge";

export default function Header() {
    return (
        <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 relative">
              <img src="/logo.png" alt="Logo" className="object-contain" />
            </div>
            <span className="font-semibold text-red-600 text-lg hidden md:inline">Centro Médico</span>
          </div>

          <div className="hidden md:flex items-center gap-4 flex-1 max-w-md mx-4">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Buscar servicios, citas..."
                className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="relative p-2 rounded-full hover:bg-gray-100">
              <Bell className="h-5 w-5 text-gray-600" />
              <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-red-600">
                2
              </Badge>
            </button>

            <div className="flex items-center gap-3">
              <Avatar className="h-9 w-9 border-2 border-red-100">
                <AvatarImage src="/placeholder.svg?height=36&width=36" alt="Saul Mino Cabrera" />
                <AvatarFallback className="bg-red-100 text-red-800">SM</AvatarFallback>
              </Avatar>
              <div className="hidden md:block">
                <p className="text-sm font-medium">Saul Mino Cabrera</p>
                <p className="text-xs text-gray-500">Empleado</p>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
}