import SearchIcon from '../icons/search.svg?react'
import SettingsIcon from '../icons/settings1.svg?react'
import NotificationIcon from '../icons/notification.svg?react'

const Navbar = ({ title }) => {
  return (
    <header className="bg-white shadow-sm px-6 py-6 flex items-center justify-between">
      <h1 className="text-2xl font-bold text-gray-800">{title}</h1>

      <div className="flex items-center gap-6">
        {/* Search */}
        <div className="flex items-center gap-2 bg-[#F5F7FA] rounded-full px-4 py-3 w-64">
          <SearchIcon className="w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search for something"
            className="bg-transparent text-sm outline-none text-gray-500 w-full"
          />
        </div>

        <div className="p-2 bg-[#F5F7FA] rounded-full cursor-pointer hover:bg-gray-200 transition-colors">
          <SettingsIcon className="w-5 h-5 text-gray-500" />
        </div>

        <div className="p-2 bg-[#F5F7FA] rounded-full cursor-pointer hover:bg-gray-200 transition-colors">
          <NotificationIcon className="w-5 h-5 text-gray-500" />
        </div>

        <img
          src="/profile.png"
          alt="avatar"
          className="w-10 h-10 rounded-full object-cover cursor-pointer"
        />
      </div>
    </header>
  )
}

export default Navbar