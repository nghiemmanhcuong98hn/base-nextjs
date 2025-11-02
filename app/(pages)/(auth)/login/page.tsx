async function handleLogin(formData: FormData) {
  'use server';
  const username = formData.get('username');
  const password = formData.get('password');
  console.log(username, password);
}

export default function Login() {
  return (
    <div className="mx-auto w-[50vw] p-6">
      <h1 className="mb-4 text-2xl font-semibold">Login</h1>
      <form action={handleLogin} className="space-y-4">
        <input type="text" name="username" placeholder="Username" className="w-full rounded border px-3 py-2" />
        <input type="password" name="password" placeholder="Password" className="w-full rounded border px-3 py-2" />
        <button type="submit" className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
          Submit
        </button>
      </form>
    </div>
  );
}
