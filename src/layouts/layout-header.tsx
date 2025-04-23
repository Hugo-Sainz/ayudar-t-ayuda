import { Outlet } from "react-router-dom";
import Header from "../components/header";


export default function LayaoutHeader() {
  return (
    <>
        <Header/>
        <main>
            <Outlet/>
        </main>
    
    </>
  );
}