import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./views/Login";
import Datos from "./views/Datos";

export default function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />}></Route>
                <Route path="/datos" element={<Datos />}></Route>
                
            </Routes>
        </BrowserRouter>
    )
}