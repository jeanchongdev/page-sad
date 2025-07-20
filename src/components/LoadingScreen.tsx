"use client"

import { useState, useEffect } from "react"
import { Heart } from "lucide-react"

interface LoadingScreenProps {
  onLoadingComplete: () => void
}

export default function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0)
  const [currentPhrase, setCurrentPhrase] = useState(0)

  const sadPhrases = [
    "Cargando tristeza...",
    "Preparando corazones rotos...",
    "Iniciando melodías melancólicas...",
    "Bienvenido a mi mundo oscuro...",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(onLoadingComplete, 1000)
          return 100
        }
        return prev + 2
      })
    }, 100)

    const phraseInterval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % sadPhrases.length)
    }, 1500)

    return () => {
      clearInterval(interval)
      clearInterval(phraseInterval)
    }
  }, [onLoadingComplete])

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <div className="text-center space-y-8">
        <div className="relative">
          <Heart className="w-20 h-20 text-red-600 mx-auto animate-pulse-heart broken-heart" fill="currentColor" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-1 h-8 bg-black transform rotate-45"></div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-brush text-white animate-fade-in">{sadPhrases[currentPhrase]}</h2>

          <div className="w-64 h-2 bg-gray-800 rounded-full mx-auto overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-purple-600 to-red-600 transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          <p className="text-gray-400 font-elegant">{progress}%</p>
        </div>
      </div>
    </div>
  )
}
