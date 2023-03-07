import Image from 'next/image'
import React from 'react'

const SmallCard = ({id,img,locaton,time}) => {
  return (
    <div key={id} className="max-w-sm bg-white border h-88 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
    <a href="#">
        <div className='relative h-64'>

      <Image className="rounded-t-lg " fill  src={img} alt={locaton} />
        </div>
    </a>
    <div className="p-5">
      <a href="#">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{locaton}</h5>
      </a>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{time} </p>
     
    </div>
  </div>
  )
}

export default SmallCard
