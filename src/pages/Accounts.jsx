import { BarChart, Bar, XAxis, ResponsiveContainer, Tooltip } from 'recharts'
import ChipIcon from '../icons/Chip_Card.svg?react'
import ElipseIcon from '../icons/elipse.svg?react'
import MoneyTagIcon from '../icons/money-tag.svg?react'
import MoneyIcon from '../icons/money.svg?react'
import MedicalIcon from '../icons/medical.svg?react'
import SavingIcon from '../icons/saving.svg?react'
import SpotifyIcon from '../icons/spotify.svg?react'
import MobileIcon from '../icons/mobile.svg?react'
import EmilyIcon from '../icons/emily.svg?react'
import AppleIcon from '../icons/apple.svg?react'
import UserIcon from '../icons/user.svg?react'
import PlaystationIcon from '../icons/playstation.svg?react'

const statCards = [
  { icon: MoneyTagIcon, label: 'My Balance', value: '$12,750', bg: 'bg-white', iconBg: 'bg-[#FFF5D9]' },
  { icon: MoneyIcon, label: 'Income', value: '$5,600', bg: 'bg-white', iconBg: 'bg-[#E7EDFF]' },
  { icon: MedicalIcon, label: 'Expense', value: '$3,460', bg: 'bg-white', iconBg: 'bg-[#FFE0EB]' },
  { icon: SavingIcon, label: 'Total Saving', value: '$7,920', bg: 'bg-white', iconBg: 'bg-[#DCFAF8]' },
]

const lastTransactions = [
  { icon: SpotifyIcon, desc: 'Spotify Subscription', date: '25 Jan 2021', type: 'Shopping', card: '1234 ****', status: 'Pending', amount: -150, income: false, iconBg: 'bg-[#DCFAF8]', iconColor: 'text-green-600' },
  { icon: MobileIcon, desc: 'Mobile Service', date: '25 Jan 2021', type: 'Service', card: '1234 ****', status: 'Completed', amount: -340, income: false, iconBg: 'bg-[#E7EDFF]', iconColor: 'text-blue-600' },
  { icon: EmilyIcon, desc: 'Emilly Wilson', date: '25 Jan 2021', type: 'Transfer', card: '1234 ****', status: 'Completed', amount: 780, income: true, iconBg: 'bg-[#FFE0EB]', iconColor: 'text-purple-600' },
]

const invoices = [
  { icon: AppleIcon, name: 'Apple Store', time: '5h ago', amount: '$450', iconBg: 'bg-[#DCFAF8]' },
  { icon: UserIcon, name: 'Michael', time: '2 days ago', amount: '$160', iconBg: 'bg-[#FFF5D9]' },
  { icon: PlaystationIcon, name: 'Playstation', time: '5 days ago', amount: '$1085', iconBg: 'bg-[#E7EDFF]' },
  { icon: EmilyIcon, name: 'William', time: '10 days ago', amount: '$90', iconBg: 'bg-[#FFE0EB]' },
]

const chartData = [
  { day: 'Sat', debit: 3500, credit: 7500 },
  { day: 'Sun', debit: 3000, credit: 6000 },
  { day: 'Mon', debit: 3000, credit: 5000 },
  { day: 'Tue', debit: 6500, credit: 3500 },
  { day: 'Wed', debit: 4000, credit: 6500 },
  { day: 'Thu', debit: 4200, credit: 3000 },
  { day: 'Fri', debit: 5500, credit: 6500 },
]

