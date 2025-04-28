"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { Button } from "./button"
import { cn } from "../../lib/utils"
import { useMediaQuery } from "../../hooks/use-media-query"

interface GalleryImage {
  url: string
  alt: string
  titulo?: string
}

interface ServiceGalleryProps {
  images: GalleryImage[]
}

export function ServiceGallery({ images }: ServiceGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const isMobile = useMediaQuery("(max-width: 768px)")

  const goToPrevious = () => {
    const isFirstImage = currentIndex === 0
    const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const goToNext = () => {
    const isLastImage = currentIndex === images.length - 1
    const newIndex = isLastImage ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  const goToImage = (index: number) => {
    setCurrentIndex(index)
  }

  const openModal = () => {
    if (isMobile) {
      setIsModalOpen(true)
      // Prevenir el scroll del body cuando el modal está abierto
      document.body.style.overflow = "hidden"
    }
  }

  const closeModal = () => {
    setIsModalOpen(false)
    // Restaurar el scroll del body
    document.body.style.overflow = "auto"
  }

  if (!images || images.length === 0) {
    return null
  }

  return (
    <>
      <div className="relative bg-white/90 backdrop-blur-sm rounded-lg overflow-hidden shadow-sm border border-gray-100">
        <div className="relative aspect-[468/263] w-full cursor-pointer" onClick={openModal}>
          <img
            src={images[currentIndex].url || "/placeholder.svg"}
            alt={images[currentIndex].alt}
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 936px"
          />

          {/* Overlay para el título */}
          {images[currentIndex].titulo && (
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <h3 className="text-white font-medium text-lg">{images[currentIndex].titulo}</h3>
            </div>
          )}

          {/* Controles de navegación */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full h-10 w-10"
            onClick={(e) => {
              e.stopPropagation()
              goToPrevious()
            }}
            aria-label="Imagen anterior"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full h-10 w-10"
            onClick={(e) => {
              e.stopPropagation()
              goToNext()
            }}
            aria-label="Imagen siguiente"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>

        {/* Indicadores de imagen */}
        {images.length > 1 && (
          <div className="flex justify-center gap-2 p-4">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToImage(index)}
                className={cn(
                  "h-2 rounded-full transition-all",
                  index === currentIndex ? "w-6 bg-red-600" : "w-2 bg-gray-300",
                )}
                aria-label={`Ir a imagen ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Modal para vista ampliada en móvil */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex flex-col">
          <div className="flex justify-end p-4">
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/20 rounded-full"
              onClick={closeModal}
              aria-label="Cerrar vista ampliada"
            >
              <X className="h-6 w-6" />
            </Button>
          </div>

          <div className="flex-1 flex items-center justify-center relative">
            <div className="felx w-full h-full items-center">
              <img
                src={images[currentIndex].url || "/placeholder.svg"}
                alt={images[currentIndex].alt}
                className="object-contain"
                sizes="100vw"
              />
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full h-10 w-10"
              onClick={goToPrevious}
              aria-label="Imagen anterior"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full h-10 w-10"
              onClick={goToNext}
              aria-label="Imagen siguiente"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          {/* Título de la imagen */}
          {images[currentIndex].titulo && (
            <div className="p-4 bg-black/50">
              <h3 className="text-white font-medium text-lg text-center">{images[currentIndex].titulo}</h3>
            </div>
          )}

          {/* Indicadores de imagen */}
          {images.length > 1 && (
            <div className="flex justify-center gap-2 p-4">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToImage(index)}
                  className={cn(
                    "h-2 rounded-full transition-all",
                    index === currentIndex ? "w-6 bg-white" : "w-2 bg-white/50",
                  )}
                  aria-label={`Ir a imagen ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </>
  )
}
