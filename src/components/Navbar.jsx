import SearchIcon from '../icons/search.svg?react'
import SettingsIcon from '../icons/settings1.svg?react'
import NotificationIcon from '../icons/notification.svg?react'
import { RxHamburgerMenu } from "react-icons/rx"

const Navbar = ({ title, onMenuClick }) => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-20">

      {/* Mobile (<768px) */}
      <div className="flex md:hidden flex-col px-4 py-4 gap-3">
        {/* Baris 1*/}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={onMenuClick}
              className="w-9 h-9 flex items-center justify-center hover:bg-gray-100 rounded-lg transition-colors"
            >
              <RxHamburgerMenu className="w-5 h-5 text-[#343C6A]" />
            </button>
            <h1 className="text-xl font-semibold text-[#343C6A]">{title}</h1>
          </div>
          <img
            src="/profile.png"
            alt="avatar"
            className="w-9 h-9 rounded-full object-cover cursor-pointer flex-shrink-0"
          />
        </div>
        {/* Baris 2: search bar */}
        <div className="flex items-center gap-2 bg-[#F5F7FA] rounded-full px-4 py-3 w-full">
          <SearchIcon className="w-4 h-4 text-gray-400 flex-shrink-0" />
          <input
            type="text"
            placeholder="Search for something"
            className="bg-transparent text-sm outline-none text-gray-500 w-full"
          />
        </div>
      </div>

      {/* Tablet & Desktop (≥768px) */}
      <div className="hidden md:flex items-center justify-between px-6 py-6">
        <h1 className="text-2xl font-semibold text-[#343C6A]">{title}</h1>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 bg-[#F5F7FA] rounded-full px-4 py-3 w-40 lg:w-64">
            <SearchIcon className="w-4 h-4 text-gray-400 flex-shrink-0" />
            <input
              type="text"
              placeholder="Search for something"
              className="bg-transparent text-sm outline-none text-gray-500 w-full"
            />
          </div>
          <div className="p-3 bg-[#F5F7FA] rounded-full cursor-pointer hover:bg-gray-200 transition-colors">
            <SettingsIcon className="w-5 h-5 text-gray-500" />
          </div>
          <div className="p-3 bg-[#F5F7FA] rounded-full cursor-pointer hover:bg-gray-200 transition-colors">
            <NotificationIcon className="w-5 h-5 text-gray-500" />
          </div>
          <img
            src="/profile.png"
            alt="avatar"
            className="w-10 h-10 rounded-full object-cover cursor-pointer"
          />
        </div>
      </div>

    </header>
  )
}

export default Navbar