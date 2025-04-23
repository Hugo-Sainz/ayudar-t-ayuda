
import type React from "react"
import { Badge } from "./badge"


interface QuickActionCardProps {
  icon: React.ReactNode
  title: string
  href: string
  notification: boolean
  notificationCount?: number
}

export function QuickActionCard({ icon, title, href, notification, notificationCount }: QuickActionCardProps) {
  return (
    <a
      href={href}
      className="relative bg-white/90 backdrop-blur-sm rounded-xl border border-gray-200 p-4 flex flex-col items-center justify-center gap-3 hover:shadow-md transition-shadow text-center h-32"
    >
      {notification && (
        <Badge className="absolute top-2 right-2 h-5 w-5 flex items-center justify-center p-0 bg-red-600">
          {notificationCount}
        </Badge>
      )}
      <div className="p-2 rounded-full bg-red-50">{icon}</div>
      <span className="font-medium text-sm">{title}</span>
    </a>
  )
}
