/*
  קובץ נתונים מרכזי — כל קטגוריה מוגדרת כאן.
  כדי להוסיף קטגוריה חדשה: העתק בלוק קיים ושנה את הערכים.
*/

export const CATEGORIES = [
  /* ═══════════════════════════════════
     אירועים עסקיים
  ═══════════════════════════════════ */
  {
    id:    'branch-opening',
    group: 'business',
    slug:  '/category/branch-opening',
    label: 'פתיחת סניף חדש',
    emoji: '🏪',
    hero: {
      title:    'פתיחת סניף חדש',
      subtitle: 'עיצובי בלונים מרשימים שמושכים עיניים ומזמינים לקוחות',
      img:      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1400&q=90&auto=format&fit=crop',
    },
    pitch: `פתיחת סניף היא הזדמנות אחת לעשות רושם ראשוני בלתי נשכח. אנחנו יוצרים קשתות בלונים מרשימות, עמודים צבעוניים ועיצובי כניסה שמושכים תשומת לב מהרחוב — ומכניסים לקוחות. כל עיצוב מותאם לצבעי המותג שלך.`,
    gallery: [
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=600&q=85&auto=format&fit=crop',
    ],
    features: ['קשת כניסה מותאמת לצבעי המותג', 'עמודי בלונים בכניסה', 'בלוני לוגו', 'עיצוב חלון ראווה'],
  },
  {
    id:    'corporate',
    group: 'business',
    slug:  '/category/corporate',
    label: 'אירועי חברה',
    emoji: '🏢',
    hero: {
      title:    'אירועי חברה',
      subtitle: 'עיצובים מקצועיים שמחזקים את רוח הצוות ומרשימים את הלקוחות',
      img:      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1400&q=90&auto=format&fit=crop',
    },
    pitch: `אירוע חברה מצליח מתחיל בסביבה שמרגישה מיוחדת. עיצובי הבלונים שלנו לאירועי חברה משלבים מקצועיות עם חגיגיות — קשתות, עמודים ועיטורי שולחן שמשדרים יוקרה ומחזקים את זהות המותג.`,
    gallery: [
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=600&q=85&auto=format&fit=crop',
    ],
    features: ['עיצוב舞台 ומיתוג', 'מיצב כניסה מרשים', 'עיטורי שולחן', 'קשתות צבעוניות'],
  },
  {
    id:    'launch',
    group: 'business',
    slug:  '/category/launch',
    label: 'אירועי השקה',
    emoji: '🚀',
    hero: {
      title:    'אירועי השקה',
      subtitle: 'רגע ההשקה שלך ראוי לעיצוב שמדבר בעד עצמו',
      img:      'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=1400&q=90&auto=format&fit=crop',
    },
    pitch: `השקת מוצר או שירות היא אחד הרגעים הכי חשובים בחיי עסק. אנחנו יוצרים עיצובי WOW שמתאימים לרגע — מקשתות דרמטיות ועד עיצובי תקרה מלאים שיוצרים את האווירה הנכונה לתמונות ולרשתות החברתיות.`,
    gallery: [
      'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=600&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1478146059778-26264db3a6d3?w=600&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&q=85&auto=format&fit=crop',
    ],
    features: ['קשת השקה דרמטית', 'עיצוב תקרה מלא', 'בלוני לוגו ומותג', 'עיטורי במה'],
  },
  {
    id:    'branding',
    group: 'business',
    slug:  '/category/branding',
    label: 'מיתוג עסקי — כנסים',
    emoji: '🎯',
    hero: {
      title:    'כנסים וימי עיון',
      subtitle: 'עיצובים מקצועיים שמחזקים את נוכחות המותג',
      img:      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1400&q=90&auto=format&fit=crop',
    },
    pitch: `כנסים וימי עיון הם הזדמנות מצוינת לחזק את זהות המותג. עיצובי הבלונים שלנו לאירועים אלו מדויקים, מקצועיים ומרשימים — ומותאמים במדויק לצבעי החברה שלך.`,
    gallery: [
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=600&q=85&auto=format&fit=crop',
    ],
    features: ['עיצוב בצבעי המותג', 'שלטי כיתוב', 'עמודי כניסה', 'עיטורי שולחן VIP'],
  },

  /* ═══════════════════════════════════
     אירועים פרטיים
  ═══════════════════════════════════ */
  {
    id:    'wedding',
    group: 'private',
    slug:  '/category/wedding',
    label: 'חתונות',
    emoji: '💍',
    hero: {
      title:    'חתונות',
      subtitle: 'עיצובי בלונים אלגנטיים שהופכים את יום החתונה לחלומי',
      img:      'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=1400&q=90&auto=format&fit=crop',
    },
    pitch: `יום החתונה שלכם הוא היום המיוחד ביותר — ואנחנו כאן כדי להפוך אותו לבלתי נשכח. מקשתות שמפניה עדינות ועד עיטורי תקרה רומנטיים, כל עיצוב נוצר בהתאמה אישית מלאה לסגנון ולצבעי החתונה שלכם.`,
    gallery: [
      'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=600&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1561414927-6d86591d0c4f?w=600&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1478146059778-26264db3a6d3?w=600&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=600&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=600&q=85&auto=format&fit=crop',
    ],
    features: ['קשת כניסה', 'עיטורי חופה', 'עיצוב שולחן כבוד', 'בלוני שמפניה ולבן'],
  },
  {
    id:    'bar-mitzvah',
    group: 'private',
    slug:  '/category/bar-mitzvah',
    label: 'בר / בת מצווה',
    emoji: '✡️',
    hero: {
      title:    'בר ובת מצווה',
      subtitle: 'עיצובים מרגשים ליום הגדול שלא ישכח לעולם',
      img:      'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1400&q=90&auto=format&fit=crop',
    },
    pitch: `בר ובת מצווה הם אירועים שנחרטים בלב לתמיד. אנחנו יוצרים עיצובים שמשקפים את אישיות הילד/ה — כחול-לבן-כסף קלאסי, צבעים חיים ומרגשים, או כל קונספט אחר שתבחרו.`,
    gallery: [
      'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1471967183320-ee018f6e114a?w=600&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=600&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&q=85&auto=format&fit=crop',
    ],
    features: ['קשת כניסה', 'עמודי בלונים', 'מספרים / שם', 'עיצוב שולחן כבוד'],
  },
  {
    id:    'brit',
    group: 'private',
    slug:  '/category/brit',
    label: 'ברית / בריתה',
    emoji: '🍼',
    hero: {
      title:    'ברית ובריתה',
      subtitle: 'עיצובים עדינים ומרגשים לאירוע המיוחד הראשון',
      img:      'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=1400&q=90&auto=format&fit=crop',
    },
    pitch: `ברית מילה ובריתה הם אירועים משפחתיים עם המון רגש. אנחנו יוצרים עיצובים עדינים בגוונים בהירים — לבן וכחול לבנים, ורוד ולבן לבנות — שמוסיפים חום ושמחה לאירוע.`,
    gallery: [
      'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=600&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=600&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=600&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1561414927-6d86591d0c4f?w=600&q=85&auto=format&fit=crop',
    ],
    features: ['עיצוב עדין בגוונים בהירים', 'קשת כניסה', 'עיטורי שולחן', 'בלוני מספרים'],
  },
  {
    id:    'proposal',
    group: 'private',
    slug:  '/category/proposal',
    label: 'הצעת נישואין',
    emoji: '💐',
    hero: {
      title:    'הצעת נישואין',
      subtitle: 'הרגע שהיא תזכור לנצח — אנחנו נדאג לעיצוב',
      img:      'https://images.unsplash.com/photo-1561414927-6d86591d0c4f?w=1400&q=90&auto=format&fit=crop',
    },
    pitch: `הצעת נישואין היא הרגע הרומנטי ביותר בחיים. אנחנו יוצרים מיצבי בלונים מרהיבים — לבבות, קשתות, מספרים — שהופכים את הרגע לקסום. סודיות מוחלטת ותיאום מדויק עד הפרט האחרון.`,
    gallery: [
      'https://images.unsplash.com/photo-1561414927-6d86591d0c4f?w=600&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=600&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=600&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1478146059778-26264db3a6d3?w=600&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=600&q=85&auto=format&fit=crop',
    ],
    features: ['מיצב לבבות', 'כיתוב "תינשאי לי?"', 'ורוד ולבן', 'הגדרה מדויקת של מיקום'],
  },
  {
    id:    'chalaka',
    group: 'private',
    slug:  '/category/chalaka',
    label: 'חלאקה',
    emoji: '✂️',
    hero: {
      title:    'חלאקה',
      subtitle: 'עיצוב חגיגי וצבעוני לאירוע הילדות הבלתי נשכח',
      img:      'https://images.unsplash.com/photo-1471967183320-ee018f6e114a?w=1400&q=90&auto=format&fit=crop',
    },
    pitch: `חלאקה היא מסורת יפה שמחייבת חגיגה. אנחנו מגיעים עם עיצובים צבעוניים ושמחים שמתאימים לאווירה — קשתות, עמודים וניפוח בלונים לילדים שמוסיפים שמחה לאירוע המשפחתי.`,
    gallery: [
      'https://images.unsplash.com/photo-1471967183320-ee018f6e114a?w=600&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=600&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=600&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&q=85&auto=format&fit=crop',
    ],
    features: ['צבעים שמחים וחגיגיים', 'קשת כניסה', 'ניפוח בלונים לילדים', 'עיצוב שולחן'],
  },
  {
    id:    'birthday',
    group: 'private',
    slug:  '/category/birthday',
    label: 'ימי הולדת',
    emoji: '🎂',
    hero: {
      title:    'ימי הולדת',
      subtitle: 'כי כל יום הולדת מגיע לעיצוב בלונים מרהיב',
      img:      'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1400&q=90&auto=format&fit=crop',
    },
    pitch: `מגיל 1 עד 100 — כל יום הולדת הוא סיבה לחגוג. אנחנו יוצרים עיצובים צבעוניים, מספרים ענקיים, קשתות וסצינות בלונים שמפיחות חיים לכל מסיבה. ספרו לנו על התחביבים של יקירכם ונבנה עיצוב ייחודי.`,
    gallery: [
      'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1471967183320-ee018f6e114a?w=600&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=600&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=600&q=85&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=85&auto=format&fit=crop',
    ],
    features: ['מספרים / שם בבלונים', 'קשת צבעונית', 'עיטורי שולחן', 'תמה מותאמת אישית'],
  },
]

/* עזר: חפש קטגוריה לפי slug */
export function getCategoryBySlug(slug) {
  return CATEGORIES.find(c => c.slug === slug) || null
}
