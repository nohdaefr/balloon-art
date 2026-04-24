import { Award, Sparkles, Heart, ShieldCheck } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const FEATURES = [
  { Icon: Award,       title: 'חומרים פרימיום',    desc: 'בלוני Qualatex® — הברק והגמישות הטובים בתעשייה.', color: 'text-amber-500', bg: 'bg-amber-50' },
  { Icon: Sparkles,    title: 'עיצוב ייחודי',       desc: 'קונספט עיצובי מאפס לכל הזמנה.',                   color: 'text-purple-500', bg: 'bg-purple-50' },
  { Icon: Heart,       title: 'שירות אישי',          desc: 'ייעוץ צבעים, דגמים ומיקום — מהפגישה הראשונה.',    color: 'text-primary',    bg: 'bg-primary-bg' },
  { Icon: ShieldCheck, title: 'התקנה מקצועית',      desc: 'מגיעים מוקדם, מתקינים בקפידה.',                    color: 'text-blue-500',   bg: 'bg-blue-50' },
]

export default function Quality() {
  const [ref, visible]   = useScrollAnimation()
  const [ref2, visible2] = useScrollAnimation()

  return (
    <section id="quality" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div ref={ref} className={`fade-in-hidden ${visible ? 'fade-in-visible' : ''}`}>
            <span className="text-primary text-xs font-bold tracking-[.2em] uppercase">למה לבחור בנו</span>
            <h2 className="font-display font-black text-ink mt-2 text-3xl sm:text-4xl leading-tight">
              לא סתם בלון —
              <span className="block text-primary">חוויה שמגעת בלב.</span>
            </h2>
            <div className="h-1 w-14 bg-primary rounded-full mt-4 mb-6" />
            <p className="text-ink-md leading-relaxed">
              אנחנו משתמשים אך ורק ב-<strong className="text-ink">Qualatex®</strong> — המותג המוביל בעולם לבלוני latex. כל הצבעים נבחרים יחד עם הלקוח וכל קשירה נעשית ביד.
            </p>
            <a href="#packages" className="inline-block mt-6 bg-primary hover:bg-primary-dk text-white px-7 py-3 rounded-full text-sm font-bold transition-colors shadow-primary">
              לחבילות ומחירים
            </a>
          </div>

          <div ref={ref2} className={`grid grid-cols-2 gap-4 fade-in-hidden ${visible2 ? 'fade-in-visible' : ''}`} style={{ transitionDelay: '150ms' }}>
            {FEATURES.map(({ Icon, title, desc, color, bg }) => (
              <div key={title} className="bg-white rounded-2xl p-5 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                <div className={`w-10 h-10 ${bg} rounded-xl flex items-center justify-center mb-3`}>
                  <Icon size={20} className={color} />
                </div>
                <h3 className="font-bold text-ink text-sm mb-1">{title}</h3>
                <p className="text-xs text-ink-lt leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
