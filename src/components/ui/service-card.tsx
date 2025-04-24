import type React from "react"
import { Card, CardContent } from "./card"


interface ServiceCardProps {
  title: string
  description: string
  icon: React.ReactNode
}

export function ServiceCard({
  title,
  description,
  icon,
}: ServiceCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow cursor-pointer bg-white/90 backdrop-blur-sm">
      <CardContent className="p-4">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 rounded-full bg-red-50 text-red-600">{icon}</div>
          <h3 className="font-medium">{title}</h3>
        </div>
        <p className="text-sm text-gray-500">{description}</p>
      </CardContent>
    </Card>
  )
}