import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Philosophy from './components/Philosophy'
import Protocol from './components/Protocol'
import CTASection from './components/CTASection'
import Footer from './components/Footer'

function App() {
  return (
    <div style={{ fontFamily: 'var(--font-sans)', background: 'var(--linen)', overflowX: 'hidden' }}>
      <Navbar />
      <Hero />
      <Features />
      <Philosophy />
      <Protocol />
      <CTASection />
      <Footer />
    </div>
  )
}

export default App
