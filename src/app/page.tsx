export default function Home() {
  return (
    <main className="font-[family-name:var(--font-geist-sans)]">
      <div
        className="flex items-center justify-center min-h-screen bg-cover bg-center"
        style={{backgroundImage: 'https://source.unsplash.com/1600x900/?technology,monitoring'}}
      >
        <div className="bg-white bg-opacity-75 rounded-lg p-10 shadow-lg text-center max-w-lg">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Welcome to the <span className="text-indigo-600">Awesome Monitoring App</span>
          </h1>
          <p className="text-gray-700 text-lg mb-8">
            Start by viewing your logs here
          </p>
          <a href="/logs" className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-full transition duration-300">
            View Logs
          </a>
        </div>
      </div>
    </main>
  );
}
