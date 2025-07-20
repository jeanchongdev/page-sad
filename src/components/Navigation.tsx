"use client"

import { useState } from "react"
import { Menu, X, Home, Music, BookOpen, BarChart3, Frown } from "lucide-react"
import { Button } from "@/components/ui/button"

interface NavigationProps {
  activeSection: string
  onSectionChange: (section: string) => void
}

export default function Navigation({ activeSection, onSectionChange }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { id: "home", label: "Inicio", icon: Home },
    { id: "music", label: "Música Triste", icon: Music },
    { id: "faces", label: "Caras Rotas", icon: Frown },
    { id: "blog", label: "Diario", icon: BookOpen },
    { id: "stats", label: "Estadísticas", icon: BarChart3 },
  ]

  return (
    <>
      <nav className="fixed top-4 left-4 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="glass-effect w-12 h-12 rounded-full p-0 hover:scale-110 transition-transform"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </Button>

        {isOpen && (
          <div className="absolute top-16 left-0 glass-effect rounded-lg p-4 min-w-48 animate-fade-in">
            <div className="space-y-2">
              {menuItems.map((item) => (
                <Button
                  key={item.id}
                  variant={activeSection === item.id ? "default" : "ghost"}
                  className={`w-full justify-start text-left ${
                    activeSection === item.id
                      ? "bg-purple-600 text-white"
                      : "text-gray-300 hover:text-white hover:bg-white/10"
                  }`}
                  onClick={() => {
                    onSectionChange(item.id)
                    setIsOpen(false)
                  }}
                >
                  <item.icon className="w-4 h-4 mr-3" />
                  {item.label}
                </Button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  )
}
