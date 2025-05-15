import { ENV } from "../../../constants/ENV";

export const login = async (user: string, pass: string) => {

  const response = await fetch(`${ENV.DATABASE_URL}/index.php`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ correo: user, pass: pass })
  });

  return await response.json();
};
  