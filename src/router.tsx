import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./app/Login";
import Home from "./app/user/views/Home";
import LayoutHeader from "./layouts/header";
import Appointments from "./app/user/views/Appointments";
import { PrivateRouter } from "./components/PrivateRoute";
import HistorialCitasPage from "./app/user/views/datingHistory";
import LayoutHeaderBack from "./layouts/header-back";
import Services from "./app/user/views/services";
import QuejasSugerenciasPage from "./app/user/views/complaints";
import AyudaPage from "./app/user/views/help";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Ruta pública */}
        <Route path="/" element={<Login />} />

        {/* Rutas protegidas */}
        <Route
          element={
            <PrivateRouter>
              <LayoutHeader />
            </PrivateRouter>
          }
        >
          <Route path="/home" element={<Home />} />
        </Route>
        
        <Route
          element={
            <PrivateRouter>
              <LayoutHeaderBack />
            </PrivateRouter>
          }
        >
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/history" element={<HistorialCitasPage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/complaints" element={<QuejasSugerenciasPage />} />
          <Route path="/help" element={<AyudaPage />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}
