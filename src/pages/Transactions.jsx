import { useState } from 'react'
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts'
import ChipIcon from '../icons/Chip_Card.svg?react'
import ChipLightIcon from '../icons/chip-light.svg?react'
import ElipseIcon from '../icons/elipse.svg?react'
import ElipseIconDark from '../icons/elips.svg?react'
import { IoArrowDownCircleOutline, IoArrowUpCircleOutline } from "react-icons/io5";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const expenseData = [
  { month: 'Aug', value: 10000 },
  { month: 'Sep', value: 15000 },
  { month: 'Oct', value: 10000 },
  { month: 'Nov', value: 6000 },
  { month: 'Dec', value: 12500 },
  { month: 'Jan', value: 9000 },
]

const transactions = [
  { desc: 'Spotify Subscription', id: '#12548796', type: 'Shopping', card: '1234 ****', date: '28 Jan, 12.30 AM', amount: -2500, income: false },
  { desc: 'Freepik Sales', id: '#12548796', type: 'Transfer', card: '1234 ****', date: '25 Jan, 10.40 PM', amount: 750, income: true },
  { desc: 'Mobile Service', id: '#12548796', type: 'Service', card: '1234 ****', date: '20 Jan, 10.40 PM', amount: -150, income: false },
  { desc: 'Wilson', id: '#12548796', type: 'Transfer', card: '1234 ****', date: '15 Jan, 03.29 PM', amount: -1050, income: false },
  { desc: 'Emilly', id: '#12548796', type: 'Transfer', card: '1234 ****', date: '14 Jan, 10.40 PM', amount: 840, income: true },
]

const tabs = ['All Transactions', 'Income', 'Expense']

