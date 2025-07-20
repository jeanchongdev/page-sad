"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Play, Pause, SkipBack, SkipForward, Volume2, Maximize2, Minimize2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"

interface Song {
  id: number
  title: string
  artist: string
  url: string
  duration: number
}

interface MusicPlayerProps {
  songs: Song[]
  onTimeUpdate?: (time: number) => void
}

export default function MusicPlayer({ songs, onTimeUpdate }: MusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentSong, setCurrentSong] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [volume, setVolume] = useState(50)
  const [isExpanded, setIsExpanded] = useState(false)
  const [position, setPosition] = useState({ x: 20, y: 20 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 })

  const audioRef = useRef<HTMLAudioElement>(null)
  const playerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const updateTime = () => {
      setCurrentTime(audio.currentTime)
      onTimeUpdate?.(audio.currentTime)
    }

    const handleEnded = () => {
      nextSong()
    }

    audio.addEventListener("timeupdate", updateTime)
    audio.addEventListener("ended", handleEnded)

    return () => {
      audio.removeEventListener("timeupdate", updateTime)
      audio.removeEventListener("ended", handleEnded)
    }
  }, [currentSong])

  const togglePlay = () => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      audio.pause()
    } else {
      audio.play()
    }
    setIsPlaying(!isPlaying)
  }

  const nextSong = () => {
    setCurrentSong((prev) => (prev + 1) % songs.length)
    setCurrentTime(0)
  }

  const prevSong = () => {
    setCurrentSong((prev) => (prev - 1 + songs.length) % songs.length)
    setCurrentTime(0)
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    const rect = playerRef.current?.getBoundingClientRect()
    if (rect) {
      setDragOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    }
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - dragOffset.x,
        y: e.clientY - dragOffset.y,
      })
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove)
      document.addEventListener("mouseup", handleMouseUp)
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseup", handleMouseUp)
    }
  }, [isDragging, dragOffset])

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, "0")}`
  }

  if (songs.length === 0) return null

  const currentSongData = songs[currentSong]

  return (
    <>
      <audio ref={audioRef} src={currentSongData?.url} volume={volume / 100} />

      <div
        ref={playerRef}
        className={`fixed z-40 glass-effect rounded-lg transition-all duration-300 ${
          isExpanded ? "w-80 h-64" : "w-64 h-20"
        } ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: isDragging ? "scale(1.05)" : "scale(1)",
        }}
        onMouseDown={handleMouseDown}
      >
        <div className="p-4 h-full flex flex-col">
          <div className="flex items-center justify-between mb-2">
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-brush text-white truncate">{currentSongData?.title}</h3>
              <p className="text-xs text-gray-400 truncate">{currentSongData?.artist}</p>
            </div>
            <Button variant="ghost" size="sm" onClick={() => setIsExpanded(!isExpanded)} className="ml-2">
              {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </Button>
          </div>

          <div className="flex items-center space-x-2 mb-2">
            <Button variant="ghost" size="sm" onClick={prevSong}>
              <SkipBack className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" onClick={togglePlay}>
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </Button>
            <Button variant="ghost" size="sm" onClick={nextSong}>
              <SkipForward className="w-4 h-4" />
            </Button>
          </div>

          {isExpanded && (
            <div className="flex-1 space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span>{formatTime(currentTime)}</span>
                  <span>{formatTime(currentSongData?.duration || 0)}</span>
                </div>
                <Slider value={[currentTime]} max={currentSongData?.duration || 100} step={1} className="w-full" />
              </div>

              <div className="flex items-center space-x-2">
                <Volume2 className="w-4 h-4 text-gray-400" />
                <Slider
                  value={[volume]}
                  onValueChange={(value) => setVolume(value[0])}
                  max={100}
                  step={1}
                  className="flex-1"
                />
              </div>

              <div className="space-y-1 max-h-20 overflow-y-auto">
                {songs.map((song, index) => (
                  <div
                    key={song.id}
                    className={`text-xs p-1 rounded cursor-pointer transition-colors ${
                      index === currentSong ? "bg-purple-600 text-white" : "text-gray-400 hover:text-white"
                    }`}
                    onClick={() => setCurrentSong(index)}
                  >
                    {song.title} - {song.artist}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
