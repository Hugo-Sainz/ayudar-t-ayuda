import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./app/user/views/Login";
import Home from "./app/user/views/Home";
import LayoutHeader from "./layouts/layout-header";
import Appointments from "./app/user/views/Appointments";
import { PrivateRouter } from "./components/PrivateRoute";

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
          <Route path="/appointments" element={<Appointments />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
