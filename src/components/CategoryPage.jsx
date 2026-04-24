/*
  ══════════════════════════════════════════════════════
  TEMPLATE — דף נחיתה לקטגוריה
  משתמש בנתונים מ-src/data/categories.js
  כל הקטגוריות משתמשות בתבנית זו.
  ══════════════════════════════════════════════════════
*/
import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowRight, Check, Phone, Send } from 'lucide-react'
import { getCategoryBySlug } from '../data/categories'

const WA_NUM = '972533429376'

/* ── גלריית Masonry ── */
function MasonryGallery({ images }) {
  const heights = ['h-56', 'h-72', 'h-64', 'h-80', 'h-60', 'h-68']
  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
      {images.map((src, i) => (
        <div
          key={i}
          className={`relative break-inside-avoid ${heights[i % heights.length]} rounded-2xl overflow-hidden mb-4 group cursor-pointer shadow-card`}
        >
          <img
            src={src}
            alt=""
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 brightness-95 saturate-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      ))}
    </div>
  )
}

/* ── טופס הצעת מחיר ── */
function QuoteForm({ categoryLabel }) {
  const [form, setForm] = useState({ name: '', phone: '', date: '', guests: '', notes: '' })
  const [sent, setSent] = useState(false)

  function update(e) { setForm(p => ({ ...p, [e.target.name]: e.target.value })) }

  function handleSubmit(e) {
    e.preventDefault()
    const msg = encodeURIComponent(
      `שלום! אני מעוניין/ת בהצעת מחיר ל${categoryLabel}.\n` +
      `שם: ${form.name}\n` +
      `טלפון: ${form.phone}\n` +
      `תאריך: ${form.date}\n` +
      `מס׳ אורחים: ${form.guests}\n` +
      `פרטים נוספים: ${form.notes}`
    )
    window.open(`https://wa.me/${WA_NUM}?text=${msg}`, '_blank')
    setSent(true)
  }

  if (sent) return (
    <div className="text-center py-12">
      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <Check size={28} className="text-green-600" />
      </div>
      <h3 className="font-bold text-ink text-xl mb-2">נשלח בהצלחה!</h3>
      <p className="text-ink-md">נחזור אליך בהקדם האפשרי.</p>
    </div>
  )

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-ink mb-1.5">שם מלא *</label>
          <input
            name="name" value={form.name} onChange={update} required
            placeholder="ישראל ישראלי"
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-ink mb-1.5">טלפון *</label>
          <input
            name="phone" value={form.phone} onChange={update} required type="tel"
            placeholder="050-0000000" dir="ltr"
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-ink mb-1.5">תאריך האירוע</label>
          <input
            name="date" value={form.date} onChange={update} type="date"
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-ink mb-1.5">מספר אורחים</label>
          <select
            name="guests" value={form.guests} onChange={update}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors bg-white"
          >
            <option value="">בחר...</option>
            <option>עד 30</option>
            <option>30–100</option>
            <option>100–300</option>
            <option>300+</option>
          </select>
        </div>
      </div>
      <div>
        <label className="block text-sm font-semibold text-ink mb-1.5">פרטים נוספים / בקשות מיוחדות</label>
        <textarea
          name="notes" value={form.notes} onChange={update} rows={3}
          placeholder="ספר/י לנו על האירוע, צבעים מועדפים, רעיונות..."
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors resize-none"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-primary hover:bg-primary-dk text-white font-bold py-4 rounded-xl transition-colors shadow-primary flex items-center justify-center gap-2 text-sm"
      >
        <Send size={16} />
        שלח הצעת מחיר בוואטסאפ
      </button>
      <p className="text-center text-xs text-ink-lt">ניצור קשר תוך 24 שעות · ללא התחייבות</p>
    </form>
  )
}

/* ════════════════════════════════════
   MAIN — דף הקטגוריה
════════════════════════════════════ */
export default function CategoryPage() {
  const { id } = useParams()
  const cat     = getCategoryBySlug(`/category/${id}`)

  if (!cat) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <p className="text-4xl mb-4">🎈</p>
        <h2 className="font-bold text-ink text-xl mb-2">הדף לא נמצא</h2>
        <Link to="/" className="text-primary hover:underline text-sm">חזור לעמוד הראשי</Link>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-white">

      {/* ── Hero ── */}
      <div className="relative h-[50vh] min-h-[380px] flex items-end overflow-hidden">
        <img
          src={cat.hero.img}
          alt={cat.hero.title}
          className="absolute inset-0 w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 pb-12 w-full">
          {/* breadcrumb */}
          <div className="flex items-center gap-2 text-white/70 text-sm mb-4">
            <Link to="/" className="hover:text-white transition-colors">ראשי</Link>
            <ArrowRight size={13} />
            <span className="text-white">{cat.label}</span>
          </div>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-4xl">{cat.emoji}</span>
            <h1 className="font-display font-black text-white text-4xl sm:text-5xl leading-tight">
              {cat.hero.title}
            </h1>
          </div>
          <p className="text-white/80 text-lg max-w-xl">{cat.hero.subtitle}</p>
        </div>
      </div>

      {/* ── Content ── */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-12">

          {/* עמודה ראשית (גלריה + טקסט) */}
          <div className="lg:col-span-2 space-y-12">

            {/* טקסט שיווקי */}
            <div className="bg-primary-bg rounded-2xl p-7 border border-pink-100">
              <h2 className="font-display font-black text-ink text-2xl mb-4">
                {cat.emoji} למה לבחור בנו ל{cat.label}?
              </h2>
              <p className="text-ink-md leading-relaxed text-base mb-6">{cat.pitch}</p>
              <ul className="grid sm:grid-cols-2 gap-3">
                {cat.features.map(f => (
                  <li key={f} className="flex items-center gap-2.5 text-sm font-medium text-ink">
                    <span className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Check size={11} className="text-white" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* גלריה */}
            <div>
              <h2 className="font-display font-black text-ink text-2xl mb-6">
                📸 עבודות נבחרות — {cat.label}
              </h2>
              <MasonryGallery images={cat.gallery} />
            </div>
          </div>

          {/* סרגל צד — טופס */}
          <div className="lg:col-span-1">
            <div className="sticky top-20">
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
                <div className="text-center mb-6">
                  <span className="text-3xl">{cat.emoji}</span>
                  <h3 className="font-bold text-ink text-lg mt-2">הצעת מחיר מהירה</h3>
                  <p className="text-ink-lt text-sm mt-1">ל{cat.label} — ללא עלות</p>
                </div>
                <div className="h-px bg-gradient-to-l from-transparent via-primary/30 to-transparent mb-6" />
                <QuoteForm categoryLabel={cat.label} />
              </div>

              {/* CTA טלפון */}
              <div className="mt-4 bg-ink rounded-2xl p-5 text-center text-white">
                <p className="text-sm text-white/70 mb-2">מעדיף/ה לדבר?</p>
                <a
                  href="tel:+972533429376"
                  className="flex items-center justify-center gap-2 font-bold text-lg hover:text-primary transition-colors"
                >
                  <Phone size={18} />
                  <span dir="ltr">053-342-9376</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
