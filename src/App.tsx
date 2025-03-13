
import './App.css'
import BusinessSolutions from './components/business-solutions'
import FAQSection from './components/faq-section'
import FooterSection from './components/footer'
import Header from './components/header'
import Hero from './components/hero'
import OilAndGasSection from './components/oil-and-gas'
import SolarEnergySection from './components/solar-energy'

function App() {


  return (
    <>
      <Header />
      <Hero />
      <OilAndGasSection />
      <SolarEnergySection />
      <BusinessSolutions />
      <FAQSection />
      <FooterSection />
    </>
  )
}

export default App
