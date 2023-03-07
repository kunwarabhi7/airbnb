import Image from 'next/image'
import {BiSearchAlt2} from 'react-icons/bi'

const Header = () => {
  return (
    <header className=' sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10'>
      {/* Left */}
      <div className='h-10  relative cursor-pointer'>
        <Image src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c513.png' fill objectFit='contain' objectPosition='left' />
      </div>
      {/* Middle */}
      <div className='flex items-center md:border-2 rounded-full p-1 border-gray-400 md:shadow-sm'>
        <input  placeholder='start your search ..' className='flex-grow outline-none bg-transparent ml-3 placeholder:text-gray-400 text-gray-600'/>
        <BiSearchAlt2 size={20} className='bg-red-500 text-white rounded-full p-1 hidden md:inline-flex cursor-pointer' />
      </div>
      {/* right */}
      <div></div>
    </header>
  )
}

export default Header
