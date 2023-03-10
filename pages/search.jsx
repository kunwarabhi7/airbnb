import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Search = () => {
  return (
    <div className=''>

<Header /> 
<main>
    <section className='my-4 p-2'>
        <p className='text-sm text-gray-500'>300+ Stays for 5 number of guests</p>
        <h1 className='text-2xl font-semibold'>Stays in Bhiwani</h1>
        <div className='flex flex-col space-y-2 md:flex-row md:space-x-6 mx-auto'>

        <button className='rounded-full py-2 px-4 border-2 transition hover:translate-y-1 ease-in-out duration-300 '>Cancellation Flexiblity</button>
        <button className='rounded-full py-2 px-4 border-2 transition hover:translate-y-1 ease-in-out duration-300 '>Types of place</button>
        <button className='rounded-full py-2 px-4 border-2 transition hover:translate-y-1 ease-in-out duration-300 '>Price</button>
        <button className='rounded-full py-2 px-4 border-2 transition hover:translate-y-1 ease-in-out duration-300 '>Rooms and Beds</button>
        <button className='rounded-full py-2 px-4 border-2 transition hover:translate-y-1 ease-in-out duration-300 '>More fliters</button>
        </div>
    </section>
</main>
<Footer />
    </div>
  )
}

export default Search
