async function handleLogin(formData: FormData) {
  'use server'
  const username = formData.get('username')
  const password = formData.get('password')
  console.log(username, password)
}

export default function Login() {
  return (
    <div className="p-6 w-[50vw] mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Login</h1>
      <form action={handleLogin} className="space-y-4">
        <input
          type="text"
          name="username"
          placeholder="Username"
          className="border px-3 py-2 rounded w-full"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="border px-3 py-2 rounded w-full"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  )
}
