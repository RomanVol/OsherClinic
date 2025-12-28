import Link from 'next/link';
import type { Metadata } from 'next';
import ContactForm from '../components/ContactForm';
import ContactSection from '../components/ContactSection';

export const metadata: Metadata = {
  title: 'טיפול תודעה בשיטת שלושת המימדים לנשים | אושר של קליניקה',
  description:
    'טיפול תודעה בשיטת שלושת המימדים לנשים בלבד: תהליך עומק לשינוי דפוסים, בהירות וצמיחה אישית. לתיאום שיחה: 050-766-0560 (אזור השרון הצפוני).',
  alternates: {
    canonical: 'https://osherclinic.co.il/consciousness',
  },
};

export default function ConsciousnessPage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Organic Background Shapes - matching main page */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-peach rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-float"></div>
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-sage-light rounded-full mix-blend-multiply filter blur-3xl opacity-50 animation-delay-200" style={{ animation: 'float 8s ease-in-out infinite' }}></div>
        <div className="absolute bottom-0 right-1/4 w-[450px] h-[450px] bg-terracotta-light rounded-full mix-blend-multiply filter blur-3xl opacity-30 animation-delay-400" style={{ animation: 'float 10s ease-in-out infinite' }}></div>

        {/* Decorative flowing lines */}
        <svg className="absolute top-0 left-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <path d="M 0,100 Q 200,50 400,100 T 800,100 T 1200,100 T 1600,100" stroke="currentColor" strokeWidth="2" fill="none" className="text-sage-dark" />
          <path d="M 0,300 Q 250,250 500,300 T 1000,300 T 1500,300" stroke="currentColor" strokeWidth="2" fill="none" className="text-terracotta" />
          <path d="M 0,500 Q 300,450 600,500 T 1200,500" stroke="currentColor" strokeWidth="2" fill="none" className="text-gold" />
        </svg>
      </div>

      {/* Header - matching main page style */}
      <header className="bg-cream/95 backdrop-blur-md border-b-2 border-gold/20 sticky top-0 z-10 animate-fade-in-up">
        <div className="container mx-auto px-4 py-6 md:py-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-4 text-sage-dark hover:text-terracotta transition-colors font-semibold group">
            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l4 5m0 0l-4 5m4-5H6" />
            </svg>
            חזרה לדף הבית
          </Link>
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-center text-sage-dark tracking-wide">
              טיפול תודעה בשיטת שלושת המימדים
            </h1>
            <div className="flex items-center gap-3">
              <div className="w-12 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent"></div>
              <p className="text-center text-terracotta font-semibold text-lg md:text-xl font-serif italic">
                נשים בלבד
              </p>
              <div className="w-12 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent"></div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
        {/* Hero Section */}
        <section className="relative bg-white/60 backdrop-blur-md rounded-[3rem] shadow-2xl p-8 md:p-12 lg:p-16 max-w-5xl mx-auto animate-fade-in-up border-2 border-sage/10 overflow-hidden mb-12 md:mb-16">
          {/* Decorative corner element */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-sage/20 to-transparent rounded-bl-full"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-sage-light/50 to-transparent rounded-tr-full"></div>

          {/* Hero Icon */}
          <div className="flex justify-center mb-8 md:mb-10 relative z-10">
            <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-sage to-sage-dark rounded-3xl flex items-center justify-center shadow-xl">
              <svg className="w-12 h-12 md:w-16 md:h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8 md:space-y-10 text-gray-700 leading-relaxed text-base md:text-lg relative z-10">
            <section>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-sage-dark mb-4 md:mb-5">מהי שיטת שלושת המימדים?</h2>
              <p className="first-letter:text-4xl first-letter:font-serif first-letter:font-bold first-letter:text-sage first-letter:float-right first-letter:ml-2 first-letter:leading-none">
                שיטת שלושת המימדים היא גישה טיפולית ייחודית ומקיפה לפיתוח תודעה ושינוי פנימי עמוק.
                השיטה מבוססת על עבודה במקביל על שלושה ממדים מרכזיים בחיינו - הממד הפיזי, הממד הרגשי והממד הרוחני.
              </p>
              <div className="mt-6">
                <a
                  href="https://cmtm.co.il/articles/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sage-dark hover:text-terracotta font-semibold text-base md:text-lg underline decoration-2 underline-offset-4 hover:decoration-terracotta transition-all"
                >
                  למידע נוסף על השיטה
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-sage-dark mb-4 md:mb-5">שלושת המימדים</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-sage-light/60 to-sage-light/30 p-6 md:p-8 rounded-[2rem] border-2 border-sage/20 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-sage to-sage-dark rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-sage-dark mb-3">הממד הפיזי</h3>
                  <p className="text-gray-700">
                    עבודה על הגוף, התחושות הפיזיות וההבנה של הקשר בין גוף לנפש.
                    שחרור מתחים פיזיים המשקפים עומסים רגשיים.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-peach/50 to-peach/30 p-6 md:p-8 rounded-[2rem] border-2 border-terracotta/10 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-terracotta to-terracotta-dark rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-sage-dark mb-3">הממד הרגשי</h3>
                  <p className="text-gray-700">
                    חקירה והבנה של הרגשות, האמונות והדפוסים הרגשיים שמנחים את חיינו.
                    שחרור של רגשות עכורים וריפוי פצעים רגשיים.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-gold/20 to-gold/10 p-6 md:p-8 rounded-[2rem] border-2 border-gold/20 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold-dark rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-sage-dark mb-3">הממד הרוחני</h3>
                  <p className="text-gray-700">
                    התחברות לעצמי הפנימי העמוק, למטרת החיים ולמשמעות האישית.
                    פיתוח מודעות רוחנית והרחבת התודעה.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-sage-dark mb-4 md:mb-5">מה כולל התהליך?</h2>
              <p className="bg-sage-light/30 p-6 rounded-2xl border border-sage/10">
                התהליך מותאם אישית לכל אישה וכולל: תשאול ושיחה מעמיקה ומתוך כך הבנה על אילו מטרות את רוצה לעבוד ולשפר, ביחד אנחנו בודקות מה הוא היעד שלך ולאן את רוצה להגיע. אנחנו גורמות לתת מודע שלך לשנות ולחדש דפוסי מחשבה והרגלים חדשים וטובים.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-sage-dark mb-4 md:mb-5">איך נראה מפגש בפועל?</h2>
              <div className="space-y-4">
                {[
                  { step: '01', text: 'שיחת היכרות קצרה והגדרת מטרה ברורה למפגש.' },
                  { step: '02', text: 'מיפוי דפוסים/אמונות שמנהלים אותך ביומיום.' },
                  { step: '03', text: 'עבודה תודעתית בשילוב שלושת המימדים (פיזי/רגשי/רוחני) לפי הצורך.' },
                  { step: '04', text: 'חיזוק תובנות וכלים פרקטיים להמשך השבוע.' },
                  { step: '05', text: 'סיכום והמלצה לצעדים הבאים בתהליך (אם מתאים).' }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-gradient-to-br from-sage to-sage-dark rounded-2xl flex items-center justify-center flex-shrink-0 text-white font-serif font-bold text-lg shadow-md group-hover:scale-110 transition-transform">
                      {item.step}
                    </div>
                    <p className="pt-3">{item.text}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-sage-dark mb-4 md:mb-5">למי מתאים הטיפול?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'נשים המחפשות שינוי אמיתי בחיים',
                  'מי שחווה תקיעות או חוסר בהירות לגבי הדרך',
                  'נשים בתהליכי מעבר או משברים',
                  'מי שרוצה להעמיק את ההכרות העצמית',
                  'נשים המחפשות משמעות ומטרה בחיים'
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 bg-sage-light/40 p-4 rounded-2xl border border-sage/10">
                    <div className="w-6 h-6 bg-sage/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-sage-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-gradient-to-br from-peach/30 to-sage-light/30 p-6 md:p-8 rounded-[2rem] border-2 border-gold/10">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-sage-dark mb-4 md:mb-5">התוצאות</h2>
              <p>
                השיטה מובילה לשינוי מודעות עמוק, הבנה חדשה של עצמך ושל החיים שלך,
                שחרור מדפוסים מגבילים, והתחברות אמיתית לכוח הפנימי והחוכמה שבתוכך.
                הטיפול מאפשר צמיחה אישית ורוחנית משמעותית ובעלת השפעה ארוכת טווח.
              </p>
            </section>

            <section className="bg-sage-light/50 p-6 rounded-2xl border border-sage/10">
              <h2 className="text-xl md:text-2xl font-serif font-bold text-sage-dark mb-3">אזורי שירות</h2>
              <p>
                הקליניקה בחריש ומלווה נשים מאזור השרון הצפוני, כולל חריש, חדרה, פרדס חנה והסביבה (בתיאום מראש).
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-sage-dark mb-4 md:mb-5">שאלות נפוצות</h2>
              <div className="space-y-4">
                {[
                  { q: 'האם צריך ניסיון קודם בטיפול תודעתי?', a: 'לא. מתחילים מהנקודה שבה את נמצאת ומתקדמים בקצב שמתאים לך.' },
                  { q: 'אחרי כמה מפגשים מרגישים שינוי?', a: 'יש נשים שמרגישות הקלה כבר אחרי מפגש אחד, ולרוב תהליך עמוק נבנה לאורך כמה מפגשים.' },
                  { q: 'מה ההבדל בין שיחה רגילה לבין טיפול בשיטה?', a: 'המטרה היא לא רק להבין, אלא גם לשנות דפוסים בפועל בעבודה תודעתית ממוקדת ומובנית.' }
                ].map((item, index) => (
                  <div key={index} className="bg-white/70 backdrop-blur-sm p-5 md:p-6 rounded-2xl border border-gold/10 shadow-sm">
                    <h3 className="text-lg md:text-xl font-serif font-semibold text-sage-dark mb-2">{item.q}</h3>
                    <p>{item.a}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-sage-dark mb-4 md:mb-5">אולי יעניין אותך גם</h2>
              <div className="flex flex-wrap gap-3">
                <Link href="/massage" className="inline-flex items-center gap-2 bg-peach/60 hover:bg-peach px-5 py-3 rounded-full text-terracotta-dark font-semibold transition-all hover:shadow-md">
                  <span>טיפול מגע עם שמנים אתריים</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                  </svg>
                </Link>
                <Link href="/lecture" className="inline-flex items-center gap-2 bg-gold/20 hover:bg-gold/30 px-5 py-3 rounded-full text-gold-dark font-semibold transition-all hover:shadow-md">
                  <span>הרצאה: מצניחה לצמיחה</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                  </svg>
                </Link>
              </div>
            </section>

            {/* Certification Section */}
            <section>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-sage-dark mb-4 md:mb-5">הסמכה מקצועית</h2>
              <div className="flex justify-center">
                <div className="w-full max-w-2xl h-[400px] md:h-[600px] overflow-hidden rounded-[2rem] shadow-xl border-2 border-gold/20">
                  <img
                    src="/images/certification.jpeg"
                    alt="תעודת הסמכה בשיטת שלושת המימדים"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </section>

            {/* Call to Action */}
            <div className="relative bg-gradient-to-br from-sage/10 via-sage-light/40 to-peach/20 backdrop-blur-lg rounded-[2rem] p-8 md:p-10 text-center border-2 border-gold/20 overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-gold/10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-sage/10 rounded-full blur-2xl"></div>

              <div className="relative z-10">
                <p className="text-xl md:text-2xl font-serif font-bold text-sage-dark mb-6">
                  מוכנה לתאם שיחה ולהתחיל תהליך?
                </p>
                <a
                  href="tel:0507660560"
                  className="inline-block bg-gradient-to-r from-sage to-sage-dark hover:from-sage-dark hover:to-sage text-white font-bold text-lg md:text-xl px-10 md:px-14 py-4 md:py-5 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1"
                  dir="ltr"
                >
                  <span className="flex items-center gap-3">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    050-766-0560
                  </span>
                </a>
                <div className="mt-4">
                  <a href="#clinic-contact" className="text-sage-dark hover:text-terracotta font-semibold underline decoration-2 underline-offset-4 hover:decoration-terracotta transition-all">
                    או לצפייה במיקום הקליניקה
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Contact Form */}
      <ContactForm />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer - matching main page */}
      <footer className="relative bg-sage-dark/95 backdrop-blur-md mt-16 md:mt-24 py-10 md:py-12 border-t-4 border-gold/30">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent"></div>

        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-cream mb-3">
              אושר של קליניקה
            </h3>
            <div className="w-16 h-[2px] bg-gold/50 mx-auto mb-6"></div>

            <div className="text-sage-light/80 space-y-2">
              <p className="text-base md:text-lg font-semibold">מרכז לטיפולים הוליסטיים ופיתוח אישי</p>
              <p className="text-sm md:text-base">נשים בלבד • חריש, השרון הצפוני</p>
            </div>

            <div className="mt-8 pt-6 border-t border-sage/30">
              <p className="text-sage-light/60 text-sm">© 2025 אושר של קליניקה • כל הזכויות שמורות</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
