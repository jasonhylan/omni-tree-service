import './App.css'
import { initScrollTrigger } from './gsapUtils'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Philosophy from './components/Philosophy'
import Protocol from './components/Protocol'
import GetStarted from './components/GetStarted'
import Footer from './components/Footer'

// Initialize ScrollTrigger safely at module level
try { initScrollTrigger() } catch (e) {}

export default function App() {
  return (
    <div style={{ background: '#0D0D12', minHeight: '100vh' }}>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Philosophy />
        <Protocol />
        <GetStarted />
      </main>
      <Footer />
    </div>
  )
}
