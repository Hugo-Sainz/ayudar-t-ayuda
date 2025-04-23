import LoginCard from '../components/LoginCard'
import { useNavigate } from 'react-router-dom';
import { login } from '../services/authServices';

function Login() {
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const user = formData.get("user") as string;
    const password = formData.get("password") as string;
  
    try {
      const response = await login(user, password);
      if (response.Status === "Success") {
        console.log("Login successful:", response);
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
    <div className='bg-[url("/fondo.avif")] bg-cover bg-center h-screen w-screen flex justify-center items-center'>
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
