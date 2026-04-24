import { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const CATS = [
  { id: 'all',       label: 'הכל' },
  { id: 'private',   label: 'פרטי' },
  { id: 'corporate', label: 'עסקי' },
  { id: 'luxury',    label: 'יוקרה' },
]

const CARDS = [
  { id:1,  cat:'private',   title:'יום הולדת 30',    sub:'ורוד ♦ זהב',           img:'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=88&auto=format&fit=crop', h:'h-64' },
  { id:2,  cat:'luxury',    title:'חתונה בקיסריה',   sub:'שמפניה ♦ לבן',         img:'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=600&q=88&auto=format&fit=crop', h:'h-80' },
  { id:3,  cat:'corporate', title:'השקת מוצר',        sub:'מיתוג חברתי',          img:'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=88&auto=format&fit=crop', h:'h-60' },
  { id:4,  cat:'private',   title:'בר מצווה',         sub:'כחול ♦ לבן ♦ כסף',    img:'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&q=88&auto=format&fit=crop', h:'h-72' },
  { id:5,  cat:'luxury',    title:'ערב גאלה',         sub:'שחור ♦ זהב ♦ ניצוצות', img:'https://images.unsplash.com/photo-1478146059778-26264db3a6d3?w=600&q=88&auto=format&fit=crop', h:'h-96' },
  { id:6,  cat:'corporate', title:'כנס שנתי',         sub:'500 משתתפים',          img:'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&q=88&auto=format&fit=crop', h:'h-64' },
  { id:7,  cat:'private',   title:'ברית מילה',        sub:'לבן ♦ כחול בהיר',     img:'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=600&q=88&auto=format&fit=crop', h:'h-56' },
  { id:8,  cat:'luxury',    title:'New Year VIP',     sub:'גלאם ♦ שחור ♦ זהב',   img:'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=600&q=88&auto=format&fit=crop', h:'h-96' },
  { id:9,  cat:'corporate', title:'אירוע לקוחות',     sub:'מיתוג premium',        img:'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=600&q=88&auto=format&fit=crop', h:'h-64' },
  { id:10, cat:'private',   title:'בת מצווה',         sub:'סגול ♦ ורוד ♦ כסף',   img:'https://images.unsplash.com/photo-1471967183320-ee018f6e114a?w=600&q=88&auto=format&fit=crop', h:'h-80' },
  { id:11, cat:'luxury',    title:'אירוסין',           sub:'ורוד שמפניה ♦ זהב',   img:'https://images.unsplash.com/photo-1561414927-6d86591d0c4f?w=600&q=88&auto=format&fit=crop', h:'h-64' },
  { id:12, cat:'corporate', title:'חנוכת בית עסק',    sub:'מקצועי ♦ מרשים',      img:'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=88&auto=format&fit=crop', h:'h-72' },
]

function GalleryCard({ item }) {
  return (
    <div className={`gallery-card relative break-inside-avoid ${item.h} rounded-2xl overflow-hidden cursor-pointer mb-4 shadow-card`}>
      <img
        src={item.img}
        alt={item.title}
        loading="lazy"
        className="gallery-img absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
      <div className="absolute inset-0 flex flex-col justify-end p-4">
        <p className="text-white/70 text-[11px] font-semibold tracking-widest uppercase mb-1">{item.sub}</p>
        <h3 className="text-white font-bold text-sm leading-tight">{item.title}</h3>
      </div>
    </div>
  )
}

export default function Gallery() {
  const [active, setActive] = useState('all')
  const [ref, visible]      = useScrollAnimation()
  const filtered = active === 'all' ? CARDS : CARDS.filter(i => i.cat === active)

  return (
    <section id="gallery" className="py-20 bg-surface-alt">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className={`text-center mb-12 fade-in-hidden ${visible ? 'fade-in-visible' : ''}`}>
          <span className="text-primary text-xs font-bold tracking-[.2em] uppercase">הגלריה שלנו</span>
          <h2 className="font-display font-black text-ink mt-2 text-3xl sm:text-4xl">עבודות נבחרות</h2>
          <div className="h-1 w-14 bg-primary rounded-full mx-auto mt-4" />
          <p className="text-ink-lt mt-4 max-w-lg mx-auto">כל עיצוב נוצר בהתאמה אישית מלאה</p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {CATS.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                active === cat.id
                  ? 'bg-primary text-white shadow-primary'
                  : 'bg-white text-ink-md border border-gray-200 hover:border-primary hover:text-primary'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
          {filtered.map(item => <GalleryCard key={item.id} item={item} />)}
        </div>

        <div className="text-center mt-10">
          <a href="#footer" className="inline-flex items-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold px-8 py-3 rounded-full transition-all duration-200">
            צפה בכל הגלריה
          </a>
        </div>
      </div>
    </section>
  )
}
