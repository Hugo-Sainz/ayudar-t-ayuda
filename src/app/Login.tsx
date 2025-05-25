import LoginCard from '../components/LoginCard'
import { useNavigate } from 'react-router-dom';
import { login } from './user/services/authServices';
import { setLocalStorage } from './user/services/localStorage';
import { useState } from 'react';
import { Loader2 } from 'lucide-react';

function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const user = formData.get("user") as string;
    const password = formData.get("password") as string;
  
    try {
      const response = await login(user, password);
      if (response.Status === "Success") {
        const token = "succes"
        setLocalStorage(response, token)
        
        setLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 3000));
        setLoading(false);
        navigate("/home");
        
      } else {
        alert("Usuario o contraseña incorrectos");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("Error durante el inicio de sesión. Por favor, inténtelo de nuevo más tarde.");
    }
  };


  return (
    <>
    <div className='bg-[url("/fondo.avif")] bg-cover bg-center h-screen w-screen flex justify-center items-center z-500'>
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm md:w-80 lg:w-[400px]">
        <div className="text-center">
          <img
            alt="Logo Cruz Roja Mexicana"
            src="/logo.png"
            className="mx-auto h-40 w-auto"
          />
          <h2 className="mt-6 text-2xl font-bold tracking-tight text-gray-900">
            Inicio de Sesión
          </h2>
        </div>
        <div className='flex flex-col items-center justify-center'>
          {loading ? (
            <Loader2 className="w-10 h-10 animate-spin text-red-600" />
          ) : (
            <p className="mt-2 text-sm text-gray-600">
              Inicia sesión para acceder a tu cuenta
            </p>
          )}

        </div>
        <div className="mt-8">
          <LoginCard onSubmit={handleSubmit} />
        </div>
      </div>
    </div>


    </div>
    </>
  )
}

export default Login
