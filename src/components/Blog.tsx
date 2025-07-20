"use client"

import { useState, useEffect } from "react"
import { Plus, Edit, Trash2, Save, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

interface BlogPost {
  id: number
  title: string
  content: string
  date: string
}

interface BlogProps {
  onPostCountChange: (count: number) => void
}

export default function Blog({ onPostCountChange }: BlogProps) {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [isWriting, setIsWriting] = useState(false)
  const [editingId, setEditingId] = useState<number | null>(null)
  const [newPost, setNewPost] = useState({ title: "", content: "" })

  useEffect(() => {
    // Cargar posts del localStorage
    const savedPosts = localStorage.getItem("sadBlogPosts")
    if (savedPosts) {
      const parsedPosts = JSON.parse(savedPosts)
      setPosts(parsedPosts)
      onPostCountChange(parsedPosts.length)
    }
  }, [onPostCountChange])

  const savePost = () => {
    if (!newPost.title.trim() || !newPost.content.trim()) return

    const post: BlogPost = {
      id: Date.now(),
      title: newPost.title,
      content: newPost.content,
      date: new Date().toLocaleDateString("es-ES"),
    }

    const updatedPosts = [post, ...posts]
    setPosts(updatedPosts)
    localStorage.setItem("sadBlogPosts", JSON.stringify(updatedPosts))
    onPostCountChange(updatedPosts.length)

    setNewPost({ title: "", content: "" })
    setIsWriting(false)
  }

  const deletePost = (id: number) => {
    const updatedPosts = posts.filter((post) => post.id !== id)
    setPosts(updatedPosts)
    localStorage.setItem("sadBlogPosts", JSON.stringify(updatedPosts))
    onPostCountChange(updatedPosts.length)
  }

  const startEdit = (post: BlogPost) => {
    setEditingId(post.id)
    setNewPost({ title: post.title, content: post.content })
  }

  const saveEdit = () => {
    if (!newPost.title.trim() || !newPost.content.trim()) return

    const updatedPosts = posts.map((post) =>
      post.id === editingId ? { ...post, title: newPost.title, content: newPost.content } : post,
    )

    setPosts(updatedPosts)
    localStorage.setItem("sadBlogPosts", JSON.stringify(updatedPosts))

    setEditingId(null)
    setNewPost({ title: "", content: "" })
  }

  const cancelEdit = () => {
    setEditingId(null)
    setIsWriting(false)
    setNewPost({ title: "", content: "" })
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-brush text-white">Diario Melancólico</h2>
        <Button
          onClick={() => setIsWriting(true)}
          className="bg-purple-600 hover:bg-purple-700 text-white"
          disabled={isWriting || editingId !== null}
        >
          <Plus className="w-4 h-4 mr-2" />
          Escribir
        </Button>
      </div>

      {(isWriting || editingId !== null) && (
        <div className="glass-effect rounded-lg p-6 animate-fade-in">
          <div className="space-y-4">
            <Input
              placeholder="Título de tu tristeza..."
              value={newPost.title}
              onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
              className="bg-black/30 border-gray-600 text-white placeholder-gray-400"
            />
            <Textarea
              placeholder="Escribe tus pensamientos más profundos..."
              value={newPost.content}
              onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
              className="bg-black/30 border-gray-600 text-white placeholder-gray-400 min-h-32"
            />
            <div className="flex space-x-2">
              <Button onClick={editingId ? saveEdit : savePost} className="bg-green-600 hover:bg-green-700">
                <Save className="w-4 h-4 mr-2" />
                Guardar
              </Button>
              <Button
                onClick={cancelEdit}
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent"
              >
                <X className="w-4 h-4 mr-2" />
                Cancelar
              </Button>
            </div>
          </div>
        </div>
      )}

      <div className="space-y-4">
        {posts.length === 0 ? (
          <div className="glass-effect rounded-lg p-8 text-center">
            <p className="text-gray-400 font-elegant text-lg">Aún no has escrito ningún pensamiento...</p>
          </div>
        ) : (
          posts.map((post, index) => (
            <div
              key={post.id}
              className="glass-effect rounded-lg p-6 blog-card animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-brush text-white mb-2">{post.title}</h3>
                  <p className="text-sm text-gray-400">{post.date}</p>
                </div>
                <div className="flex space-x-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => startEdit(post)}
                    disabled={isWriting || editingId !== null}
                  >
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => deletePost(post.id)}
                    className="text-red-400 hover:text-red-300"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed whitespace-pre-wrap">{post.content}</p>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
