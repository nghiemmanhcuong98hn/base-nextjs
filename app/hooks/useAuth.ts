"use client"

import { useState, useEffect, useCallback } from "react"
import { useLocalStorage } from "./useLocalStorage"
import axios from "../lib/axios"

interface User {
  id: string
  name: string
  email: string
}

export function useAuth() {
  const [token, setToken] = useLocalStorage<string | null>("token", null)
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!token) {
      setUser(null)
      setLoading(false)
      return
    }

    const fetchUser = async () => {
      try {
        const { data } = await axios.get("/me", {
          headers: { Authorization: `Bearer ${token}` },
        })
        setUser(data)
      } catch (err) {
        console.error("Failed to fetch user", err)
        setUser(null)
      } finally {
        setLoading(false)
      }
    }

    fetchUser()
  }, [token])

  const login = useCallback(async (email: string, password: string) => {
    const { data } = await axios.post("/auth/login", { email, password })
    setToken(data.token)
    setUser(data.user)
  }, [setToken])

  const logout = useCallback(() => {
    setToken(null)
    setUser(null)
    window.localStorage.removeItem("token")
  }, [setToken])

  return { user, token, loading, login, logout, isAuthenticated: !!user }
}