const Transactions = () => {
  const [activeTab, setActiveTab] = useState('All Transactions')

  const filtered = transactions.filter(t => {
    if (activeTab === 'Income') return t.income
    if (activeTab === 'Expense') return !t.income
    return true
  })

  return (
    <div className="space-y-6">

      {/* ── Top Section ── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">

        {/* ── Card 1 - Dark ── */}
        <div className="flex flex-col">
          {/* Header: desktop/tablet */}
          <div className="hidden md:flex h-[36px] items-center mb-2">
            <h2 className="text-xl font-semibold text-[#343C6A]">My Cards</h2>
          </div>
          {/* Header: mobile*/}
          <div className="flex md:hidden justify-between items-center mb-2">
            <h2 className="text-lg font-semibold text-[#343C6A]">My Cards</h2>
            <button className="text-sm text-[#343C6A] font-medium hover:text-[#1814F3]">+ Add Card</button>
          </div>
          {/* Scroll wrapper*/}
          <div className="flex gap-4 overflow-x-auto pb-1 snap-x snap-mandatory scroll-smooth
                          [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]
                          md:overflow-visible md:pb-0 md:block">

            {/* Card 1 body */}
            <div className="flex-shrink-0 w-[75vw] max-w-[300px] md:w-full md:max-w-none md:flex-1 flex flex-col snap-start">
              <div className="rounded-3xl bg-gradient-to-r from-[#4C49ED] to-[#0A06F4] flex flex-col justify-between h-full">
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
                    <div className='ml-9'>
                      <div className="text-gray-300 text-[13px] uppercase">Valid Thru</div>
                      <div className="text-white text-sm font-semibold">12/22</div>
                    </div>
                  </div>
                </div>
                <div className="w-full rounded-b-3xl bg-gradient-to-b from-[#4C49ED] to-[#0A06F4]">
                  <div className="px-5 py-3">
                    <div className="flex justify-between items-center">
                      <div className="text-white text-lg font-semibold tracking-widest bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                        3778 **** **** 1234
                      </div>
                      <ElipseIcon className="w-10 h-10 text-[#343C6A]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 - Light (mobile) */}
            <div className="flex-shrink-0 w-[75vw] max-w-[300px] snap-start flex flex-col md:hidden">
              <div className="rounded-3xl bg-white border border-gray-200 flex flex-col justify-between h-full">
                <div className="m-5 space-y-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-[#718EBF] text-xs">Balance</div>
                      <div className="text-[#343C6A] text-2xl font-semibold">$5,756</div>
                    </div>
                    <ChipLightIcon className="w-10 h-10 opacity-100" />
                  </div>
                  <div className="flex items-center gap-8">
                    <div>
                      <div className="text-[#718EBF] text-[13px] uppercase">Card Holder</div>
                      <div className="text-[#343C6A] text-sm font-semibold">Eddy Cusuma</div>
                    </div>
                    <div className='ml-9'>
                      <div className="text-[#718EBF] text-[13px] uppercase">Valid Thru</div>
                      <div className="text-[#343C6A] text-sm font-semibold">12/22</div>
                    </div>
                  </div>
                </div>
                <div className="w-full bg-white rounded-b-3xl border-t border-gray-200">
                  <div className="px-5 py-3">
                    <div className="flex justify-between items-center">
                      <div className="text-[#343C6A] text-lg font-semibold tracking-widest">
                        3778 **** **** 1234
                      </div>
                      <ElipseIconDark className="w-10 h-10 text-[#343C6A]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ── Card 2 - Light (desktop) */}
        <div className="hidden md:flex flex-col">
          <div className="h-[36px] flex items-center justify-end mb-2">
            <button className="text-m text-[#343C6A] font-medium hover:text-[#1814F3]">+ Add Card</button>
          </div>
          <div className="rounded-3xl bg-white border border-gray-200 flex flex-col justify-between flex-1">
            <div className="m-5 space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-[#718EBF] text-xs">Balance</div>
                  <div className="text-[#343C6A] text-2xl font-semibold">$5,756</div>
                </div>
                <ChipLightIcon className="w-10 h-10 opacity-100" />
              </div>
              <div className="flex items-center gap-8">
                <div>
                  <div className="text-[#718EBF] text-[13px] uppercase">Card Holder</div>
                  <div className="text-[#343C6A] text-sm font-semibold">Eddy Cusuma</div>
                </div>
                <div className='ml-9'>
                  <div className="text-[#718EBF] text-[13px] uppercase">Valid Thru</div>
                  <div className="text-[#343C6A] text-sm font-semibold">12/22</div>
                </div>
              </div>
            </div>
            <div className="w-full bg-white rounded-b-3xl border-t border-gray-200">
              <div className="px-5 py-3">
                <div className="flex justify-between items-center">
                  <div className="text-[#343C6A] text-lg font-semibold tracking-widest">
                    3778 **** **** 1234
                  </div>
                  <ElipseIconDark className="w-10 h-10 text-[#343C6A]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* My Expense (kolom ke-3) */}
        <div className="flex flex-col">
          <div className="h-[36px] flex items-center mb-2">
            <h2 className="text-xl font-semibold text-[#343C6A]">My Expense</h2>
          </div>
          <div className="bg-white rounded-3xl p-6 flex-1 flex flex-col justify-center">
            <ResponsiveContainer width="100%" height={160}>
              <BarChart data={expenseData} barSize={35}>
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#718EBF' }} />
                <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, 'Expense']} />
                <Bar
                  dataKey="value"
                  radius={[10, 10, 10, 10]}
                  label={(props) => {
                    const { x, y, width, value, index } = props
                    if (index === 4) {
                      return (
                        <text x={x + width / 2} y={y - 5} fill="#343C6A" textAnchor="middle" fontSize={11} fontWeight="semibold">
                          {`$${value.toLocaleString()}`}
                        </text>
                      )
                    }
                    return null
                  }}
                >
                  {expenseData.map((entry, index) => (
                    <Cell key={index} fill={entry.month === 'Dec' ? '#16DBCC' : '#E0E7FF'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>
      
      {/* Recent Transactions */}
      <div>
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-xl font-semibold text-[#343C6A]">Recent Transactions</h2>
        </div>

        <div className="flex space-x-18 border-b border-gray-200 mb-4">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative pb-3 text-sm font-medium transition-colors ${
                activeTab === tab
                  ? 'text-[#1814F3] font-semibold'
                  : 'text-[#718EBF] hover:text-[#343C6A]'
              }`}
            >
              {tab}
              {activeTab === tab && (
                <div className="absolute bottom-0 left-0 w-full h-1 bg-[#1814F3] rounded-t-full" />
              )}
            </button>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-4 md:p-6">
          {/* Desktop & Tablet */}
          <div className="hidden md:block">
            <table className="w-full text-sm table-auto">
              <thead>
                <tr className="text-left text-[#718EBF]">
                  <th className="pb-4 font-medium text-base w-45">Description</th>
                  <th className="pb-4 font-medium text-base w-30">Transaction ID</th>
                  <th className="pb-4 font-medium text-base w-20">Type</th>
                  <th className="pb-4 font-medium text-base w-25">Card</th>
                  <th className="pb-4 font-medium text-base w-30">Date</th>
                  <th className="pb-4 font-medium text-base w-20">Amount</th>
                  <th className="pb-4 font-medium text-base w-25 text-center">Receipt</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((t, i) => (
                  <tr key={i} className="border-t border-gray-200 hover:bg-gray-50 transition-colors">
                    <td className="py-4 flex items-center gap-3">
                        {t.income ? (
                          <IoArrowDownCircleOutline className="w-10 h-10 text-[#718EBF]" />
                        ) : (
                          <IoArrowUpCircleOutline className="w-10 h-10 text-[#718EBF]" />
                        )}
                      <span className="text-[#343C6A] font-medium">{t.desc}</span>
                    </td>
                    <td className="py-4">{t.id}</td>
                    <td className="py-4">{t.type}</td>
                    <td className="py-4">{t.card}</td>
                    <td className="py-4">{t.date}</td>
                    <td className={`py-4 font-semibold text-left ${t.income ? 'text-[#16DBAA]' : 'text-[#FE5C73]'}`}>
                      {t.income ? `+$${t.amount}` : `-$${Math.abs(t.amount)}`}
                    </td>
                    <td className="py-4 text-center">
                      <button className="border border-[#123288] rounded-full px-4 py-1.5 text-xs text-[#123288] hover:bg-[#1814F3] hover:text-white transition-colors cursor-pointer">
                        Download
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile */}
          <div className="block md:hidden">
            {filtered.map((t, i) => (
              <div key={i} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
                <div className="flex items-center gap-3">               
                    {t.income ? (
                      <IoArrowDownCircleOutline className="w-10 h-10 text-[#718EBF]" />
                    ) : (
                      <IoArrowUpCircleOutline className="w-10 h-10 text-[#718EBF]" />
                    )}
                  <div>
                    <div className="text-[#343C6A] font-medium text-m">{t.desc}</div>
                    <div className="text-[#718EBF] text-sm">{t.date}</div>
                  </div>
                </div>
                <div className={`font-semibold text-sm ${t.income ? 'text-green-500' : 'text-red-400'}`}>
                  {t.income ? `+$${t.amount}` : `-$${Math.abs(t.amount)}`}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-end items-center mt-6">
          <div className="flex items-center gap-1">
            <button className="text-sm text-[#1814F3] hover:text-[#343C6A] flex items-center gap-1">
              <IoIosArrowBack className="w-4 h-4" />
              Previous
            </button>
            {[1, 2, 3, 4].map(n => (
              <button
                key={n}
                className={`w-8 h-8 rounded-lg text-sm transition-colors ${
                  n === 1 ? 'bg-[#1814F3] text-white' : 'text-[#718EBF] hover:bg-gray-100'
                }`}
              >
                {n}
              </button>
            ))}
            <button className="text-sm text-[#1814F3] hover:text-[#343C6A] flex items-center gap-1">
              Next
              <IoIosArrowForward className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Transactions