import Header from "../components/main-menu/Header"
import MainSection from "../components/main-menu/MainSection" 
import Head from 'next/head';

export default function Home() {
  return (
   
    <div className='app'>
       <Head>
        <title>Custom Neon</title>
        <meta property="og:title" content="Custom Neon" key="title" />
      </Head>
    <Header />
    <MainSection />

    </div>
  )
}
