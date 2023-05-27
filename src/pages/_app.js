import '@/styles/globals.css'
import Header from '@/components/Layout/header'
import Footer from '@/components/Layout/Footer'

export default function App({ Component, pageProps }) {
  return (
    <div className='min-h-screen flex flex-col'>
      <Header/>
        <Component {...pageProps} />
       <Footer className="mt-auto"/>
    </div>
  )
}
