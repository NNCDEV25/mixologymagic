import './index.css'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import Products from './components/Products.jsx'
import Booking from './components/Booking.jsx'
import Payment from './components/Payment.jsx'
import Links from './components/Links.jsx'
import Footer from './components/Footer.jsx'

function App(){
  return (
    <div className="app screencap-theme">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Products />
        <Booking />
        <Payment />
        <Links />
      </main>
      <Footer />
    </div>
  )
}

export default App
