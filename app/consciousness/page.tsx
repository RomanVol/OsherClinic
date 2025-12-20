import Link from 'next/link';
import type { Metadata } from 'next';
import ContactForm from '../components/ContactForm';
import ContactSection from '../components/ContactSection';

export const metadata: Metadata = {
  title: 'טיפול תודעה בשיטת שלושת המימדים לנשים | הקליניקה של אושר',
  description:
    'טיפול תודעה בשיטת שלושת המימדים לנשים בלבד: תהליך עומק לשינוי דפוסים, בהירות וצמיחה אישית. לתיאום שיחה: 050-766-0560 (אזור השרון הצפוני).',
  alternates: {
    canonical: 'https://osherclinic.co.il/consciousness',
  },
};

export default function ConsciousnessPage() {
  return (
    <div className="min-h-screen bg-cream-50">
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-terracotta-100/30 rounded-full blur-3xl" />
        <div className="absolute top-60 right-20 w-48 h-48 bg-sand-200/40 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-1/3 w-56 h-56 bg-terracotta-100/20 rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <header className="relative bg-white/70 backdrop-blur-md border-b border-terracotta-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 md:py-5">
          <Link href="/" className="inline-flex items-center text-terracotta-600 hover:text-terracotta-700 text-sm md:text-base mb-3 transition-colors">
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            חזרה לדף הבית
          </Link>
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-forest-800 tracking-tight">
              טיפול תודעה בשיטת שלושת המימדים
            </h1>
            <p className="text-terracotta-600 font-medium text-sm md:text-base mt-2 flex items-center justify-center gap-2">
              <span className="w-6 h-px bg-terracotta-300"></span>
              לנשים בלבד
              <span className="w-6 h-px bg-terracotta-300"></span>
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative container mx-auto px-4 py-8 md:py-12 max-w-4xl">
        <article className="bg-white rounded-4xl shadow-soft-lg p-6 md:p-10 lg:p-14 border border-terracotta-100/30">
          {/* Hero Icon */}
          <div className="flex justify-center mb-8 md:mb-10">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-terracotta-100 to-terracotta-200 rounded-3xl flex items-center justify-center shadow-soft">
              <svg className="w-10 h-10 md:w-12 md:h-12 text-terracotta-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8 md:space-y-10 text-forest-700 leading-relaxed text-base md:text-lg">
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-forest-800 mb-4 flex items-center">
                <span className="w-8 h-1 bg-terracotta-400 rounded-full ml-3"></span>
                מהי שיטת שלושת המימדים?
              </h2>
              <p>
                שיטת שלושת המימדים היא גישה טיפולית ייחודית ומקיפה לפיתוח תודעה ושינוי פנימי עמוק.
                השיטה מבוססת על עבודה במקביל על שלושה ממדים מרכזיים בחיינו - הממד הפיזי, הממד הרגשי והממד הרוחני.
              </p>
              <div className="mt-4">
                <a
                  href="https://cmtm.co.il/articles/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-terracotta-600 hover:text-terracotta-700 font-semibold text-base md:text-lg underline hover:no-underline transition-all"
                >
                  למידע נוסף על השיטה
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-forest-800 mb-4 flex items-center">
                <span className="w-8 h-1 bg-terracotta-400 rounded-full ml-3"></span>
                שלושת המימדים
              </h2>
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-terracotta-50 to-sand-50 p-5 md:p-6 rounded-2xl border border-terracotta-100">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-terracotta-100 flex items-center justify-center">
                      <svg className="w-5 h-5 text-terracotta-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                      </svg>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-forest-800">הממד הפיזי</h3>
                  </div>
                  <p className="text-forest-600">
                    עבודה על הגוף, התחושות הפיזיות וההבנה של הקשר בין גוף לנפש.
                    שחרור מתחים פיזיים המשקפים עומסים רגשיים.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-terracotta-50 to-sand-50 p-5 md:p-6 rounded-2xl border border-terracotta-100">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-terracotta-100 flex items-center justify-center">
                      <svg className="w-5 h-5 text-terracotta-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                      </svg>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-forest-800">הממד הרגשי</h3>
                  </div>
                  <p className="text-forest-600">
                    חקירה והבנה של הרגשות, האמונות והדפוסים הרגשיים שמנחים את חיינו.
                    שחרור של רגשות עכורים וריפוי פצעים רגשיים.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-terracotta-50 to-sand-50 p-5 md:p-6 rounded-2xl border border-terracotta-100">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-terracotta-100 flex items-center justify-center">
                      <svg className="w-5 h-5 text-terracotta-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                      </svg>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-forest-800">הממד הרוחני</h3>
                  </div>
                  <p className="text-forest-600">
                    התחברות לעצמי הפנימי העמוק, למטרת החיים ולמשמעות האישית.
                    פיתוח מודעות רוחנית והרחבת התודעה.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-forest-800 mb-4 flex items-center">
                <span className="w-8 h-1 bg-terracotta-400 rounded-full ml-3"></span>
                מה כולל התהליך?
              </h2>
              <p>
                התהליך מותאם אישית לכל אישה וכולל: תשאול ושיחה מעמיקה ומתוך כך הבנה על אילו מטרות את רוצה לעבוד ולשפר, ביחד אנחנו בודקות מה הוא היעד שלך ולאן את רוצה להגיע. אנחנו גורמות לתת מודע שלך לשנות ולחדש דפוסי מחשבה והרגלים חדשים וטובים.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-forest-800 mb-4 flex items-center">
                <span className="w-8 h-1 bg-terracotta-400 rounded-full ml-3"></span>
                איך נראה מפגש בפועל?
              </h2>
              <div className="space-y-4">
                {[
                  { step: '1', text: 'שיחת היכרות קצרה והגדרת מטרה ברורה למפגש.' },
                  { step: '2', text: 'מיפוי דפוסים/אמונות שמנהלים אותך ביומיום.' },
                  { step: '3', text: 'עבודה תודעתית בשילוב שלושת המימדים (פיזי/רגשי/רוחני) לפי הצורך.' },
                  { step: '4', text: 'חיזוק תובנות וכלים פרקטיים להמשך השבוע.' },
                  { step: '5', text: 'סיכום והמלצה לצעדים הבאים בתהליך (אם מתאים).' }
                ].map((item) => (
                  <div key={item.step} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-terracotta-500 text-white flex items-center justify-center flex-shrink-0 font-bold text-sm">
                      {item.step}
                    </div>
                    <p className="pt-1">{item.text}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-forest-800 mb-4 flex items-center">
                <span className="w-8 h-1 bg-terracotta-400 rounded-full ml-3"></span>
                למי מתאים הטיפול?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'נשים המחפשות שינוי אמיתי בחיים',
                  'מי שחווה תקיעות או חוסר בהירות לגבי הדרך',
                  'נשים בתהליכי מעבר או משברים',
                  'מי שרוצה להעמיק את ההכרות העצמית',
                  'נשים המחפשות משמעות ומטרה בחיים'
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-xl bg-terracotta-50/50">
                    <div className="w-6 h-6 rounded-full bg-terracotta-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-terracotta-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-forest-700">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-forest-800 mb-4 flex items-center">
                <span className="w-8 h-1 bg-terracotta-400 rounded-full ml-3"></span>
                התוצאות
              </h2>
              <p>
                השיטה מובילה לשינוי מודעות עמוק, הבנה חדשה של עצמך ושל החיים שלך,
                שחרור מדפוסים מגבילים, והתחברות אמיתית לכוח הפנימי והחוכמה שבתוכך.
                הטיפול מאפשר צמיחה אישית ורוחנית משמעותית ובעלת השפעה ארוכת טווח.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-forest-800 mb-4 flex items-center">
                <span className="w-8 h-1 bg-terracotta-400 rounded-full ml-3"></span>
                אזורי שירות
              </h2>
              <p>
                הקליניקה בחריש ומלווה נשים מאזור השרון הצפוני, כולל חריש, חדרה, פרדס חנה והסביבה (בתיאום מראש).
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-forest-800 mb-4 flex items-center">
                <span className="w-8 h-1 bg-terracotta-400 rounded-full ml-3"></span>
                שאלות נפוצות
              </h2>
              <div className="space-y-4">
                <div className="bg-terracotta-50 p-5 md:p-6 rounded-2xl border border-terracotta-100">
                  <h3 className="text-lg font-bold text-forest-800 mb-2">האם צריך ניסיון קודם בטיפול תודעתי?</h3>
                  <p className="text-forest-600">לא. מתחילים מהנקודה שבה את נמצאת ומתקדמים בקצב שמתאים לך.</p>
                </div>
                <div className="bg-terracotta-50 p-5 md:p-6 rounded-2xl border border-terracotta-100">
                  <h3 className="text-lg font-bold text-forest-800 mb-2">אחרי כמה מפגשים מרגישים שינוי?</h3>
                  <p className="text-forest-600">יש נשים שמרגישות הקלה כבר אחרי מפגש אחד, ולרוב תהליך עמוק נבנה לאורך כמה מפגשים.</p>
                </div>
                <div className="bg-terracotta-50 p-5 md:p-6 rounded-2xl border border-terracotta-100">
                  <h3 className="text-lg font-bold text-forest-800 mb-2">מה ההבדל בין שיחה רגילה לבין טיפול בשיטה?</h3>
                  <p className="text-forest-600">המטרה היא לא רק להבין, אלא גם לשנות דפוסים בפועל בעבודה תודעתית ממוקדת ומובנית.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-forest-800 mb-4 flex items-center">
                <span className="w-8 h-1 bg-terracotta-400 rounded-full ml-3"></span>
                אולי יעניין אותך גם
              </h2>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/massage"
                  className="flex items-center gap-3 p-4 rounded-2xl bg-sage-50 hover:bg-sage-100 border border-sage-100 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-sage-100 group-hover:bg-sage-200 flex items-center justify-center transition-colors">
                    <svg className="w-5 h-5 text-sage-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <span className="text-sage-700 font-medium">טיפול מגע עם שמנים אתריים</span>
                </Link>
                <Link
                  href="/lecture"
                  className="flex items-center gap-3 p-4 rounded-2xl bg-sand-50 hover:bg-sand-100 border border-sand-200 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-sand-100 group-hover:bg-sand-200 flex items-center justify-center transition-colors">
                    <svg className="w-5 h-5 text-sand-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <span className="text-sand-700 font-medium">הרצאה: מצניחה לצמיחה</span>
                </Link>
              </div>
            </section>

            {/* Certification Image */}
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-forest-800 mb-4 flex items-center">
                <span className="w-8 h-1 bg-terracotta-400 rounded-full ml-3"></span>
                הסמכה מקצועית
              </h2>
              <div className="flex justify-center">
                <div className="w-full max-w-2xl h-[400px] md:h-[600px] overflow-hidden rounded-3xl shadow-soft-lg border border-terracotta-100">
                  <img
                    src="/images/certification.jpeg"
                    alt="תעודת הסמכה בשיטת שלושת המימדים"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </section>

            {/* Call to Action */}
            <div className="pt-8 mt-8 border-t border-terracotta-100">
              <div className="text-center">
                <p className="text-xl md:text-2xl font-bold text-forest-800 mb-6">
                  מוכנה לתאם שיחה ולהתחיל תהליך?
                </p>
                <a
                  href="tel:0507660560"
                  className="btn-terracotta text-lg px-12"
                  dir="ltr"
                >
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  050-766-0560
                </a>
                <div className="mt-4">
                  <a href="#clinic-contact" className="text-terracotta-600 hover:text-terracotta-700 font-semibold underline hover:no-underline transition-all">
                    או לצפייה במיקום הקליניקה
                  </a>
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>

      {/* Contact Form */}
      <ContactForm />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <footer className="bg-forest-800 text-white py-10 md:py-14">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-sage-400 ml-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
              </svg>
              <span className="text-xl font-bold">הקליניקה של אושר</span>
            </div>
            <p className="text-forest-300 mb-6">
              טיפולים הוליסטיים לנשים | חריש והסביבה
            </p>
            <div className="w-24 h-px bg-forest-600 mx-auto mb-6" />
            <p className="text-forest-400 text-sm">
              © 2025 הקליניקה של אושר. כל הזכויות שמורות.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
