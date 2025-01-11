export default function Home() {
  return (
    // Create login form with tailwindcss
    <div className="flex justify-center items-center h-screen">
      <div className="w-96">
        <h1 className="text-2xl font-bold mb-6">Login</h1>
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-4 border border-gray-300 rounded"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-4 border border-gray-300 rounded"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold p-4 rounded"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
