"use client"

import type React from "react"

import { useState } from "react"
import { Eye, EyeOff, Lock, Check } from "lucide-react"
import { Button } from "../../../components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card"
import { Input } from "../../../components/ui/input"
import { Label } from "../../../components/ui/laber"
import { updatePassword } from "../services/password"

export default function UpdatePassword() {
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  })
  const [errors, setErrors] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  })

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))

    // Limpiar errores al escribir
    if (errors[field as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [field]: "",
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    }
    let isValid = true

    // if (!formData.currentPassword) {
    //   newErrors.currentPassword = "La contraseña actual es requerida"
    //   isValid = false
    // }

    if (!formData.newPassword) {
      newErrors.newPassword = "La nueva contraseña es requerida"
      isValid = false
    } else if (formData.newPassword.length < 8) {
      newErrors.newPassword = "La contraseña debe tener al menos 8 caracteres"
      isValid = false
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Confirma tu nueva contraseña"
      isValid = false
    } else if (formData.newPassword !== formData.confirmPassword) {
      newErrors.confirmPassword = "Las contraseñas no coinciden"
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const formDataToSend = {
      id_emp: localStorage.getItem("id_empleado"),
      nueva_contraseña: formData.newPassword,
    }

    if (!validateForm()) {
      return
    }
 
    setIsSubmitting(true)

    setTimeout(async() => {
      try {
        const response = await updatePassword(formDataToSend)
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
          currentPassword: "",
          newPassword: "",
          confirmPassword: "",
        })
      }, 3000)
    }, 1500)
  }

  return (
    <div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 relative z-1">
        <div className="max-w-md mx-auto">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Cambiar Contraseña</h1>

          <Card className="bg-white/90 backdrop-blur-sm shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-red-600">
                <Lock className="h-5 w-5" />
                Actualizar Contraseña
              </CardTitle>
            </CardHeader>
            <CardContent>
              {isSuccess ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-medium text-green-800 mb-2">¡Contraseña actualizada!</h3>
                  <p className="text-green-600">
                    Tu contraseña ha sido actualizada correctamente. Utiliza tu nueva contraseña la próxima vez que
                    inicies sesión.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* <div className="space-y-2">
                    <Label htmlFor="currentPassword">Contraseña actual</Label>
                    <div className="relative">
                      <Input
                        id="currentPassword"
                        type={showCurrentPassword ? "text" : "password"}
                        value={formData.currentPassword}
                        onChange={(e) => handleChange("currentPassword", e.target.value)}
                        className={errors.currentPassword ? "border-red-300 pr-10" : "pr-10"}
                      />
                      <button
                        type="button"
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                      >
                        {showCurrentPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                    {errors.currentPassword && <p className="text-sm text-red-500">{errors.currentPassword}</p>}
                  </div> */}

                  <div className="space-y-2">
                    <Label htmlFor="newPassword">Nueva contraseña</Label>
                    <div className="relative">
                      <Input
                        id="newPassword"
                        type={showNewPassword ? "text" : "password"}
                        value={formData.newPassword}
                        onChange={(e) => handleChange("newPassword", e.target.value)}
                        className={errors.newPassword ? "border-red-300 pr-10" : "pr-10"}
                      />
                      <button
                        type="button"
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        onClick={() => setShowNewPassword(!showNewPassword)}
                      >
                        {showNewPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                    {errors.newPassword && <p className="text-sm text-red-500">{errors.newPassword}</p>}
                    <p className="text-xs text-gray-500">
                      La contraseña debe tener al menos 8 caracteres y contener letras y números.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirmar nueva contraseña</Label>
                    <div className="relative">
                      <Input
                        id="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        value={formData.confirmPassword}
                        onChange={(e) => handleChange("confirmPassword", e.target.value)}
                        className={errors.confirmPassword ? "border-red-300 pr-10" : "pr-10"}
                      />
                      <button
                        type="button"
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      >
                        {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                    {errors.confirmPassword && <p className="text-sm text-red-500">{errors.confirmPassword}</p>}
                  </div>

                  <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Actualizando...
                      </span>
                    ) : (
                      "Actualizar Contraseña"
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          {/* Información adicional */}
          <div className="bg-blue-50 border border-blue-100 rounded-lg p-6 text-blue-700 mt-8">
            <h3 className="font-semibold text-lg mb-3">Recomendaciones de seguridad</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Utiliza una contraseña única que no uses en otros sitios</li>
              <li>Combina letras mayúsculas, minúsculas, números y símbolos</li>
              <li>Evita información personal fácil de adivinar</li>
              <li>Cambia tu contraseña periódicamente</li>
              <li>No compartas tu contraseña con nadie</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  )
}
