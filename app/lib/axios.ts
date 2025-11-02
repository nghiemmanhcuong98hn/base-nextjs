// src/lib/axios.ts
import axios from "axios"

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "https://api.example.com",
  timeout: 10000, // 10s
  headers: {
    "Content-Type": "application/json",
  },
})

// 🔹 Thêm request interceptor (ví dụ thêm token)
instance.interceptors.request.use(
  (config) => {
    // Nếu có token trong localStorage / cookie thì thêm vào header
    const token = typeof window !== "undefined" ? localStorage.getItem("token") : null
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

// 🔹 Thêm response interceptor (xử lý lỗi tập trung)
instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.warn("Unauthorized – có thể cần đăng nhập lại")
    }
    return Promise.reject(error)
  }
)

export default instance
