// src/lib/swr.ts
import useSWR, { SWRConfiguration } from "swr"
import axios from "./axios"

// 🧠 Fetcher mặc định (dùng axios)
const fetcher = (url: string) =>
  axios.get(url).then((res: { data: any }) => res.data)

// ⚙️ Cấu hình mặc định cho SWR
export const swrConfig: SWRConfiguration = {
  fetcher,
  revalidateOnFocus: false, // Không refetch khi tab được focus lại
  shouldRetryOnError: true,
  errorRetryCount: 2, // Thử lại tối đa 2 lần nếu lỗi
  dedupingInterval: 5000, // Trong 5s, gọi lại cùng endpoint sẽ chỉ fetch 1 lần
}

// 🧩 Hook SWR custom (tùy chọn)
export function useCustomSWR<T>(key: string | null, config?: SWRConfiguration) {
  return useSWR<T>(key, fetcher, { ...swrConfig, ...config })
}
