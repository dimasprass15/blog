import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Menu from "../components/Menu"
import Footer from "../components/Footer"


export default function index() {
  return (
    <div>
      <div className='container'>
        <div className='Header'>
          <Navbar />
          

          <p className='Down'>
            Dimas Prassetya
          </p>
        </div>

        <div className="kaki">
          <Footer />
        </div>

      </div>
    </div>
  )
}
