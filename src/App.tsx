
import './App.css'
import BusinessSolutions from './components/business-solutions'
import FAQSection from './components/faq-section'
import FooterSection from './components/footer'
import Header from './components/header'
import Hero from './components/hero'
import OilAndGasSection from './components/oil-and-gas'
import SolarEnergySection from './components/solar-energy'
import { ThemeProvider } from "./components/theme-provider"

function App() {


  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Header />
      <Hero />
      <OilAndGasSection />
      <SolarEnergySection />
      <BusinessSolutions />
      <FAQSection />
      <FooterSection />
    </ThemeProvider>
  )
}

export default App
