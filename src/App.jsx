import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar title="Transactions" />
        <main className="flex-1 overflow-y-auto p-6">
          <p className="text-gray-400">konten di sini nanti...</p>
        </main>
      </div>
    </div>
  )
}

export default App