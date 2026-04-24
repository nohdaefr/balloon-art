const ITEMS = [
  { emoji: '🚚', title: 'משלוח חינם',        desc: 'לכל הארץ מעל ₪800' },
  { emoji: '⭐', title: 'חומרים פרימיום',     desc: 'Qualatex® בלבד' },
  { emoji: '📞', title: 'תמיכה 24/7',         desc: '053-342-9376' },
  { emoji: '✅', title: '100% שביעות רצון',  desc: 'או החזר כספי' },
]

export default function Trust() {
  return (
    <section className="py-12 bg-primary-bg border-y border-pink-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {ITEMS.map(item => (
            <div key={item.title} className="flex items-center gap-4 bg-white rounded-2xl p-5 shadow-card">
              <span className="text-3xl flex-shrink-0">{item.emoji}</span>
              <div>
                <p className="font-bold text-ink text-sm">{item.title}</p>
                <p className="text-ink-lt text-xs mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
