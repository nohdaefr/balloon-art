import { useState } from 'react'
import { MessageCircle } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const EVENT_TYPES = [
  { id: 'birthday',   label: 'יום הולדת',       base: 650  },
  { id: 'wedding',    label: 'חתונה / אירוסין', base: 1900 },
  { id: 'barmitzvah', label: 'בר / בת מצווה',  base: 1250 },
  { id: 'corporate',  label: 'אירוע עסקי',      base: 1450 },
  { id: 'brit',       label: 'ברית / בת שבע',   base: 750  },
  { id: 'other',      label: 'אחר',              base: 800  },
]
const SIZES = [
  { id: 'small',  label: 'קטן — עד 30 אורחים',    mult: 1.0  },
  { id: 'medium', label: 'בינוני — 30–100 אורחים', mult: 1.65 },
  { id: 'large',  label: 'גדול — 100+ אורחים',    mult: 2.5  },
]
const EXTRAS = [
  { id: 'arch',    label: 'קשת בלונים',      add: 420 },
  { id: 'columns', label: 'עמודי בלונים',    add: 260 },
  { id: 'numbers', label: 'מספרים / אותיות', add: 380 },
  { id: 'ceiling', label: 'עיצוב תקרה',      add: 620 },
]
const WA_NUM = '972533429376'

export default function Calculator() {
  const [eventType, setEventType] = useState('birthday')
  const [size,      setSize]      = useState('small')
  const [extras,    setExtras]    = useState([])
  const [ref, visible]            = useScrollAnimation()

  const base      = EVENT_TYPES.find(e => e.id === eventType)?.base ?? 0
  const mult      = SIZES.find(s => s.id === size)?.mult ?? 1
  const extrasSum = extras.reduce((sum, id) => sum + (EXTRAS.find(e => e.id === id)?.add ?? 0), 0)
  const minPrice  = Math.ceil((base * mult + extrasSum) / 50) * 50
  const maxPrice  = Math.ceil((minPrice * 1.35) / 50) * 50

  const waText = encodeURIComponent(`שלום! הערכה שקיבלתי: ₪${minPrice.toLocaleString()}–₪${maxPrice.toLocaleString()} 🎈`)

  function toggleExtra(id) {
    setExtras(prev => prev.includes(id) ? prev.filter(e => e !== id) : [...prev, id])
  }

  return (
    <section id="calculator" className="py-20 bg-surface-alt">
      <div className="max-w-5xl mx-auto px-6">
        <div ref={ref} className={`fade-in-hidden ${visible ? 'fade-in-visible' : ''}`}>
          <div className="text-center mb-10">
            <span className="text-primary text-xs font-bold tracking-[.2em] uppercase">כמה זה עולה?</span>
            <h2 className="font-display font-black text-ink mt-2 text-3xl sm:text-4xl">מחשבון הערכת מחיר</h2>
            <div className="h-1 w-14 bg-primary rounded-full mx-auto mt-4" />
          </div>

          <div className="bg-white rounded-3xl shadow-card p-7 lg:p-10">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-ink mb-3">סוג האירוע</label>
                  <div className="grid grid-cols-2 gap-2">
                    {EVENT_TYPES.map(e => (
                      <button key={e.id} onClick={() => setEventType(e.id)}
                        className={`py-2.5 px-3 rounded-xl text-sm font-medium transition-all ${
                          eventType === e.id ? 'bg-primary text-white shadow-primary' : 'bg-gray-50 text-ink-md hover:bg-primary-bg hover:text-primary border border-gray-200'
                        }`}>
                        {e.label}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-ink mb-3">גודל האירוע</label>
                  <div className="space-y-2">
                    {SIZES.map(s => (
                      <button key={s.id} onClick={() => setSize(s.id)}
                        className={`w-full text-right py-3 px-4 rounded-xl text-sm font-medium transition-all ${
                          size === s.id ? 'bg-primary text-white shadow-primary' : 'bg-gray-50 text-ink-md hover:bg-primary-bg hover:text-primary border border-gray-200'
                        }`}>
                        {s.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-ink mb-3">
                    תוספות <span className="font-normal text-ink-lt">(ניתן לבחור כמה)</span>
                  </label>
                  <div className="space-y-2">
                    {EXTRAS.map(ex => {
                      const on = extras.includes(ex.id)
                      return (
                        <button key={ex.id} onClick={() => toggleExtra(ex.id)}
                          className={`w-full flex items-center justify-between py-3 px-4 rounded-xl text-sm transition-all ${
                            on ? 'bg-primary-bg border-2 border-primary text-ink font-semibold' : 'bg-gray-50 text-ink-md border border-gray-200 hover:border-primary hover:text-primary'
                          }`}>
                          <span>{ex.label}</span>
                          <span className={`font-bold ${on ? 'text-primary' : 'text-ink-lt'}`}>+₪{ex.add.toLocaleString()}</span>
                        </button>
                      )
                    })}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-primary to-primary-dk rounded-2xl p-6 text-white">
                  <p className="text-xs text-white/70 uppercase tracking-widest mb-2">הערכת מחיר</p>
                  <div className="font-display font-black text-3xl">
                    ₪{minPrice.toLocaleString()} – ₪{maxPrice.toLocaleString()}
                  </div>
                  <p className="text-[11px] text-white/60 mt-2">הערכה בלבד. המחיר הסופי נקבע בייעוץ חינמי.</p>
                  <a
                    href={`https://wa.me/${WA_NUM}?text=${waText}`}
                    target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full mt-4 py-3 bg-[#25D366] hover:bg-[#1ebe5d] rounded-xl text-sm font-bold transition-colors"
                  >
                    <MessageCircle size={16} />
                    שלח הצעת מחיר בוואטסאפ
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
