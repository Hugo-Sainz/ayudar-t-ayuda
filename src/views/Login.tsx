import { useState } from 'react'
import LoginCard from '../components/LoginCard'

function Login() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='bg-[url("/fondo.avif")] bg-cover bg-center h-screen w-screen flex justify-center items-center'>
      <div>
        <LoginCard/>
      </div>
    </div>
    </>
  )
}

export default Login
