import { useState, useEffect } from 'react'
import { Menu, X, Phone, ChevronDown, ShoppingBag } from 'lucide-react'

const NAV_LINKS = [
  { label: 'ראשי',      href: '#hero' },
  { label: 'שירותים',   href: '#services' },
  { label: 'גלריה',     href: '#gallery' },
  { label: 'חבילות',    href: '#packages' },
  { label: 'מחשבון',    href: '#calculator' },
  { label: 'צור קשר',   href: '#footer' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled,   setScrolled]   = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-white/95 shadow-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">

          {/* לוגו */}
          <a href="#" className="flex-shrink-0">
            <span className="font-display text-2xl font-black">
              <span className="text-primary">בלון</span>
              <span className="text-ink">ארט</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-sm font-medium text-ink-md hover:text-primary transition-colors"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a href="tel:+972501234567" className="flex items-center gap-1.5 text-sm text-ink-lt hover:text-primary transition-colors">
              <Phone size={14} />
              <span dir="ltr">050-123-4567</span>
            </a>
            <a
              href="#footer"
              className="bg-primary hover:bg-primary-dk text-white text-sm font-bold px-5 py-2.5 rounded-full transition-colors shadow-primary"
            >
              הזמן עכשיו
            </a>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden p-2 text-ink hover:text-primary transition-colors"
            onClick={() => setMobileOpen(v => !v)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setMobileOpen(false)} />
          <div className="absolute top-16 inset-x-0 bg-white shadow-xl max-h-[85dvh] overflow-y-auto">
            <nav className="px-5 py-4 space-y-1">
              {NAV_LINKS.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="block py-3 text-base font-medium text-ink hover:text-primary border-b border-gray-100 last:border-0 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {label}
                </a>
              ))}
            </nav>
            <div className="px-5 py-4 border-t border-gray-100">
              <a
                href="#footer"
                className="block bg-primary hover:bg-primary-dk text-white text-center py-3.5 rounded-full text-sm font-bold transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                הזמן עכשיו
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
