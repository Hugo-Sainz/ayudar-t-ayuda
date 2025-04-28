import { ArrowLeft } from "lucide-react";
import { Button } from "./button";

export default function HeaderBack(){
    return (
        <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-3 flex items-center">
          <a href="/home" className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="mr-2">
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div className="h-10 w-10 relative">
              {
                 <img src="/logo.png" alt="Logo"  className="object-contain" />
              }
            </div>
            <span className="font-semibold text-red-600 text-lg hidden md:inline">Volver</span>
          </a>
        </div>
      </header>
    )
}