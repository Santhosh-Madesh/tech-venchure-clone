import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ClientSection from './components/ClientSection'
import ServiceSection from './components/ServiceSection'
import AboutSection from './components/AboutSection'
import ValueSection from './components/ValueSection'
import ExpertiseSection from './components/ExpertiseSection'
import { Testimonials } from './components/Testimonials'
import { Revolutionary } from './components/Revolutionary'
import { FAQ } from './components/FAQ'
import { Banner } from './components/Banner'
import { Footer } from './components/Footer'
import { ContactForm } from './components/ContactForm'
import './App.css'

export default function App() {

  return(
    <div className='font-creato'>
      <Navbar/>
      <HeroSection/>
      <ClientSection/>
      <ServiceSection/>
      <AboutSection/>
      <ValueSection/>
      <ExpertiseSection/>
      <Testimonials />
      <Revolutionary />
      <FAQ />
      <Banner/>
      <ContactForm />
      <Footer/>
    </div>
  )
}
  