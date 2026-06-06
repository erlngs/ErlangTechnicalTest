import { useState } from 'react'
import EditIcon from '../icons/edit.svg?react'
import { IoIosArrowDown } from "react-icons/io"

const tabs = ['Edit Profile', 'Preferences', 'Security']

const Setting = () => {
  const [activeTab, setActiveTab] = useState('Edit Profile')
  const [toggle1, setToggle1] = useState(true)
  const [toggle2, setToggle2] = useState(false)
  const [toggle3, setToggle3] = useState(true)
  const [twoFactor, setTwoFactor] = useState(true)

  const inputClass = "w-full border border-[#DFEAF2] rounded-xl px-4 py-3 text-sm text-[#343C6A] placeholder:text-[#718EBF] outline-none focus:border-[#1814F3] transition-colors"

  return (
    <div className="bg-white rounded-3xl p-6 md:p-8">

      {/* Tabs */}
      <div className="flex gap-11 border-b border-gray-100 mb-8">
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`relative pb-4 text-sm font-medium transition-colors px-2 ${
              activeTab === tab ? 'text-[#1814F3]' : 'text-[#718EBF] hover:text-[#343C6A]'
            }`}
          >
            {tab}
            {activeTab === tab && (
              <div className="absolute bottom-0 left-0 w-full h-1 bg-[#1814F3] rounded-t-full" />
            )}
          </button>
        ))}
      </div>

      {/* Edit Profile */}
      {activeTab === 'Edit Profile' && (
        <div className="flex flex-col md:flex-row gap-8">

          {/* Avatar */}
          <div className="flex-shrink-0 flex justify-center md:justify-start">
            <div className="relative w-40 h-40 md:w-30 md:h-30">
              <img
                src="/profile.png"
                alt="profile"
                className="w-full h-full rounded-full object-cover"
              />
              <button className="absolute bottom-1 right-1 w-10 h-10 md:w-9 md:h-9 bg-[#1814F3] rounded-full flex items-center justify-center">
                <EditIcon className="w-8 h-8 md:w-6 md:h-6 fill-white" />
              </button>
            </div>
          </div>

          {/* Form */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-5">

            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-[#343C6A]">Your Name</label>
              <input type="text" placeholder="Charlene Reed" className={inputClass} />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-[#343C6A]">User Name</label>
              <input type="text" placeholder="Charlene Reed" className={inputClass} />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-[#343C6A]">Email</label>
              <input type="email" placeholder="charlenereed@gmail.com" className={inputClass} />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-[#343C6A]">Password</label>
              <input type="password" placeholder="**********" className={inputClass} />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-[#343C6A]">Date of Birth</label>
              <div className="relative">
                <input type="text" placeholder="25 January 1990" className={inputClass} />
                <IoIosArrowDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#718EBF] w-4 h-4" />
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-[#343C6A]">Present Address</label>
              <input type="text" placeholder="San Jose, California, USA" className={inputClass} />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-[#343C6A]">Permanent Address</label>
              <input type="text" placeholder="San Jose, California, USA" className={inputClass} />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-[#343C6A]">City</label>
              <input type="text" placeholder="San Jose" className={inputClass} />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-[#343C6A]">Postal Code</label>
              <input type="text" placeholder="45962" className={inputClass} />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-[#343C6A]">Country</label>
              <input type="text" placeholder="USA" className={inputClass} />
            </div>

            <div className="md:col-span-2 flex justify-center md:justify-end mt-4">
              <button className="bg-[#1814F3] text-white w-full md:w-40 py-3 rounded-xl text-sm font-semibold hover:bg-blue-700 transition-colors">
                Save
              </button>
            </div>

          </div>
        </div>
      )}

      {/* Preferences */}
      {activeTab === 'Preferences' && (
        <div className="flex flex-col gap-6">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-[#343C6A]">Currency</label>
              <input type="text" placeholder="USD" className={inputClass} />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-[#343C6A]">Time Zone</label>
              <input type="text" placeholder="(GMT-12:00) International Date Line West" className={inputClass} />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-sm font-medium text-[#343C6A]">Notification</p>

           {/* Toggle 1 */}
            <div className="flex items-center gap-4">
              <button onClick={() => setToggle1(!toggle1)} className={`w-12 h-7 rounded-full transition-colors flex-shrink-0 flex items-center px-1 ${toggle1 ? 'bg-[#16DBCC]' : 'bg-gray-300'}`}>
                <span className={`w-5 h-5 bg-white rounded-full shadow transition-transform duration-300 ${toggle1 ? 'translate-x-5' : 'translate-x-0'}`} />
              </button>
              <span className="text-sm text-[#343C6A]">I send or receive digital currency</span>
            </div>

            {/* Toggle 2 */}
            <div className="flex items-center gap-4">
              <button onClick={() => setToggle2(!toggle2)} className={`w-12 h-7 rounded-full transition-colors flex-shrink-0 flex items-center px-1 ${toggle2 ? 'bg-[#16DBCC]' : 'bg-gray-300'}`}>
                <span className={`w-5 h-5 bg-white rounded-full shadow transition-transform duration-300 ${toggle2 ? 'translate-x-5' : 'translate-x-0'}`} />
              </button>
              <span className="text-sm text-[#343C6A]">I receive merchant order</span>
            </div>

            {/* Toggle 3 */}
            <div className="flex items-center gap-4">
              <button onClick={() => setToggle3(!toggle3)} className={`w-12 h-7 rounded-full transition-colors flex-shrink-0 flex items-center px-1 ${toggle3 ? 'bg-[#16DBCC]' : 'bg-gray-300'}`}>
                <span className={`w-5 h-5 bg-white rounded-full shadow transition-transform duration-300 ${toggle3 ? 'translate-x-5' : 'translate-x-0'}`} />
              </button>
              <span className="text-sm text-[#343C6A]">There are recommendation for my account</span>
            </div>
          </div>

          <div className="md:col-span-2 flex justify-center md:justify-end mt-4">
              <button className="bg-[#1814F3] text-white w-full md:w-40 py-3 rounded-xl text-sm font-semibold hover:bg-blue-700 transition-colors">
                Save
              </button>
            </div>

        </div>
      )}

      {/* Security */}
      {activeTab === 'Security' && (
        <div className="flex flex-col gap-6">

          <div className="flex flex-col gap-3">
            <p className="text-sm font-medium text-[#343C6A]">Two-factor Authentication</p>
            <div className="flex items-center gap-4">
              <button onClick={() => setTwoFactor(!twoFactor)} className={`w-12 h-7 rounded-full transition-colors flex-shrink-0 flex items-center px-1 ${twoFactor ? 'bg-[#16DBCC]' : 'bg-gray-300'}`}>
                <span className={`w-5 h-5 bg-white rounded-full shadow transition-transform duration-300 ${twoFactor ? 'translate-x-5' : 'translate-x-0'}`} />
              </button>
              <span className="text-sm text-[#343C6A]">Enable or disable two factor authentication</span>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-sm font-medium text-[#343C6A]">Change Password</p>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-[#343C6A]">Current Password</label>
              <input type="password" placeholder="**********" className={`${inputClass} max-w-sm`} />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-[#343C6A]">New Password</label>
              <input type="password" placeholder="**********" className={`${inputClass} max-w-sm`} />
            </div>
          </div>

          <div className="md:col-span-2 flex justify-center md:justify-end mt-4">
              <button className="bg-[#1814F3] text-white w-full md:w-40 py-3 rounded-xl text-sm font-semibold hover:bg-blue-700 transition-colors">
                Save
              </button>
            </div>

        </div>
      )}

    </div>
  )
}

export default Setting