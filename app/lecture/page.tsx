import Link from 'next/link';
import type { Metadata } from 'next';
import ContactForm from '../components/ContactForm';
import LectureContactSection from '../components/LectureContactSection';

export const metadata: Metadata = {
  title: 'הרצאה: מצניחה לצמיחה - חיים כנגד כל הסיכויים | הקליניקה של אושר',
  description:
    'הרצאה מעוררת השראה לנשים על התגברות על אתגרים והפיכת משברים להזדמנויות לצמיחה. להזמנות ותיאום שיחה: 050-766-0560.',
  alternates: {
    canonical: 'https://osherclinic.co.il/lecture',
  },
};

export default function LecturePage() {
  return (
    <div className="min-h-screen bg-cream-50">
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 bg-sand-200/40 rounded-full blur-3xl" />
        <div className="absolute top-60 right-10 w-48 h-48 bg-terracotta-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-1/4 w-56 h-56 bg-sand-100/40 rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <header className="relative bg-white/70 backdrop-blur-md border-b border-sand-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 md:py-5">
          <Link href="/" className="inline-flex items-center text-sand-700 hover:text-sand-800 text-sm md:text-base mb-3 transition-colors">
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            חזרה לדף הבית
          </Link>
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-forest-800 tracking-tight">
              מצניחה לצמיחה
            </h1>
            <p className="text-sand-600 font-medium text-sm md:text-base mt-2 flex items-center justify-center gap-2">
              <span className="w-6 h-px bg-sand-300"></span>
              חיים כנגד כל הסיכויים
              <span className="w-6 h-px bg-sand-300"></span>
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative container mx-auto px-4 py-8 md:py-12 max-w-4xl">
        <article className="bg-white rounded-4xl shadow-soft-lg p-6 md:p-10 lg:p-14 border border-sand-100/30">
          {/* Hero Icon */}
          <div className="flex justify-center mb-8 md:mb-10">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-sand-200 to-sand-300 rounded-3xl flex items-center justify-center shadow-soft">
              <svg className="w-10 h-10 md:w-12 md:h-12 text-sand-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8 md:space-y-10 text-forest-700 leading-relaxed text-base md:text-lg">
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-forest-800 mb-4 flex items-center">
                <span className="w-8 h-1 bg-sand-400 rounded-full ml-3"></span>
                על ההרצאה
              </h2>
              <p>
                הרצאה מעוררת השראה ומלאת תקווה המבוססת על סיפור אישי אמיתי של התגברות על אתגרים קשים
                והפיכת משברים להזדמנויות לצמיחה ושינוי. זהו מסע מרגש מצניחה לצמיחה - סיפור של חיים
                שנבנו מחדש כנגד כל הסיכויים.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-forest-800 mb-4 flex items-center">
                <span className="w-8 h-1 bg-sand-400 rounded-full ml-3"></span>
                נושאים מרכזיים בהרצאה
              </h2>
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-sand-50 to-cream-50 p-5 md:p-6 rounded-2xl border border-sand-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-sand-200 flex items-center justify-center">
                      <svg className="w-5 h-5 text-sand-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                      </svg>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-forest-800">הכוח שבמשברים</h3>
                  </div>
                  <p className="text-forest-600">
                    כיצד משברים וקשיים יכולים להפוך לנקודת המפנה החזקה ביותר בחיינו
                  </p>
                </div>

                <div className="bg-gradient-to-br from-sand-50 to-cream-50 p-5 md:p-6 rounded-2xl border border-sand-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-sand-200 flex items-center justify-center">
                      <svg className="w-5 h-5 text-sand-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                      </svg>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-forest-800">מצניחה לצמיחה</h3>
                  </div>
                  <p className="text-forest-600">
                    כלים מעשיים ליציאה מתחושת תקיעות והתחלה מחודשת מתוך מקום של כוח
                  </p>
                </div>

                <div className="bg-gradient-to-br from-sand-50 to-cream-50 p-5 md:p-6 rounded-2xl border border-sand-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-sand-200 flex items-center justify-center">
                      <svg className="w-5 h-5 text-sand-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                      </svg>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-forest-800">האמונה בעצמך</h3>
                  </div>
                  <p className="text-forest-600">
                    פיתוח החוזק הפנימי והאמונה שכל דבר אפשרי, גם כנגד כל הסיכויים
                  </p>
                </div>

                <div className="bg-gradient-to-br from-sand-50 to-cream-50 p-5 md:p-6 rounded-2xl border border-sand-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-sand-200 flex items-center justify-center">
                      <svg className="w-5 h-5 text-sand-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                      </svg>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-forest-800">בניית חיים חדשים</h3>
                  </div>
                  <p className="text-forest-600">
                    צעדים מעשיים ליצירת המציאות שאת באמת רוצה לחיות בה
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-forest-800 mb-4 flex items-center">
                <span className="w-8 h-1 bg-sand-400 rounded-full ml-3"></span>
                למי מיועדת ההרצאה?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'נשים העוברות תקופה מאתגרת או משבר אישי',
                  'מי שמרגישה תקועה ומחפשת השראה לשינוי',
                  'נשים שרוצות ללמוד כיצד להפוך קשיים להזדמנויות',
                  'מי שצריכה חיזוק ואמונה שאפשר גם אחרת',
                  'כל אישה המחפשת תקווה, חוזק והשראה'
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-xl bg-sand-50/50">
                    <div className="w-6 h-6 rounded-full bg-sand-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-sand-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                <span className="w-8 h-1 bg-sand-400 rounded-full ml-3"></span>
                מה תקבלי מההרצאה?
              </h2>
              <p>
                ההרצאה תעניק לך השראה אמיתית, תקווה מחודשת ובעיקר - הבנה עמוקה שאת מסוגלת להתמודד
                עם כל אתגר ולצמוח ממנו. תלמדי כלים מעשיים להתמודדות עם משברים, ותצאי עם תחושה
                מחוזקת של כוח אישי ואפשרות.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-forest-800 mb-4 flex items-center">
                <span className="w-8 h-1 bg-sand-400 rounded-full ml-3"></span>
                פורמטים זמינים
              </h2>
              <div className="bg-gradient-to-br from-sand-50 to-cream-50 p-6 md:p-8 rounded-3xl border border-sand-200">
                <p className="mb-4 font-medium text-forest-800">ההרצאה ניתנת במספר פורמטים:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    'הרצאה קבוצתית (למפעלים, ארגונים, קהילות נשים)',
                    'סדנה מעמיקה בת מספר מפגשים',
                    'הרצאה פרטית לקבוצות קטנות',
                    'אירועים מיוחדים ויומי עיון'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2 text-forest-600">
                      <div className="w-2 h-2 rounded-full bg-sand-400"></div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-forest-800 mb-4 flex items-center">
                <span className="w-8 h-1 bg-sand-400 rounded-full ml-3"></span>
                איך מזמינים את ההרצאה?
              </h2>
              <div className="space-y-4">
                {[
                  { step: '1', text: 'מתאמות שיחת טלפון קצרה כדי להבין קהל יעד, מטרות וסגנון האירוע.' },
                  { step: '2', text: 'בוחרות פורמט (הרצאה/סדנה) ותאריך מתאים.' },
                  { step: '3', text: 'מגדירות פרטים לוגיסטיים: משך, ציוד נדרש, מספר משתתפות.' },
                  { step: '4', text: 'ביום האירוע - הרצאה מעשית ומרגשת עם מקום לשאלות.' }
                ].map((item) => (
                  <div key={item.step} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-sand-500 text-white flex items-center justify-center flex-shrink-0 font-bold text-sm">
                      {item.step}
                    </div>
                    <p className="pt-1">{item.text}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-forest-800 mb-4 flex items-center">
                <span className="w-8 h-1 bg-sand-400 rounded-full ml-3"></span>
                אזורי פעילות
              </h2>
              <p>
                ההרצאה זמינה להזמנה בכל הארץ. ניתן לתאם בקלות גם באזור השרון הצפוני (כולל חריש, חדרה ופרדס חנה והסביבה).
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-forest-800 mb-4 flex items-center">
                <span className="w-8 h-1 bg-sand-400 rounded-full ml-3"></span>
                שאלות נפוצות
              </h2>
              <div className="space-y-4">
                <div className="bg-sand-50 p-5 md:p-6 rounded-2xl border border-sand-200">
                  <h3 className="text-lg font-bold text-forest-800 mb-2">כמה זמן נמשכת ההרצאה?</h3>
                  <p className="text-forest-600">המשך נקבע לפי הפורמט והאירוע. בשיחה נבחר משך שמתאים לקהל ולמטרה.</p>
                </div>
                <div className="bg-sand-50 p-5 md:p-6 rounded-2xl border border-sand-200">
                  <h3 className="text-lg font-bold text-forest-800 mb-2">אפשר להתאים את התוכן לקהל ספציפי?</h3>
                  <p className="text-forest-600">כן. אפשר להתאים דגשים לפי גיל, ארגון/קהילה, ואופי האירוע.</p>
                </div>
                <div className="bg-sand-50 p-5 md:p-6 rounded-2xl border border-sand-200">
                  <h3 className="text-lg font-bold text-forest-800 mb-2">מה צריך להכין מראש?</h3>
                  <p className="text-forest-600">בדרך כלל מספיק חלל מתאים ומסך/מקרן לפי הצורך. נסגור את כל הפרטים מראש.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-forest-800 mb-4 flex items-center">
                <span className="w-8 h-1 bg-sand-400 rounded-full ml-3"></span>
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
                  href="/consciousness"
                  className="flex items-center gap-3 p-4 rounded-2xl bg-terracotta-50 hover:bg-terracotta-100 border border-terracotta-100 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-terracotta-100 group-hover:bg-terracotta-200 flex items-center justify-center transition-colors">
                    <svg className="w-5 h-5 text-terracotta-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <span className="text-terracotta-700 font-medium">טיפול תודעה בשיטת שלושת המימדים</span>
                </Link>
              </div>
            </section>

            {/* Quote */}
            <section className="bg-gradient-to-br from-sand-100 to-cream-100 p-6 md:p-8 rounded-3xl border border-sand-200">
              <p className="text-lg md:text-xl italic text-forest-700 text-center leading-relaxed">
                "סיפורי החיים שלנו לא נכתבים מראש. יש לנו את הכוח לשנות את הכיוון,
                להפוך כל נפילה לקפיצת מדרגה, וכל משבר להזדמנות לצמיחה אמיתית.
                זה לא תמיד קל, אבל זה תמיד אפשרי - ואני כאן כדי להראות לכן איך."
              </p>
              <p className="text-left mt-4 font-bold text-sand-700">- אושר</p>
            </section>

            {/* Call to Action */}
            <div className="pt-8 mt-8 border-t border-sand-200">
              <div className="text-center">
                <p className="text-xl md:text-2xl font-bold text-forest-800 mb-6">
                  מעוניינת להזמין את ההרצאה?
                </p>
                <a
                  href="tel:0507660560"
                  className="inline-flex items-center justify-center px-12 py-4 rounded-full font-bold text-lg text-white bg-gradient-to-r from-sand-500 to-sand-600 hover:from-sand-600 hover:to-sand-700 shadow-soft hover:shadow-soft-lg transition-all duration-300 transform hover:scale-[1.02]"
                  dir="ltr"
                >
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  050-766-0560
                </a>
                <div className="mt-4">
                  <a href="#lecture-contact" className="text-sand-600 hover:text-sand-700 font-semibold underline hover:no-underline transition-all">
                    או השאירי פרטים ואחזור אלייך
                  </a>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Testimonials Images Section */}
        <section className="py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-forest-800 mb-10 md:mb-14 text-center">
            מה אומרות נשים שהשתתפו בהרצאה
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[1, 2, 3].map((num) => (
              <div key={num} className="rounded-3xl overflow-hidden shadow-soft-lg border border-sand-100 bg-white">
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
