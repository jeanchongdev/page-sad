"use client"

import { useState } from "react"
import { Heart } from "lucide-react"
import ParticlesBackground from "./ParticlesBackground"
import LoadingScreen from "./LoadingScreen"
import Navigation from "./Navigation"
import MusicPlayer from "./MusicPlayer"
import BrokenFaces from "./BrokenFaces"
import Blog from "./Blog"
import Statistics from "./Statistics"

// Datos de ejemplo para las canciones (reemplaza con tus URLs reales)
const sampleSongs = [
  {
    id: 1,
    title: "Corazón Roto",
    artist: "Jinshirō Daikō",
    url: "https://github.com/ryuseishouda/audio/raw/refs/heads/main/97-%F0%9D%98%BC%F0%9D%99%9C%F0%9D%99%9C%F0%9D%99%A7%F0%9D%99%9A%F0%9D%99%A8%F0%9D%99%A8%F0%9D%99%9E%F0%9D%99%AB%F0%9D%99%9A%20%F0%9D%99%A5%F0%9D%99%9D%F0%9D%99%A4%F0%9D%99%A3%F0%9D%99%A0%F0%9D%99%A8%20%F0%9D%99%9B%F0%9D%99%A4%F0%9D%99%A7%20%F0%9D%99%A9%F0%9D%99%A7%F0%9D%99%96%F0%9D%99%9E%F0%9D%99%A3%F0%9D%99%9E%F0%9D%99%A3%F0%9D%99%9C.mp3", // Reemplaza con tu URL real
    duration: 240,
  },
  {
    id: 2,
    title: "Lágrimas Nocturnas",
    artist: "Jinshirō Daikō",
    url: "/placeholder-audio.mp3", // Reemplaza con tu URL real
    duration: 180,
  },
  {
    id: 3,
    title: "Soledad Infinita",
    artist: "Jinshirō Daikō",
    url: "/placeholder-audio.mp3", // Reemplaza con tu URL real
    duration: 200,
  },
]

export default function SadApp() {
  const [isLoading, setIsLoading] = useState(true)
  const [activeSection, setActiveSection] = useState("home")
  const [musicTime, setMusicTime] = useState(0)
  const [blogPostCount, setBlogPostCount] = useState(0)

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  const renderContent = () => {
    switch (activeSection) {
      case "home":
        return (
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-6xl md:text-8xl font-brush text-gray-300 animate-fade-in">Jinshirō Daikō</h1>
              <p className="text-2xl md:text-3xl text-gray-300 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                神志郎 大晃
              </p>
              <div
                className="w-32 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto animate-fade-in"
                style={{ animationDelay: "0.4s" }}
              ></div>
            </div>

            <div
              className="glass-effect rounded-lg p-8 max-w-2xl mx-auto animate-fade-in"
              style={{ animationDelay: "0.6s" }}
            >
              <Heart
                className="w-16 h-16 text-red-500 mx-auto mb-4 broken-heart animate-pulse-heart"
                fill="currentColor"
              />
              <p className="text-lg text-gray-300 font-elegant leading-relaxed">
                Bienvenido a mi mundo de melancolía, donde cada nota cuenta una historia de corazones rotos y cada
                palabra refleja la profundidad del alma humana. Este es mi refugio digital, mi santuario de tristeza
                hermosa.
              </p>
            </div>
          </div>
        )

      case "music":
        return (
          <div className="space-y-6">
            <h2 className="text-4xl font-brush text-white text-center mb-8">Melodías del Alma Rota</h2>
            <div className="glass-effect rounded-lg p-8">
              <p className="text-gray-300 text-center mb-6 font-elegant">
                Aquí encontrarás las canciones que acompañan mis noches más oscuras. Cada melodía es un pedazo de mi
                corazón convertido en sonido.
              </p>
              <div className="text-center text-gray-400">
                <p>El reproductor flotante aparecerá automáticamente.</p>
                <p className="text-sm mt-2">Puedes moverlo y redimensionarlo a tu gusto.</p>
              </div>
            </div>
          </div>
        )

      case "faces":
        return (
          <div className="space-y-6">
            <h2 className="text-4xl font-brush text-white text-center mb-8">Rostros del Dolor</h2>
            <BrokenFaces />
            <div className="glass-effect rounded-lg p-6 text-center">
              <p className="text-gray-300 font-elegant">
                Cada expresión cuenta una historia diferente de tristeza. Observa cómo cambian, como cambian nuestros
                sentimientos...
              </p>
            </div>
          </div>
        )

      case "blog":
        return <Blog onPostCountChange={setBlogPostCount} />

      case "stats":
        return (
          <div className="space-y-6">
            <h2 className="text-4xl font-brush text-white text-center mb-8">Métricas de la Melancolía</h2>
            <Statistics musicTime={musicTime} blogPosts={blogPostCount} />
          </div>
        )

      default:
        return null
    }
  }

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />
  }

  return (
    <div className="min-h-screen sad-gradient relative overflow-hidden">
      <ParticlesBackground />

      <Navigation activeSection={activeSection} onSectionChange={setActiveSection} />

      <MusicPlayer songs={sampleSongs} onTimeUpdate={(time) => setMusicTime((prev) => prev + 1)} />

      <main className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">{renderContent()}</div>
      </main>

      {/* Efectos adicionales */}
      <div className="fixed bottom-4 right-4 text-gray-500 text-sm font-elegant">
        <p>© 2024 Jinshirō Daikō</p>
      </div>
    </div>
  )
}
