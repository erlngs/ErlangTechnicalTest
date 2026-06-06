import { NavLink } from 'react-router-dom'
import HomeIcon from '../icons/home.svg?react'
import TransactionIcon from '../icons/transaction.svg?react'
import AccountIcon from '../icons/account.svg?react'
import InvestmentIcon from '../icons/investment.svg?react'
import CreditCardIcon from '../icons/credit-card.svg?react'
import LoanIcon from '../icons/loan.svg?react'
import ServiceIcon from '../icons/service.svg?react'
import PrivilegeIcon from '../icons/myprevilege.svg?react'
import SettingsIcon from '../icons/settings.svg?react'

const menuItems = [
  { icon: HomeIcon, label: 'Dashboard', path: '/' },
  { icon: TransactionIcon, label: 'Transactions', path: '/transactions' },
  { icon: AccountIcon, label: 'Accounts', path: '/accounts' },
  { icon: InvestmentIcon, label: 'Investments', path: '/investments' },
  { icon: CreditCardIcon, label: 'Credit Cards', path: '/credit-cards' },
  { icon: LoanIcon, label: 'Loans', path: '/loans' },
  { icon: ServiceIcon, label: 'Services', path: '/services' },
  { icon: PrivilegeIcon, label: 'My Privileges', path: '/privileges' },
  { icon: SettingsIcon, label: 'Setting', path: '/settings' },
]

const NavItems = ({ showLabel = true, onItemClick }) => (
  <nav className="flex-1 py-4 flex flex-col gap-3">
    {menuItems.map((item) => (
      <NavLink
        key={item.label}
        to={item.path}
        onClick={onItemClick}
        className={({ isActive }) =>
          `flex items-center gap-3 py-3 cursor-pointer transition-colors relative
          ${showLabel ? 'px-6' : 'px-4 justify-center'}
          ${isActive
            ? 'text-[#1814F3] font-semibold'
            : 'text-gray-400 hover:bg-gray-50 hover:text-gray-600'
          }`
        }
      >
        {({ isActive }) => (
          <>
            {isActive && (
              <div className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 bg-[#1814F3] rounded-r-full ${showLabel ? 'h-12' : 'h-10'}`} />
            )}
            <item.icon
              className={`w-5 h-5 flex-shrink-0 ${isActive ? 'fill-[#1814F3]' : 'fill-gray-400'}`}
            />
            {showLabel && <span className="text-sm">{item.label}</span>}
          </>
        )}
      </NavLink>
    ))}
  </nav>
)

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Desktop (≥1024px): sidebar penuh */}
      <aside className="hidden lg:flex w-60 h-screen bg-white shadow-md flex-col border-r border-gray-100 fixed top-0 left-0 z-30">
        <div className="flex items-center gap-3 px-6 py-6">
          <img src="/icons/Logo.svg" alt="BankDash Logo" className="w-9 h-9" />
          <span className="text-2xl font-extrabold text-[#343C6A]">BankDash.</span>
        </div>
        <NavItems showLabel={true} />
      </aside>

      {/* Tablet (768px–1023px): icon-only */}
      <aside className="hidden md:flex lg:hidden w-16 h-screen bg-white shadow-md flex-col border-r border-gray-100 fixed top-0 left-0 z-30">
        <div className="flex items-center justify-center py-6">
          <img src="/icons/Logo.svg" alt="BankDash Logo" className="w-9 h-9" />
        </div>
        <NavItems showLabel={false} />
      </aside>

      {/* Mobile: drawer — dikontrol dari App via isOpen/onClose */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={onClose}
        />
      )}
      <aside
        className={`fixed top-0 left-0 h-screen w-64 bg-white shadow-xl z-50 flex flex-col border-r border-gray-100
          transition-transform duration-300 ease-in-out md:hidden
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex items-center justify-between px-6 py-6">
          <div className="flex items-center gap-3">
            <img src="/icons/Logo.svg" alt="BankDash Logo" className="w-9 h-9" />
            <span className="text-2xl font-extrabold text-[#343C6A]">BankDash.</span>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 p-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <NavItems showLabel={true} onItemClick={onClose} />
      </aside>
    </>
  )
}

export default Sidebar