import Navbar     from './components/Navbar'
import Hero       from './components/Hero'
import Services   from './components/Services'
import Gallery    from './components/Gallery'
import Packages   from './components/Packages'
import Trust      from './components/Trust'
import Calculator from './components/Calculator'
import Footer     from './components/Footer'

export default function App() {
  return (
    <div className="font-sans bg-surface min-h-screen" dir="rtl">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <Packages />
        <Trust />
        <Calculator />
      </main>
      <Footer />
    </div>
  )
}
