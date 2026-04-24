import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Phone, ChevronDown, ArrowLeft } from 'lucide-react'

const DROPDOWNS = [
  {
    id:    'business',
    label: 'אירועים עסקיים',
    items: [
      { label: 'פתיחת סניף חדש',               emoji: '🏪', to: '/category/branch-opening' },
      { label: 'אירועי חברה',                   emoji: '🏢', to: '/category/corporate'      },
      { label: 'אירועי השקה',                   emoji: '🚀', to: '/category/launch'         },
      { label: 'מיתוג עסקי — כנסים / ימי עיון', emoji: '🎯', to: '/category/branding'       },
    ],
  },
  {
    id:    'private',
    label: 'אירועים פרטיים',
    items: [
      { label: 'חתונות',         emoji: '💍', to: '/category/wedding'     },
      { label: 'בר / בת מצווה', emoji: '✡️', to: '/category/bar-mitzvah' },
      { label: 'ברית / בריתה',  emoji: '🍼', to: '/category/brit'        },
      { label: 'הצעת נישואין',  emoji: '💐', to: '/category/proposal'    },
      { label: 'חלאקה',          emoji: '✂️', to: '/category/chalaka'     },
      { label: 'ימי הולדת',     emoji: '🎂', to: '/category/birthday'    },
    ],
  },
]

const PLAIN_LINKS = [
  { label: 'גלריה',   href: '#gallery'    },
  { label: 'חבילות',  href: '#packages'   },
  { label: 'מחשבון',  href: '#calculator' },
  { label: 'צור קשר', href: '#footer'     },
]

/* ══════════════════════════════
   Desktop Dropdown
══════════════════════════════ */
function DesktopDropdown({ id, label, items }) {
  const [open, setOpen] = useState(false)
  const ref             = useRef(null)
  const timer           = useRef(null)

  function enter() { clearTimeout(timer.current); setOpen(true) }
  function leave() { timer.current = setTimeout(() => setOpen(false), 130) }

  useEffect(() => {
    if (!open) return
    const fn = (e) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('keydown', fn)
    return () => document.removeEventListener('keydown', fn)
  }, [open])

  return (
    <div className="relative" ref={ref} onMouseEnter={enter} onMouseLeave={leave}>

      {/* trigger */}
      <button
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen(v => !v)}
        className={`flex items-center gap-1 text-sm font-semibold transition-colors duration-150 pb-0.5 border-b-2 ${
          open
            ? 'text-primary border-primary'
            : 'text-ink border-transparent hover:text-primary hover:border-primary'
        }`}
      >
        {label}
        <ChevronDown
          size={14}
          className={`transition-transform duration-200 mt-px ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {/* dropdown panel */}
      {open && (
        <div
          id={`dd-${id}`}
          role="menu"
          className="absolute top-full mt-3 right-0 min-w-[240px] bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-50 animate-fadeDown"
          onMouseEnter={enter}
          onMouseLeave={leave}
        >
          {/* accent bar */}
          <div className="h-0.5 bg-gradient-to-l from-transparent via-primary/40 to-transparent mx-4 mb-2" />

          {items.map(({ label: l, emoji, to }) => (
            <Link
              key={l}
              to={to}
              role="menuitem"
              onClick={() => setOpen(false)}
              className="group flex items-center gap-3 px-4 py-2.5 text-sm text-ink-md hover:text-primary hover:bg-primary-bg transition-colors duration-100 mx-1 rounded-xl"
            >
              <span className="text-base w-6 text-center flex-shrink-0">{emoji}</span>
              <span className="flex-1">{l}</span>
              <ArrowLeft
                size={13}
                className="opacity-0 group-hover:opacity-100 text-primary transition-opacity -translate-x-1 group-hover:translate-x-0 duration-200"
              />
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

/* ══════════════════════════════
   Mobile Accordion
══════════════════════════════ */
function MobileAccordion({ label, items, onClose }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        className="w-full flex items-center justify-between py-4 text-base font-semibold text-ink"
        onClick={() => setOpen(v => !v)}
        aria-expanded={open}
      >
        <span className={open ? 'text-primary' : ''}>{label}</span>
        <ChevronDown
          size={18}
          className={`text-ink-lt transition-transform duration-250 ${open ? 'rotate-180 text-primary' : ''}`}
        />
      </button>

      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <ul className="pb-3 space-y-0.5">
          {items.map(({ label: l, emoji, to }) => (
            <li key={l}>
              <Link
                to={to}
                onClick={onClose}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-ink-md hover:text-primary hover:bg-primary-bg transition-colors"
              >
                <span className="text-base w-6 text-center">{emoji}</span>
                {l}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

/* ══════════════════════════════
   Navbar ראשי
══════════════════════════════ */
export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled,   setScrolled]   = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-white/96 shadow-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">

          {/* לוגו */}
          <a href="#" aria-label="בלון ארט — עמוד הבית" className="flex-shrink-0">
            <span className="font-display text-2xl font-black leading-none">
              <span className="text-primary">בלון</span>
              <span className="text-ink">ארט</span>
            </span>
          </a>

          {/* ── Desktop Nav ── */}
          <nav className="hidden md:flex items-center gap-6" aria-label="ניווט ראשי">
            {DROPDOWNS.map(d => <DesktopDropdown key={d.id} {...d} />)}
            {PLAIN_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-sm font-semibold text-ink-md hover:text-primary border-b-2 border-transparent hover:border-primary pb-0.5 transition-all duration-150"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* ── Desktop CTA ── */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+972533429376"
              className="flex items-center gap-1.5 text-sm text-ink-lt hover:text-primary transition-colors"
            >
              <Phone size={14} />
              <span dir="ltr">053-342-9376</span>
            </a>
            <a
              href="#footer"
              className="bg-primary hover:bg-primary-dk text-white text-sm font-bold px-5 py-2.5 rounded-full transition-colors shadow-primary whitespace-nowrap"
            >
              הזמן עכשיו
            </a>
          </div>

          {/* ── Hamburger ── */}
          <button
            className="md:hidden p-2 text-ink hover:text-primary rounded-lg transition-colors"
            onClick={() => setMobileOpen(v => !v)}
            aria-label={mobileOpen ? 'סגור תפריט' : 'פתח תפריט'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* ── Mobile Menu ── */}
      <div className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${mobileOpen ? 'visible' : 'invisible'}`}>
        <div
          className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${mobileOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
        <div className={`absolute top-16 inset-x-0 bg-white shadow-2xl max-h-[85dvh] overflow-y-auto transition-all duration-300 ${
          mobileOpen ? 'translate-y-0 opacity-100' : '-translate-y-3 opacity-0'
        }`}>
          <nav className="px-5 pt-2 pb-1" aria-label="ניווט נייד">
            {DROPDOWNS.map(d => (
              <MobileAccordion
                key={d.id}
                label={d.label}
                items={d.items}
                onClose={() => setMobileOpen(false)}
              />
            ))}
            {PLAIN_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="flex items-center py-4 text-base font-semibold text-ink hover:text-primary border-b border-gray-100 last:border-0 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {label}
              </a>
            ))}
          </nav>
          <div className="px-5 py-5 border-t border-gray-100 space-y-3">
            <a href="tel:+972533429376" className="flex items-center gap-2 text-sm text-ink-lt">
              <Phone size={14} className="text-primary" />
              <span dir="ltr">053-342-9376</span>
            </a>
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
    </>
  )
}
