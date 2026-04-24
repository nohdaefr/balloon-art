import { Check } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const PLANS = [
  {
    name: 'ברונזה',
    price: '650',
    color: 'border-orange-300',
    badge: 'bg-orange-100 text-orange-700',
    btn: 'border-2 border-orange-400 text-orange-600 hover:bg-orange-400 hover:text-white',
    features: ['עד 30 אורחים', 'עיצוב בסיסי', '3 בלוני מספרים', 'שעת הכנה', 'תמונות לאחר ההתקנה'],
  },
  {
    name: 'כסף',
    price: '1,100',
    color: 'border-gray-400',
    badge: 'bg-gray-100 text-gray-700',
    btn: 'border-2 border-gray-400 text-gray-600 hover:bg-gray-500 hover:text-white',
    features: ['עד 60 אורחים', 'עיצוב בינוני', 'קשת בלונים', '2 עמודי בלונים', 'שעתיים הכנה', 'תמיכה טלפונית'],
  },
  {
    name: 'זהב',
    price: '1,900',
    color: 'border-primary',
    badge: 'bg-primary text-white',
    btn: 'bg-primary hover:bg-primary-dk text-white shadow-primary',
    popular: true,
    features: ['עד 120 אורחים', 'עיצוב פרימיום', 'קשת + עמודים', 'עיצוב שולחן כבוד', '3 שעות הכנה', 'צילום מקצועי', 'תמיכה 24/7'],
  },
  {
    name: 'פלטינום',
    price: '3,200',
    color: 'border-accent',
    badge: 'bg-accent text-white',
    btn: 'bg-accent hover:bg-purple-700 text-white',
    features: ['ללא הגבלת אורחים', 'עיצוב VIP מלא', 'כל הקשתות והעמודים', 'עיצוב תקרה מלא', 'צוות 2 אנשים', 'צילום + עריכה', 'תמיכה מלאה', 'ייעוץ חינם'],
  },
]

export default function Packages() {
  const [ref, visible] = useScrollAnimation()

  return (
    <section id="packages" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className={`text-center mb-12 fade-in-hidden ${visible ? 'fade-in-visible' : ''}`}>
          <span className="text-primary text-xs font-bold tracking-[.2em] uppercase">מחירים שקופים</span>
          <h2 className="font-display font-black text-ink mt-2 text-3xl sm:text-4xl">חבילות לכל תקציב</h2>
          <div className="h-1 w-14 bg-primary rounded-full mx-auto mt-4" />
          <p className="text-ink-lt mt-4 max-w-lg mx-auto">בחר את החבילה המתאימה לך — ניתן להתאים אישית כל פרט</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PLANS.map(plan => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border-2 ${plan.color} bg-white p-6 flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${plan.popular ? 'shadow-lg scale-[1.02]' : 'shadow-card'}`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-primary whitespace-nowrap">
                    ✨ הכי פופולרי
                  </span>
                </div>
              )}

              <div className={`inline-block self-start text-xs font-bold px-3 py-1 rounded-full mb-4 ${plan.badge}`}>
                {plan.name}
              </div>

              <div className="mb-5">
                <span className="text-3xl font-black text-ink">₪{plan.price}</span>
                <span className="text-ink-lt text-sm"> / אירוע</span>
              </div>

              <ul className="space-y-2.5 flex-1 mb-6">
                {plan.features.map(f => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-ink-md">
                    <Check size={15} className="text-primary flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#footer"
                className={`block text-center py-3 rounded-full text-sm font-bold transition-all duration-200 ${plan.btn}`}
              >
                בחר חבילה
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
