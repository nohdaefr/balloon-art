import { ArrowDown, Star } from 'lucide-react'

export default function Hero() {
  return (
    <section id="hero" className="relative pt-16 overflow-hidden bg-gradient-to-br from-primary-bg via-white to-surface-alt min-h-screen flex items-center">

      {/* צורות רקע */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/8 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-accent/6 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 py-16 w-full grid lg:grid-cols-2 gap-12 items-center">

        {/* טקסט */}
        <div className="text-center lg:text-right">
          {/* ביקורות */}
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-card mb-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={13} className="text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span className="text-xs font-semibold text-ink-md">800+ לקוחות מרוצים</span>
          </div>

          <h1 className="font-display font-black text-ink leading-[1.1] mb-5"
            style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.2rem)' }}>
            עיצובי בלונים
            <span className="block text-primary">לכל אירוע מיוחד</span>
          </h1>

          <p className="text-ink-md text-lg leading-relaxed mb-8 max-w-md mx-auto lg:mx-0">
            קשתות בלונים, עמודים, עיטורי תקרה ועיצובים מותאמים אישית —
            לחתונות, ימי הולדת, אירועי חברה ועוד.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
            <a href="#gallery"
              className="bg-primary hover:bg-primary-dk text-white px-8 py-4 rounded-full text-sm font-bold transition-colors shadow-primary">
              צפה בגלריה
            </a>
            <a href="#packages"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-full text-sm font-bold transition-all duration-200">
              חבילות ומחירים
            </a>
          </div>

          {/* סטטיסטיקות */}
          <div className="grid grid-cols-3 gap-4 mt-10 pt-8 border-t border-gray-100">
            {[
              { num: '800+', label: 'אירועים' },
              { num: '12',   label: 'שנות ניסיון' },
              { num: '100%', label: 'שביעות רצון' },
            ].map(({ num, label }) => (
              <div key={label} className="text-center">
                <div className="font-display font-black text-2xl text-primary">{num}</div>
                <div className="text-xs text-ink-lt mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* תמונה */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-lg">
            {/* כרטיסי floating */}
            <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-card px-4 py-3 z-10 flex items-center gap-2">
              <span className="text-2xl">🎈</span>
              <div>
                <p className="text-xs font-bold text-ink">קשת בלונים</p>
                <p className="text-[10px] text-ink-lt">מהיום להזמנה</p>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-card px-4 py-3 z-10 flex items-center gap-2">
              <span className="text-2xl">✨</span>
              <div>
                <p className="text-xs font-bold text-ink">עיצוב יוקרתי</p>
                <p className="text-[10px] text-primary font-semibold">חומרים פרימיום</p>
              </div>
            </div>

            {/* תמונה ראשית */}
            <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=90&auto=format&fit=crop"
                alt="עיצוב בלונים"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <a href="#services" className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-ink-lt animate-bounce">
        <span className="text-[10px] tracking-widest uppercase">גלול</span>
        <ArrowDown size={14} />
      </a>
    </section>
  )
}
