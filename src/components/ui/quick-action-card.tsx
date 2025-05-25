
import type React from "react"
import { useNavigate } from "react-router-dom"
import { clearLocalStorage } from "../../app/user/services/localStorage"
import { useState } from "react"
import { Loader2 } from "lucide-react"


interface QuickActionCardProps {
  icon: React.ReactNode
  title: string
  href: string
  notification: boolean
  notificationCount?: number
  exit: "true" | "false"
}



export function QuickActionCard({
  icon,
  title,
  href,
  exit
}: QuickActionCardProps) {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false);
  
  const handleClick = async() => {
    if (exit === "true") {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setLoading(false);
      
      clearLocalStorage();
      navigate("/");        
      return;             
    }

    if (href) {
      navigate(href);
    } else {
      console.log("No navigate function provided");
    }
  };

  

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer relative bg-white/90 backdrop-blur-sm rounded-xl border border-gray-200 p-4 flex flex-col items-center justify-center gap-3 hover:shadow-md transition-shadow text-center h-32"
    >
      {loading ? (
        <>
          <Loader2 className="w-10 h-10 animate-spin text-red-600" />
          <p>Cerrando sesión  ...</p>
        </>
      ) : (
        <>
          <div className="p-2 rounded-full bg-red-50">{icon}</div>
          <span className="font-medium text-sm">{title}</span>
        </>
      )}
    </div>
  )
}
