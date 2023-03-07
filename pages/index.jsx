import Head from 'next/head'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Data from '../Data.json'
import SmallCard from '../components/SmallCard'
const Home= () => {
  console.log(Data)
  return (
    <>
      <Head>
        <title>AirBnB</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
<Header />
     <Banner />
     <main className='max-w-7xl mx-auto px-8 sm:px-16'>
      <section className='pt-6'>
        <h1 className='text-4xl font-semibold pb-5'>Explore Nearby</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {Data.map(({id,img,locaton,time})=>(
            

          <SmallCard key={id} img={img} locaton={locaton} time={time} />
         
        ) )}</div>
      </section>
     </main>

    </>
  )
}

export default Home



