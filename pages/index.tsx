import Head from 'next/head'
import Header from '../components/Header'
import Banner from '../components/Banner'
const Home= () => {
  return (
    <>
      <Head>
        <title>AirBnB</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
<Header />
     <Banner />

    </>
  )
}

export default Home
