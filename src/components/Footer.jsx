import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react'

const WA_NUM  = '972533429376'
const WA_TEXT = encodeURIComponent('שלום! אני מעוניין/ת בעיצוב בלונים לאירוע שלי 🎈')

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer id="footer" className="bg-footer text-white">

      {/* CTA */}
      <div className="bg-gradient-to-l from-primary-dk to-primary py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display font-black text-3xl sm:text-4xl mb-4 text-white">
            מוכן להפוך את האירוע שלך לבלתי נשכח?
          </h2>
          <p className="text-white/80 mb-8 text-lg max-w-xl mx-auto">
            פנה אלינו לפגישת ייעוץ חינמית — נשמח לשמוע על החזון שלך.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/${WA_NUM}?text=${WA_TEXT}`}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#1ebe5d] text-white px-8 py-4 rounded-full text-sm font-bold transition-colors shadow-lg"
            >
              <WhatsAppIcon />
              שלח הודעה בוואטסאפ
            </a>
            <a href="tel:+972533429376"
              className="inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 text-white border border-white/30 px-8 py-4 rounded-full text-sm font-bold transition-all">
              <Phone size={16} />
              <span dir="ltr">053-342-9376</span>
            </a>
          </div>
        </div>
      </div>

      {/* Footer content */}
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* מותג */}
          <div className="lg:col-span-1">
            <span className="font-display text-2xl font-black block mb-4">
              <span className="text-primary-lt">בלון</span>ארט
            </span>
            <p className="text-sm text-white/45 leading-relaxed mb-5">
              עיצוב בלונים יוקרתי לאירועים מיוחדים. יצירתיות, דיוק, ואהבה אמיתית למלאכה.
            </p>
            <div className="flex gap-3">
              {[Instagram, Facebook].map((Icon, i) => (
                <a key={i} href="#"
                  className="w-9 h-9 bg-white/8 hover:bg-primary rounded-full flex items-center justify-center transition-colors text-white/60 hover:text-white">
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* שירותים */}
          <div>
            <h4 className="text-sm font-bold mb-4 text-white/70">שירותים</h4>
            <ul className="space-y-2 text-sm text-white/40">
              {['קשתות בלונים', 'עמודי בלונים', 'עיצוב תקרה', 'מספרים ואותיות', 'חבילות לאירועים'].map(s => (
                <li key={s}><a href="#services" className="hover:text-white transition-colors">{s}</a></li>
              ))}
            </ul>
          </div>

          {/* פרטי קשר */}
          <div>
            <h4 className="text-sm font-bold mb-4 text-white/70">פרטי קשר</h4>
            <ul className="space-y-3 text-sm text-white/40">
              <li><a href="tel:+972533429376" className="flex items-center gap-3 hover:text-white transition-colors"><Phone size={14} className="text-primary-lt" /><span dir="ltr">053-342-9376</span></a></li>
              <li><a href="mailto:info@ballonart.co.il" className="flex items-center gap-3 hover:text-white transition-colors"><Mail size={14} className="text-primary-lt" />info@ballonart.co.il</a></li>
              <li className="flex items-center gap-3"><MapPin size={14} className="text-primary-lt" />תל אביב-יפו, ישראל</li>
            </ul>
          </div>

          {/* שעות */}
          <div>
            <h4 className="text-sm font-bold mb-4 text-white/70">שעות פעילות</h4>
            <ul className="space-y-2 text-sm text-white/40">
              {[
                { d: 'ראשון–חמישי', h: '09:00–19:00' },
                { d: 'שישי',        h: '09:00–14:00' },
                { d: 'שבת',         h: 'סגור' },
              ].map(({ d, h }) => (
                <li key={d} className="flex justify-between gap-4">
                  <span>{d}</span><span dir="ltr">{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/8 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/25">
          <span>© {new Date().getFullYear()} בלון ארט. כל הזכויות שמורות.</span>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white/50 transition-colors">תנאי שימוש</a>
            <a href="#" className="hover:text-white/50 transition-colors">מדיניות פרטיות</a>
          </div>
        </div>
      </div>

      {/* WhatsApp floating */}
      <a
        href={`https://wa.me/${WA_NUM}?text=${WA_TEXT}`}
        target="_blank" rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#1ebe5d] text-white rounded-full flex items-center justify-center shadow-xl transition-all hover:scale-110"
        aria-label="WhatsApp"
      >
        <WhatsAppIcon />
      </a>
    </footer>
  )
}
