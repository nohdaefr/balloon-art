import { useScrollAnimation } from '../hooks/useScrollAnimation'

const SERVICES = [
  { emoji: '🎂', title: 'ימי הולדת',     desc: 'עיצובים צבעוניים ומרהיבים לכל גיל',      color: 'bg-pink-50',   border: 'border-pink-200',   img: 'https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=400&q=85&auto=format&fit=crop' },
  { emoji: '💒', title: 'חתונות',        desc: 'קשתות ועמודים אלגנטיים לאירוע חלומי',    color: 'bg-amber-50',  border: 'border-amber-200',  img: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=400&q=85&auto=format&fit=crop' },
  { emoji: '🎉', title: 'אירועי חברה',   desc: 'עיצוב מיתוגי מרשים לאירועי עסקים',       color: 'bg-blue-50',   border: 'border-blue-200',   img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&q=85&auto=format&fit=crop' },
  { emoji: '✡️', title: 'בר/בת מצווה',  desc: 'עיצובים מסורתיים ומרגשים לאירוע הגדול',  color: 'bg-purple-50', border: 'border-purple-200', img: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&q=85&auto=format&fit=crop' },
  { emoji: '🍼', title: 'ברית/בריתה',    desc: 'עיצובים עדינים לאירועים משפחתיים',        color: 'bg-sky-50',    border: 'border-sky-200',    img: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400&q=85&auto=format&fit=crop' },
  { emoji: '💍', title: 'אירוסין',        desc: 'רומנטיקה ויוקרה לרגע הבלתי נשכח',        color: 'bg-rose-50',   border: 'border-rose-200',   img: 'https://images.unsplash.com/photo-1561414927-6d86591d0c4f?w=400&q=85&auto=format&fit=crop' },
]

function ServiceCard({ s }) {
  return (
    <div className={`product-card rounded-2xl overflow-hidden border ${s.border} bg-white cursor-pointer`}>
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={s.img}
          alt={s.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className={`${s.color} p-5`}>
        <div className="flex items-center gap-3 mb-2">
          <span className="text-2xl">{s.emoji}</span>
          <h3 className="font-bold text-ink text-base">{s.title}</h3>
        </div>
        <p className="text-sm text-ink-md leading-relaxed">{s.desc}</p>
        <a href="#calculator" className="inline-block mt-3 text-primary text-sm font-bold hover:underline">
          למידע נוסף ←
        </a>
      </div>
    </div>
  )
}

export default function Services() {
  const [ref, visible] = useScrollAnimation()
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className={`text-center mb-12 fade-in-hidden ${visible ? 'fade-in-visible' : ''}`}>
          <span className="text-primary text-xs font-bold tracking-[.2em] uppercase">מה אנחנו מציעים</span>
          <h2 className="font-display font-black text-ink mt-2 text-3xl sm:text-4xl">השירותים שלנו</h2>
          <div className="h-1 w-14 bg-primary rounded-full mx-auto mt-4" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map(s => <ServiceCard key={s.title} s={s} />)}
        </div>
      </div>
    </section>
  )
}
