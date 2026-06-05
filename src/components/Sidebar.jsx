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

const Sidebar = () => {
  return (
    <aside className="w-60 h-screen bg-white shadow-md flex flex-col">
      <div className="flex items-center gap-3 px-6 py-6">
        <img src="/icons/Logo.svg" alt="BankDash Logo" className="w-7 h-7" />
        <span className="text-2xl font-extrabold text-[#343C6A]">BankDash.</span>
      </div>

      <nav className="flex-1 py-4 relative flex flex-col gap-3">
        {menuItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-6 py-3 cursor-pointer transition-colors relative
              ${isActive
                ? 'text-[#1814F3] font-semibold'
                : 'text-gray-400 hover:bg-gray-50 hover:text-gray-600'
              }`
            }
          >
            {({ isActive }) => (
              <>
                {isActive && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-12 bg-[#1814F3] rounded-r-full" />
                )}
                <item.icon
                  className={`w-5 h-5 flex-shrink-0 ${isActive ? 'fill-[#1814F3]' : 'fill-gray-400'}`}
                />
                <span className="text-sm">{item.label}</span>
              </>
            )}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}

export default Sidebar