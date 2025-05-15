"use client"

import type React from "react"
import { MessageSquare } from "lucide-react"
import { Button } from "./button"
import { Card, CardContent, CardTitle } from "./card"

interface ContactItem {
  icon: React.ReactNode
  label: string
  value: string
  isEmail?: boolean
}

interface ContactCardProps {
  title: string
  icon: React.ReactNode
  items: ContactItem[]
  whatsappNumber: string
  whatsappMessage: string
  isEmergency?: boolean
}

export function ContactCard({
  title,
  icon,
  items,
  whatsappNumber,
  whatsappMessage,
  isEmergency = false,
}: ContactCardProps) {
  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(whatsappMessage)
    window.open(`https://wa.me/${whatsappNumber.replace(/\D/g, "")}?text=${encodedMessage}`, "_blank")
  }

  return (
    <Card
      className={`overflow-hidden ${isEmergency ? "border-red-200" : "border-gray-200"} bg-white/90 backdrop-blur-sm`}
    >
      <div className={`${isEmergency ? "bg-red-600" : "bg-red-600"} py-3 px-4`}>
        <CardTitle className="flex items-center gap-2 text-white">
          {icon}
          {title}
        </CardTitle>
      </div>
      <CardContent className="p-6">
        <ul className="space-y-4">
          {items.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="p-1.5 rounded-full bg-red-50 text-red-600 mt-0.5">{item.icon}</div>
              <div>
                <p className="text-sm font-medium text-gray-500">{item.label}</p>
                {item.isEmail ? (
                  <a href={`mailto:${item.value}`} className="text-blue-600 hover:underline">
                    {item.value}
                  </a>
                ) : (
                  <p className="font-medium">{item.value}</p>
                )}
              </div>
            </li>
          ))}
        </ul>

        <Button
          onClick={handleWhatsAppClick}
          className={`mt-6 w-full text-white ${
            isEmergency ? "bg-green-600 hover:bg-green-700" : "bg-green-600 hover:bg-green-700"
          }`}
        >
          <MessageSquare className="mr-2 h-4 w-4" />
          Contactar por WhatsApp
        </Button>
      </CardContent>
    </Card>
  )
}
