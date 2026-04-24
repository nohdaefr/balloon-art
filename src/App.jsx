import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar       from './components/Navbar'
import Hero         from './components/Hero'
import Services     from './components/Services'
import Gallery      from './components/Gallery'
import Packages     from './components/Packages'
import Trust        from './components/Trust'
import Calculator   from './components/Calculator'
import Footer       from './components/Footer'
import CategoryPage from './components/CategoryPage'

function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Gallery />
      <Packages />
      <Trust />
      <Calculator />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="font-sans bg-surface min-h-screen" dir="rtl">
        <Navbar />
        <main>
          <Routes>
            <Route path="/"              element={<HomePage />} />
            <Route path="/category/:id"  element={<CategoryPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
