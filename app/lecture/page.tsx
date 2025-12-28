import Link from 'next/link';
import type { Metadata } from 'next';
import ContactForm from '../components/ContactForm';
import LectureContactSection from '../components/LectureContactSection';

export const metadata: Metadata = {
  title: 'הרצאה: מצניחה לצמיחה - חיים כנגד כל הסיכויים | אושר של קליניקה',
  description:
    'הרצאה מעוררת השראה לנשים על התגברות על אתגרים והפיכת משברים להזדמנויות לצמיחה. להזמנות ותיאום שיחה: 050-766-0560.',
  alternates: {
    canonical: 'https://osherclinic.co.il/lecture',
  },
};

export default function LecturePage() {
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
              מצניחה לצמיחה
            </h1>
            <p className="text-lg md:text-xl text-gray-600 font-serif text-center">חיים כנגד כל הסיכויים</p>
            <div className="flex items-center gap-3 mt-1">
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
        <section className="relative bg-white/60 backdrop-blur-md rounded-[3rem] shadow-2xl p-8 md:p-12 lg:p-16 max-w-5xl mx-auto animate-fade-in-up border-2 border-gold/10 overflow-hidden mb-12 md:mb-16">
          {/* Decorative corner element */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-gold/20 to-transparent rounded-bl-full"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-peach/40 to-transparent rounded-tr-full"></div>

          {/* Hero Icon */}
          <div className="flex justify-center mb-8 md:mb-10 relative z-10">
            <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-gold to-gold-dark rounded-3xl flex items-center justify-center shadow-xl">
              <svg className="w-12 h-12 md:w-16 md:h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8 md:space-y-10 text-gray-700 leading-relaxed text-base md:text-lg relative z-10">
            <section>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-sage-dark mb-4 md:mb-5">על ההרצאה</h2>
              <p className="first-letter:text-4xl first-letter:font-serif first-letter:font-bold first-letter:text-gold first-letter:float-right first-letter:ml-2 first-letter:leading-none">
                הרצאה מעוררת השראה ומלאת תקווה המבוססת על סיפור אישי אמיתי של התגברות על אתגרים קשים
                והפיכת משברים להזדמנויות לצמיחה ושינוי. זהו מסע מרגש מצניחה לצמיחה - סיפור של חיים
                שנבנו מחדש כנגד כל הסיכויים.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-sage-dark mb-4 md:mb-5">נושאים מרכזיים בהרצאה</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-gold/15 to-peach/20 p-6 md:p-8 rounded-[2rem] border-2 border-gold/20">
                  <div className="w-14 h-14 bg-gradient-to-br from-gold to-gold-dark rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-sage-dark mb-3">הכוח שבמשברים</h3>
                  <p className="text-gray-700">
                    כיצד משברים וקשיים יכולים להפוך לנקודת המפנה החזקה ביותר בחיינו
                  </p>
                </div>

                <div className="bg-gradient-to-br from-peach/30 to-gold/15 p-6 md:p-8 rounded-[2rem] border-2 border-terracotta/10">
                  <div className="w-14 h-14 bg-gradient-to-br from-terracotta to-terracotta-dark rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                  </div>
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-sage-dark mb-3">מצניחה לצמיחה</h3>
                  <p className="text-gray-700">
                    כלים מעשיים ליציאה מתחושת תקיעות והתחלה מחודשת מתוך מקום של כוח
                  </p>
                </div>

                <div className="bg-gradient-to-br from-sage-light/50 to-gold/10 p-6 md:p-8 rounded-[2rem] border-2 border-sage/10">
                  <div className="w-14 h-14 bg-gradient-to-br from-sage to-sage-dark rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-sage-dark mb-3">האמונה בעצמך</h3>
                  <p className="text-gray-700">
                    פיתוח החוזק הפנימי והאמונה שכל דבר אפשרי, גם כנגד כל הסיכויים
                  </p>
                </div>

                <div className="bg-gradient-to-br from-gold/20 to-sage-light/30 p-6 md:p-8 rounded-[2rem] border-2 border-gold/20">
                  <div className="w-14 h-14 bg-gradient-to-br from-gold to-gold-dark rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-sage-dark mb-3">בניית חיים חדשים</h3>
                  <p className="text-gray-700">
                    צעדים מעשיים ליצירת המציאות שאת באמת רוצה לחיות בה
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-sage-dark mb-4 md:mb-5">למי מיועדת ההרצאה?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'נשים העוברות תקופה מאתגרת או משבר אישי',
                  'מי שמרגישה תקועה ומחפשת השראה לשינוי',
                  'נשים שרוצות ללמוד כיצד להפוך קשיים להזדמנויות',
                  'מי שצריכה חיזוק ואמונה שאפשר גם אחרת',
                  'כל אישה המחפשת תקווה, חוזק והשראה'
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 bg-gold/10 p-4 rounded-2xl border border-gold/20">
                    <div className="w-6 h-6 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-gold-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-gradient-to-br from-peach/30 to-gold/20 p-6 md:p-8 rounded-[2rem] border-2 border-gold/10">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-sage-dark mb-4 md:mb-5">מה תקבלי מההרצאה?</h2>
              <p>
                ההרצאה תעניק לך השראה אמיתית, תקווה מחודשת ובעיקר - הבנה עמוקה שאת מסוגלת להתמודד
                עם כל אתגר ולצמוח ממנו. תלמדי כלים מעשיים להתמודדות עם משברים, ותצאי עם תחושה
                מחוזקת של כוח אישי ואפשרות.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-sage-dark mb-4 md:mb-5">פורמטים זמינים</h2>
              <div className="bg-white/70 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-gold/20">
                <p className="mb-4 font-semibold text-sage-dark">ההרצאה ניתנת במספר פורמטים:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    'הרצאה קבוצתית (למפעלים, ארגונים, קהילות נשים)',
                    'סדנה מעמיקה בת מספר מפגשים',
                    'הרצאה פרטית לקבוצות קטנות',
                    'אירועים מיוחדים ויומי עיון'
                  ].map((format, index) => (
                    <div key={index} className="flex items-center gap-3 bg-gold/10 p-4 rounded-xl">
                      <div className="w-8 h-8 bg-gradient-to-br from-gold to-gold-dark rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span>{format}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-sage-dark mb-4 md:mb-5">איך מזמינים את ההרצאה?</h2>
              <div className="space-y-4">
                {[
                  { step: '01', text: 'מתאמות שיחת טלפון קצרה כדי להבין קהל יעד, מטרות וסגנון האירוע.' },
                  { step: '02', text: 'בוחרות פורמט (הרצאה/סדנה) ותאריך מתאים.' },
                  { step: '03', text: 'מגדירות פרטים לוגיסטיים: משך, ציוד נדרש, מספר משתתפות.' },
                  { step: '04', text: 'ביום האירוע - הרצאה מעשית ומרגשת עם מקום לשאלות.' }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-gradient-to-br from-gold to-gold-dark rounded-2xl flex items-center justify-center flex-shrink-0 text-white font-serif font-bold text-lg shadow-md group-hover:scale-110 transition-transform">
                      {item.step}
                    </div>
                    <p className="pt-3">{item.text}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-sage-light/50 p-6 rounded-2xl border border-sage/10">
              <h2 className="text-xl md:text-2xl font-serif font-bold text-sage-dark mb-3">אזורי פעילות</h2>
              <p>
                ההרצאה זמינה להזמנה בכל הארץ. ניתן לתאם בקלות גם באזור השרון הצפוני (כולל חריש, חדרה ופרדס חנה והסביבה).
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-sage-dark mb-4 md:mb-5">שאלות נפוצות</h2>
              <div className="space-y-4">
                {[
                  { q: 'כמה זמן נמשכת ההרצאה?', a: 'המשך נקבע לפי הפורמט והאירוע. בשיחה נבחר משך שמתאים לקהל ולמטרה.' },
                  { q: 'אפשר להתאים את התוכן לקהל ספציפי?', a: 'כן. אפשר להתאים דגשים לפי גיל, ארגון/קהילה, ואופי האירוע.' },
                  { q: 'מה צריך להכין מראש?', a: 'בדרך כלל מספיק חלל מתאים ומסך/מקרן לפי הצורך. נסגור את כל הפרטים מראש.' }
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
                <Link href="/consciousness" className="inline-flex items-center gap-2 bg-sage-light/60 hover:bg-sage-light px-5 py-3 rounded-full text-sage-dark font-semibold transition-all hover:shadow-md">
                  <span>טיפול תודעה בשיטת שלושת המימדים</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                  </svg>
                </Link>
              </div>
            </section>

            {/* Quote Section */}
            <section className="relative bg-gradient-to-br from-gold/15 via-peach/20 to-sage-light/20 p-8 md:p-10 rounded-[2rem] border-2 border-gold/20 overflow-hidden">
              <div className="absolute top-4 right-6 text-6xl text-gold/30 font-serif">"</div>
              <div className="relative z-10">
                <p className="text-lg md:text-xl italic text-sage-dark leading-relaxed">
                  סיפורי החיים שלנו לא נכתבים מראש. יש לנו את הכוח לשנות את הכיוון,
                  להפוך כל נפילה לקפיצת מדרגה, וכל משבר להזדמנות לצמיחה אמיתית.
                  זה לא תמיד קל, אבל זה תמיד אפשרי - ואני כאן כדי להראות לכן איך.
                </p>
                <p className="text-left mt-4 font-serif font-bold text-gold-dark text-lg">- אושר</p>
              </div>
            </section>

            {/* Call to Action */}
            <div className="relative bg-gradient-to-br from-gold/10 via-peach/30 to-sage-light/20 backdrop-blur-lg rounded-[2rem] p-8 md:p-10 text-center border-2 border-gold/20 overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-gold/10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-terracotta/10 rounded-full blur-2xl"></div>

              <div className="relative z-10">
                <p className="text-xl md:text-2xl font-serif font-bold text-sage-dark mb-6">
                  מעוניינת להזמין את ההרצאה? התקשרי עכשיו
                </p>
                <a
                  href="tel:0507660560"
                  className="inline-block bg-gradient-to-r from-gold to-gold-dark hover:from-gold-dark hover:to-gold text-white font-bold text-lg md:text-xl px-10 md:px-14 py-4 md:py-5 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1"
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
                  <a href="#lecture-contact" className="text-sage-dark hover:text-terracotta font-semibold underline decoration-2 underline-offset-4 hover:decoration-terracotta transition-all">
                    או השאירי פרטים ואחזור אלייך
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Images Section */}
        <section className="max-w-5xl mx-auto py-8 md:py-12 animate-fade-in-up animation-delay-200">
          <div className="text-center mb-8 md:mb-10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-sage-dark mb-4">
              מה אומרות נשים שהשתתפו בהרצאה
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[1, 2, 3].map((num) => (
              <div key={num} className="rounded-[2rem] overflow-hidden shadow-xl border-2 border-gold/10 hover:shadow-2xl transition-shadow duration-300 hover:-translate-y-1">
                <img
                  src={`/images/testemoniel_lecture${num}.jpeg`}
                  alt={`המלצה מהרצאה מצניחה לצמיחה - ${num}`}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Contact Form */}
      <ContactForm />

      {/* Contact Section */}
      <LectureContactSection />

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
