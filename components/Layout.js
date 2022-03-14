import Head from 'next/head'
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Menu from "../components/Menu"
import Footer from "../components/Footer"
import Inspsi from "../components/Inspsi"


export default function Layout({ title, keywords, description, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='keywords' content={keywords} />
        <meta name='description' content={description} />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='container'>
        <div className='Header'>
          <Navbar />
          <Hero />
        </div>

        <div className="col-md-4">
          <Menu />
        </div>

        <div className="container">
          <Inspsi />
        </div>

        <div className="kaki">
          <Footer />
        </div>
      </div>
    </div>
  )
}

Layout.defaultProps = {
  title: 'Welcome to DevSpace',
  keywords: 'development, coding, programming',
  description: 'The best info and news in development',
}
