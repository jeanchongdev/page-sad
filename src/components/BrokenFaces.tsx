"use client"

import { useState, useEffect } from "react"
import { Frown, Meh, Angry } from "lucide-react"

const brokenFaces = [
  { icon: Frown, message: "Corazón destrozado...", color: "text-red-500" },
  { icon: Meh, message: "Vacío interior...", color: "text-gray-500" },
  { icon: Angry, message: "Dolor profundo...", color: "text-purple-500" },
]

export default function BrokenFaces() {
  const [currentFace, setCurrentFace] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false)
      setTimeout(() => {
        setCurrentFace((prev) => (prev + 1) % brokenFaces.length)
        setIsVisible(true)
      }, 500)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const CurrentIcon = brokenFaces[currentFace].icon

  return (
    <div className="glass-effect rounded-lg p-8 text-center">
      <div className={`transition-all duration-500 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}>
        <CurrentIcon className={`w-24 h-24 mx-auto mb-4 ${brokenFaces[currentFace].color} animate-float`} />
        <p className="text-lg font-brush text-white mb-2">{brokenFaces[currentFace].message}</p>
        <div className="w-16 h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto opacity-50"></div>
      </div>
    </div>
  )
}
