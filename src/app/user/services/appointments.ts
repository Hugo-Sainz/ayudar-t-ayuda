import { ENV } from "../../../constants/ENV";

export const getServices = async () => {

  const response = await fetch(`${ENV.DATABASE_URL}/servicios.php`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  return await response.json();
};

export const getHorarios = async (service:string, date:string)=>{

  const response = await fetch(`${ENV.DATABASE_URL}/cita.php`,{
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ servicio: service, dia: date })
  });
  return await response.json()
}

export const uploadAppointments = async (citaData:any) => {
  const response = await fetch(`${ENV.DATABASE_URL}/cita_agenda.php`,{
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(citaData)
  })
  .then(response => response.text())
  .then(data => {
      console.log(data); // Mostrar la respuesta del servidor
  })
  .catch(error => {
      console.error('Error:', error);
  });
  return response
}