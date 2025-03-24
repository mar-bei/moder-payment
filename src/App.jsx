import './index.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Counts from './components/Counts'
import Business from './components/Business'
import Bills from './components/Bills'
import Card from './components/Card'
import Testemonial from './components/Testemonial'
import Brands from './components/Brands'
import TryService from './components/TryService'
import Footer from './components/Footer'

function App() {

  return (
    <div className='bg-slate-950 h-[100vh] text-white overflow-x-hidden lg:overflow-hidden lg:h-full'>
      <Header />
      <Hero />
      <Counts />
      <Business />
      <Bills />
      <Card />
      <Testemonial />
      <Brands />
      <TryService />
      <Footer />
    </div>
  )
}

export default App
