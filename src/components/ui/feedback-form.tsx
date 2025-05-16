"use client"

import type React from "react"

import { useState } from "react"
import { Send } from "lucide-react"
import { Label } from "./laber"
import { Button } from "./button"
import { Textarea } from "./text-area"
import { uploadConplaints } from "../../app/user/services/complaints"

export function FeedbackForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [formData, setFormData] = useState({
    mensaje: "",
  })

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formDataToSend = {
      id_emp: localStorage.getItem("id_empleado"),
      descripcion: formData.mensaje,
    }

    // Simulación de envío
    setTimeout(async() => {
      try {
        const response = await uploadConplaints(formDataToSend)
        console.log("Respuesta del servidor:", response)
        setIsSubmitting(false)
        setIsSuccess(true) 
      } catch (error) {
        console.error("Error al enviar el formulario:", error)
        
      }
      // Resetear el formulario después de 3 segundos
      setTimeout(() => {
        setIsSuccess(false)
        setFormData({
          mensaje: "",
        })
      }, 3000)
    }, 1500)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {isSuccess ? (
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-green-800 mb-2">¡Gracias por tu comentario!</h3>
          <p className="text-green-600">
            Hemos recibido tu mensaje y lo revisaremos a la brevedad. Tus comentarios nos impulsan a mejorar!.
          </p>
        </div>
      ) : (
        <>
          <div className="space-y-4">

            <div>
              <Label htmlFor="mensaje" className="text-base">
                Mensaje
              </Label>
              <Textarea
                id="mensaje"
                placeholder="Por favor, cuéntanos tu queja o sugerencia..."
                className="mt-1 min-h-[150px]"
                value={formData.mensaje}
                onChange={(e) => handleChange("mensaje", e.target.value)}
                required
              />
            </div>
          </div>

          <Button type="submit" className="w-full sm:w-auto bg-red-600 hover:bg-red-700" disabled={isSubmitting}>
            {isSubmitting ? (
              <span className="flex items-center">
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Enviando...
              </span>
            ) : (
              <span className="flex items-center text-white">
                <Send className="mr-2 h-4 w-4" />
                Enviar comentario
              </span>
            )}
          </Button>
        </>
      )}
    </form>
  )
}
