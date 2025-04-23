import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./views/Login";
import Home from "./views/Home";
import LayaoutHeader from "./layouts/layout-header";

export default function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />}/>
                <Route element={<LayaoutHeader />}>
                    <Route path="/home" element={<Home />}/>
                
                </Route>
        
            </Routes>
        </BrowserRouter>
    )
}