const Accounts = () => {
  return (
    <div className="space-y-6">

      {/* Stat Cards desktop*/}
      <div className="hidden xl:grid grid-cols-4 gap-10">
        {statCards.map((card) => (
          <div key={card.label} className={`${card.bg} rounded-3xl p-8 flex items-center gap-4`}>
            <div className={`${card.iconBg} rounded-full p-5 flex-shrink-0`}>
              <card.icon className="w-7 h-7" />
            </div>
            <div>
              <p className="text-l text-[#718EBF]">{card.label}</p>
              <p className="text-2xl font-semibold text-[#343C6A]">{card.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Stat Cards tablet */}
      <div className="hidden md:grid xl:hidden grid-cols-2 gap-4">
        {statCards.map((card) => (
          <div key={card.label} className={`${card.bg} rounded-3xl p-6 flex items-center gap-3`}>
            <div className={`${card.iconBg} rounded-full p-4 flex-shrink-0`}>
              <card.icon className="w-6 h-6" />
            </div>
            <div>
              <p className="text-base text-[#718EBF]">{card.label}</p>
              <p className="text-lg font-semibold text-[#343C6A]">{card.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Stat Cards mobile */}
      <div className="grid md:hidden grid-cols-2 gap-4">
        {statCards.map((card) => (
          <div key={card.label} className={`${card.bg} rounded-3xl p-6 flex items-center gap-3`}>
            <div className={`${card.iconBg} rounded-full p-3 flex-shrink-0`}>
              <card.icon className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm text-[#718EBF]">{card.label}</p>
              <p className="text-base font-semibold text-[#343C6A]">{card.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Middle Section — mobile: 1 kolom, desktop: 3 kolom */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

        {/* Last Transaction */}
        <div className="xl:col-span-2 flex flex-col">
          <h2 className="text-xl font-semibold text-[#343C6A] mb-4">Last Transaction</h2>
          <div className="bg-white rounded-3xl p-6 flex-1">
            {lastTransactions.map((t, i) => (
              <div key={i} className="flex items-center gap-3 py-2">
                <div className={`${t.iconBg} rounded-2xl p-3 flex-shrink-0`}>
                  <t.icon className={`w-6 h-6 ${t.iconColor}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-base font-medium text-[#333B69] truncate">{t.desc}</p>
                  <p className="text-xs text-[#718EBF]">{t.date}</p>
                </div>
                <div className="hidden sm:block text-base text-[#718EBF] w-40 text-left">{t.type}</div>
                <div className="hidden sm:block text-base text-[#718EBF] w-24 text-left">{t.card}</div>
                <div className="hidden sm:block text-base text-[#718EBF] w-24 text-left">{t.status}</div>
                <div className={`text-base font-semibold w-16 text-right flex-shrink-0 ${t.income ? 'text-[#16DBAA]' : 'text-[#FE5C73]'}`}>
                  {t.income ? `+$${t.amount}` : `-$${Math.abs(t.amount)}`}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* My Card */}
        <div className="flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-[#343C6A]">My Card</h2>
            <button className="text-xl font-semibold text-[#343C6A] hover:underline">See All</button>
          </div>
          <div className="rounded-3xl bg-gradient-to-r from-[#2D60FF] to-[#539BFF] flex flex-col justify-between flex-1">
            <div className="m-5 space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-white text-xs">Balance</div>
                  <div className="text-white text-2xl font-semibold">$5,756</div>
                </div>
                <ChipIcon className="w-10 h-10 opacity-100" />
              </div>
              <div className="flex items-center gap-8">
                <div>
                  <div className="text-gray-300 text-[13px] uppercase">Card Holder</div>
                  <div className="text-white text-sm font-semibold">Eddy Cusuma</div>
                </div>
                <div className="ml-9">
                  <div className="text-gray-300 text-[13px] uppercase">Valid Thru</div>
                  <div className="text-white text-sm font-semibold">12/22</div>
                </div>
              </div>
            </div>
            <div className="w-full rounded-b-3xl bg-gradient-to-b from-[#539BFF] to-[#539BFF]">
              <div className="px-5 py-3">
                <div className="flex justify-between items-center">
                  <div className="text-white text-lg font-semibold tracking-widest bg-gradient-to-r from-white to-[#539BFF] bg-clip-text text-transparent">
                    3778 **** **** 1234
                  </div>
                  <ElipseIcon className="w-10 h-10 text-[#343C6A]" />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Section — mobile: 1 kolom, desktop: 3 kolom */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

        {/* Debit & Credit Overview */}
        <div className="xl:col-span-2 flex flex-col">
          <h2 className="text-xl font-semibold text-[#343C6A] mb-4">Debit & Credit Overview</h2>
          <div className="bg-white rounded-3xl p-6 flex-1">

            {/* Header teks + legend — sama untuk semua breakpoint */}
            {/* Teks debited/credited — hanya desktop */}
            <div className="hidden xl:flex items-start justify-between mb-4">
              <p className="text-base text-[#718EBF]">
                <span className="text-[#343C6A] font-semibold">$7,560</span> Debited &{' '}
                <span className="text-[#343C6A] font-semibold">$5,420</span> Credited in this Week
              </p>
              <div className="flex items-center gap-4 flex-shrink-0 ml-4">
                <div className="flex items-center gap-1.5">
                  <span className="w-4 h-4 rounded-sm bg-[#1A16F3] inline-block" />
                  <span className="text-sm text-[#718EBF]">Debit</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-4 h-4 rounded-sm bg-[#FCAA0B] inline-block" />
                  <span className="text-sm text-[#718EBF]">Credit</span>
                </div>
              </div>
            </div>

            {/* Legend — hanya mobile & tablet */}
            <div className="flex xl:hidden items-center gap-4 justify-end mb-4">
              <div className="flex items-center gap-1.5">
                <span className="w-4 h-4 rounded-sm bg-[#1A16F3] inline-block" />
                <span className="text-sm text-[#718EBF]">Debit</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-4 h-4 rounded-sm bg-[#FCAA0B] inline-block" />
                <span className="text-sm text-[#718EBF]">Credit</span>
              </div>
            </div>

            {/* Chart desktop (xl+) */}
            <div className="hidden xl:block">
              <ResponsiveContainer width="100%" height={340}>
                <BarChart data={chartData} barSize={30} barGap={8}>
                  <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 14, fill: '#718EBF' }} />
                  <Tooltip />
                  <Bar dataKey="debit" fill="#1A16F3" radius={[8, 8, 8, 8]} name="Debit" />
                  <Bar dataKey="credit" fill="#FCAA0B" radius={[8, 8, 8, 8]} name="Credit" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Chart tablet (md - xl) */}
            <div className="hidden md:block xl:hidden">
              <ResponsiveContainer width="100%" height={280}>
                <BarChart data={chartData} barSize={30} barGap={8} barCategoryGap="20%">
                  <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 14, fill: '#718EBF' }} />
                  <Tooltip />
                  <Bar dataKey="debit" fill="#1A16F3" radius={[8, 8, 8, 8]} name="Debit" />
                  <Bar dataKey="credit" fill="#FCAA0B" radius={[8, 8, 8, 8]} name="Credit" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Chart mobile (< md) */}
            <div className="block md:hidden">
              <ResponsiveContainer width="100%" height={280}>
                <BarChart data={chartData} barSize={15} barGap={8} barCategoryGap="20%">
                  <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 14, fill: '#718EBF' }} />
                  <Tooltip />
                  <Bar dataKey="debit" fill="#1A16F3" radius={[8, 8, 8, 8]} name="Debit" />
                  <Bar dataKey="credit" fill="#FCAA0B" radius={[8, 8, 8, 8]} name="Credit" />
                </BarChart>
              </ResponsiveContainer>
            </div>

          </div>
        </div>

        {/* Invoices Sent */}
        <div className="flex flex-col">
          <h2 className="text-xl font-semibold text-[#343C6A] mb-4">Invoices Sent</h2>
          <div className="bg-white rounded-3xl p-6 flex-1">
            <div className="space-y-4">
              {invoices.map((inv, i) => (
                <div key={i} className="flex items-center justify-between py-3">
                  <div className="flex items-center gap-3">
                    <div className={`${inv.iconBg} rounded-2xl p-4 ml-3 flex-shrink-0`}>
                      <inv.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-lg font-medium text-[#343C6A] ml-2">{inv.name}</p>
                      <p className="text-base text-[#718EBF] ml-2">{inv.time}</p>
                    </div>
                  </div>
                  <p className="text-lg font-medium text-[#718EBF] mr-3">{inv.amount}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Accounts