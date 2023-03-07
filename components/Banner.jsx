import Image from 'next/image'
import React from 'react'

const Banner = () => {
  return (
    <div className='relative h-[300px] sm:h-[400px] md:h-[500px] lg:[h-600px] xl:h-[680px] ' >
      <Image src='https://a0.muscache.com/im/pictures/miso/Hosting-605371928419351152/original/c8f48e8b-091d-47ea-85ac-b31bc2604bbb.jpeg?im_w=720' fill objectFit='cover'/>
   <div className='absolute top-1/2 -mt-8 w-full text-center'>
    <p className='text-red-400 font-bold  text-sm sm:text-lg md:text-2xl'>Not sure where to go ? Perfect</p>
    <button className='text-cyan-500 bg-black rounded-full px-2 py-1 mt-2 shadow-md font-semibold cursor-pointer hover:shadow-2xl active:scale-90 transition duration-150'>Click me nigga</button>
   </div>
    </div>
  )
}

export default Banner
