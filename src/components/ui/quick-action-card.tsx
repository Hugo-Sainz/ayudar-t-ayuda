
import type React from "react"
import { Badge } from "./badge"
import { useNavigate } from "react-router-dom"
import { clearLocalStorage } from "../../services/localStorage"


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
  notification,
  notificationCount,
  exit
}: QuickActionCardProps) {

  const navigate = useNavigate()

  const handleClick = () => {
    if (exit === "true") {
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
      {notification && (
        <Badge className="absolute top-2 right-2 h-5 w-5 flex items-center justify-center p-0 bg-red-600">
          {notificationCount}
        </Badge>
      )}
      <div className="p-2 rounded-full bg-red-50">{icon}</div>
      <span className="font-medium text-sm">{title}</span>
    </div>
  )
}
