import { Outlet } from "react-router-dom";
import Header from "../components/header";


export default function LayoutHeader() {
  return (
    <>
        {/* Imagen de fondo */}
        <div className="absolute inset-0 z-0">
          <img src="/fondo.avif" alt="Fondo Centro Médico" className="object-cover opacity-100 w-full h-full" />
        </div>

        {/* Overlay para mejorar legibilidad */}
        <div className="absolute inset-0 bg-white/55 z-0"></div>
        
        <Header/>
        <main>
          <Outlet/>
        </main>
    
    </>
  );
}