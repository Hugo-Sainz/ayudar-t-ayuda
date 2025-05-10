import { ENV } from "../../../constants/ENV";

export const getServices = async () => {

  const response = await fetch(`${ENV.DATABASE_URL}/Backend/servicios.php`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  return await response.json();
};

export const getHorarios = async (service:string, date:string)=>{

  const response = await fetch(`${ENV.DATABASE_URL}/Backend/cita.php`,{
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ servicio: service, dia: date })
  });
  return await response.json()
}