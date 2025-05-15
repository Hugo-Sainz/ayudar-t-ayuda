import { Outlet } from "react-router-dom";
import HeaderBack from "../components/ui/header-back";

export default function LayoutHeaderBack(){
    return(
        <>
            {/* Fondo Fijo */}
            <div 
                className="absolute inset-0 z-0 bg-[url('/fondo.avif')] bg-cover bg-center bg-fixed"
            ></div>

            {/* Overlay para mejorar legibilidad */}
            <div className="absolute inset-0 bg-white/55 z-0"></div>
            <HeaderBack/>
            <main>
                <Outlet/>
            </main>
        </>
    )
}