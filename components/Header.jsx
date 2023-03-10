import Image from 'next/image'
import {BiSearchAlt2,BiMenu} from 'react-icons/bi'
import {FiGlobe} from 'react-icons/fi'
import {FaUserCircle} from 'react-icons/fa'
import { useState } from 'react'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';


const Header = () => {
  const [input, setInput] = useState("")
const [startDate, setStartDate] = useState(new Date())
const [endDate, setEndDate] = useState(new Date())
  const selectionRange = {
    startDate ,
    endDate ,
    key: 'selection',
  }

  const handleDate = (ranges) => {
setStartDate(ranges.selection.startDate);
setEndDate(ranges.selection.endDate);
  }

  return (
    <header className=' sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10'>
      {/* Left */}
      <div className='h-8  relative cursor-pointer'>
        <Image src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c513.png' fill objectFit='contain' objectPosition='left' />
      </div>
      {/* Middle */}
      <div className='flex items-center md:border-2 rounded-full p-1 border-gray-400 md:shadow-sm'>
        <input value={input} onChange={e=>setInput(e.target.value)}  placeholder='start your search ..' className='flex-grow text-xs md:text-sm outline-none bg-transparent ml-3 placeholder:text-gray-400 text-gray-600'/>
        <BiSearchAlt2 size={20} className='bg-red-500 text-white rounded-full p-1 hidden md:inline-flex cursor-pointer' />
      </div>
      {/* right */}
      <div className='flex items-center justify-end md:space-x-4 space-x-2 text-gray-500'>
        <div><p className='hidden md:inline'>Airbnd your home</p></div>
        <div><FiGlobe /></div>
        <div className='flex border-2 rounded-full p-1 space-x-2'> 
          <BiMenu size={20} />
          <FaUserCircle size={20} />
        </div>
      </div>
     {input && <div>
      <DateRangePicker ranges={[selectionRange]} minDate={new Date()} onChange={handleDate} rangeColors={["#FD5B61"]} />
      </div>}
    </header>
  )
}

export default Header
