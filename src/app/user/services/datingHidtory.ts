import { ENV } from "../../../constants/ENV";

export const getCitas = async (id : string) => {

  const response = await fetch(`${ENV.DATABASE_URL}/verCitas.php`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id_emp: id })
  });

  return await response.json();
};

export const getCitasHistorial = async () => {

  const response = await fetch(`${ENV.DATABASE_URL}/verCitas.php`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  return await response.json();
};