"use client"

import { useState, useEffect } from "react"
import { Clock, Music, BookOpen, Heart } from "lucide-react"

interface StatisticsProps {
  musicTime: number
  blogPosts: number
}

export default function Statistics({ musicTime, blogPosts }: StatisticsProps) {
  const [timeOnPage, setTimeOnPage] = useState(0)
  const [startTime] = useState(Date.now())

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeOnPage(Math.floor((Date.now() - startTime) / 1000))
    }, 1000)

    return () => clearInterval(interval)
  }, [startTime])

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const secs = seconds % 60

    if (hours > 0) {
      return `${hours}h ${minutes}m ${secs}s`
    }
    return `${minutes}m ${secs}s`
  }

  const stats = [
    {
      icon: Clock,
      label: "Tiempo en página",
      value: formatTime(timeOnPage),
      color: "text-blue-400",
    },
    {
      icon: Music,
      label: "Tiempo escuchando",
      value: formatTime(Math.floor(musicTime)),
      color: "text-purple-400",
    },
    {
      icon: BookOpen,
      label: "Posts escritos",
      value: blogPosts.toString(),
      color: "text-green-400",
    },
    {
      icon: Heart,
      label: "Corazones rotos",
      value: "∞",
      color: "text-red-400",
    },
  ]

  return (
    <div className="glass-effect rounded-lg p-6">
      <h2 className="text-2xl font-brush text-white mb-6 text-center">Estadísticas Melancólicas</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-black/30 rounded-lg p-4 text-center hover:bg-black/50 transition-all duration-300 animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <stat.icon className={`w-8 h-8 mx-auto mb-2 ${stat.color} animate-float`} />
            <p className="text-sm text-gray-400 mb-1">{stat.label}</p>
            <p className={`text-xl font-bold ${stat.color}`}>{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
