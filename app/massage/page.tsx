import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';
import ContactSection from '../components/ContactSection';
import { homeTestimonials } from '../data/testimonials';

export const metadata: Metadata = {
  title: 'טיפול מגע עם שמנים אתריים לנשים | הקליניקה של אושר',
  description:
    'טיפול מגע מקצועי עם שמנים אתריים לנשים בלבד: הרפיה, איזון גוף-נפש והפגת מתחים. לתיאום שיחה בקלות: 050-766-0560 (אזור השרון הצפוני).',
  alternates: {
    canonical: 'https://osherclinic.co.il/massage',
  },
};

export default function MassagePage() {
  return (
    <div className="min-h-screen bg-cream-50">
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-64 h-64 bg-sage-200/30 rounded-full blur-3xl" />
        <div className="absolute top-60 left-20 w-48 h-48 bg-sand-200/40 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-1/3 w-56 h-56 bg-sage-100/30 rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <header className="relative bg-white/70 backdrop-blur-md border-b border-sage-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 md:py-5">
          <Link href="/" className="inline-flex items-center text-sage-600 hover:text-sage-700 text-sm md:text-base mb-3 transition-colors">
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            חזרה לדף הבית
          </Link>
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-forest-800 tracking-tight">
              טיפול מגע עם שמנים אתריים
            </h1>
            <p className="text-sage-600 font-medium text-sm md:text-base mt-2 flex items-center justify-center gap-2">
              <span className="w-6 h-px bg-sage-300"></span>
              לנשים בלבד
              <span className="w-6 h-px bg-sage-300"></span>
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative container mx-auto px-4 py-8 md:py-12 max-w-4xl">
        <article className="bg-white rounded-4xl shadow-soft-lg p-6 md:p-10 lg:p-14 border border-sage-100/30">
          {/* Hero Icon */}
          <div className="flex justify-center mb-8 md:mb-10">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-sage-100 to-sage-200 rounded-3xl flex items-center justify-center shadow-soft">
              <svg className="w-10 h-10 md:w-12 md:h-12 text-sage-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8 md:space-y-10 text-forest-700 leading-relaxed text-base md:text-lg">
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-forest-800 mb-4 flex items-center">
                <span className="w-8 h-1 bg-sage-400 rounded-full ml-3"></span>
                מהו הטיפול?
              </h2>
              <p>
                טיפול מגע עם שמנים אתריים הוא חוויה ייחודית המשלבת את כוח המגע הטיפולי עם התכונות הריפוייות של שמנים אתריים טבעיים.
                הטיפול מותאם אישית לכל מטופלת, תוך התחשבות במצבה הפיזי והרגשי.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-forest-800 mb-4 flex items-center">
                <span className="w-8 h-1 bg-sage-400 rounded-full ml-3"></span>
                היתרונות
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'הרפיה עמוקה של השרירים והמערכת העצבית',
                  'שיפור זרימת הדם והלימפה בגוף',
                  'הפגת מתחים רגשיים ופיזיים',
                  'חיזוק המערכת החיסונית',
                  'שיפור איכות השינה והרגשת חיוניות',
                  'איזון אנרגטי ורגשי'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-xl bg-sage-50/50">
                    <div className="w-6 h-6 rounded-full bg-sage-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-forest-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-forest-800 mb-4 flex items-center">
                <span className="w-8 h-1 bg-sage-400 rounded-full ml-3"></span>
                איך נראה הטיפול בפועל?
              </h2>
              <div className="space-y-4">
                {[
                  { step: '1', text: 'שיחה קצרה והבנת הצורך שלך (מתח, עייפות, כאבים, עומס רגשי).' },
                  { step: '2', text: 'בחירת שמנים אתריים מותאמת אישית למצבך ולמטרה של המפגש.' },
                  { step: '3', text: 'טיפול מגע רגוע ומקצועי בסביבה שקטה ובטוחה.' },
                  { step: '4', text: 'הקשבה לגוף והתאמת לחץ וקצב תוך כדי הטיפול.' },
                  { step: '5', text: 'סיום הדרגתי, שתייה והמלצות להמשך (במידת הצורך).' }
                ].map((item) => (
                  <div key={item.step} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-sage-500 text-white flex items-center justify-center flex-shrink-0 font-bold text-sm">
                      {item.step}
                    </div>
                    <p className="pt-1">{item.text}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-forest-800 mb-4 flex items-center">
                <span className="w-8 h-1 bg-sage-400 rounded-full ml-3"></span>
                השמנים האתריים
              </h2>
              <p className="mb-4">
                אני עובדת עם מגוון שמנים אתריים איכותיים ביותר, כל אחד עם תכונות ייחודיות משלו.
                השמנים נבחרים במיוחד עבורך בהתאם למצבך ולצרכים שלך - מלבנדר להרגעה, בלאנס לאיזון רגשי,
                תפוז להעלאת אנרגיה ולבונה להפגת חרדות ומתחים ועוד רבים נוספים.
              </p>
              <div className="bg-gradient-to-br from-sage-50 to-sand-50 p-6 md:p-8 rounded-3xl border border-sage-100">
                <h3 className="text-lg md:text-xl font-bold text-forest-800 mb-3">שמנים אתריים של חברת דוטרה</h3>
                <p className="mb-3 text-forest-600">
                  בקליניקה אני משתמשת בשמנים אתריים איכותיים של חברת דוטרה (doTERRA), המובילה העולמית בתחום השמנים האתריים הטהורים והטבעיים.
                </p>
                <p className="mb-6 text-forest-600">
                  ניתן לרכוש את השמנים האתריים דרך הקליניקה של אושר - אשמח לייעץ לך ולהתאים את השמנים המתאימים ביותר עבורך.
                </p>

                <div className="flex flex-col items-start gap-4">
                  <a
                    href="https://www.doterra.com/IL/he_IL"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sage-600 hover:text-sage-700 font-semibold text-base md:text-lg underline hover:no-underline transition-all"
                  >
                    למידע נוסף על שמנים אתריים של דוטרה
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>

                  <a
                    href="https://www.doterra.com/IL/he_IL"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Image
                      src="/images/doTerraOil.jpeg"
                      alt="שמנים אתריים doTERRA בקליניקה של אושר"
                      width={250}
                      height={250}
                      className="rounded-2xl hover:opacity-90 transition-opacity shadow-soft"
                    />
                  </a>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-forest-800 mb-4 flex items-center">
                <span className="w-8 h-1 bg-sage-400 rounded-full ml-3"></span>
                למי מתאים הטיפול?
              </h2>
              <p>
                הטיפול מתאים לכל אישה המחפשת רגע של שקט, הרפיה ושיקום. במיוחד מומלץ לנשים הסובלות ממתחים,
                כאבי שרירים, עייפות כרונית, או פשוט מחפשות חוויה של פינוק עצמי ודאגה לגוף ולנפש.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-forest-800 mb-4 flex items-center">
                <span className="w-8 h-1 bg-sage-400 rounded-full ml-3"></span>
                משך הטיפול
              </h2>
              <p>
                טיפול סטנדרטי נמשך כשעה עד שעה וחצי, ומתבצע במרחב שקט ומזמין שיאפשר לך להירגע ולהתחבר לעצמך.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-forest-800 mb-4 flex items-center">
                <span className="w-8 h-1 bg-sage-400 rounded-full ml-3"></span>
                אזורי שירות
              </h2>
              <p>
                הקליניקה בחריש ומעניקה טיפול לנשים מאזור השרון הצפוני, כולל חריש, חדרה, פרדס חנה והסביבה (בתיאום מראש).
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-forest-800 mb-4 flex items-center">
                <span className="w-8 h-1 bg-sage-400 rounded-full ml-3"></span>
                שאלות נפוצות
              </h2>
              <div className="space-y-4">
                <div className="bg-sage-50 p-5 md:p-6 rounded-2xl border border-sage-100">
                  <h3 className="text-lg font-bold text-forest-800 mb-2">האם הטיפול מתאים גם למי שמעולם לא עשתה טיפול מגע?</h3>
                  <p className="text-forest-600">כן. מתחילים בעדינות, מסבירים כל שלב, ומתאימים את הטיפול לקצב ולנוחות שלך.</p>
                </div>
                <div className="bg-sage-50 p-5 md:p-6 rounded-2xl border border-sage-100">
                  <h3 className="text-lg font-bold text-forest-800 mb-2">איך בוחרים את השמנים האתריים?</h3>
                  <p className="text-forest-600">הבחירה נעשית יחד איתך לפי תחושה, מטרה טיפולית ומצב רגשי/פיזי באותו יום.</p>
                </div>
                <div className="bg-sage-50 p-5 md:p-6 rounded-2xl border border-sage-100">
                  <h3 className="text-lg font-bold text-forest-800 mb-2">כמה זמן נמשך טיפול ומה כדאי להביא?</h3>
                  <p className="text-forest-600">בדרך כלל שעה עד שעה וחצי. מומלץ להגיע בבגדים נוחים ולתת לעצמך זמן להירגע אחרי.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-forest-800 mb-4 flex items-center">
                <span className="w-8 h-1 bg-sage-400 rounded-full ml-3"></span>
                אולי יעניין אותך גם
              </h2>
              <div className="flex flex-col sm:flex-row gap-3">
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

            {/* Call to Action */}
            <div className="pt-8 mt-8 border-t border-sage-100">
              <div className="text-center">
                <p className="text-xl md:text-2xl font-bold text-forest-800 mb-6">
                  מוכנה לתאם שיחה ולקבוע טיפול?
                </p>
                <a
                  href="tel:0507660560"
                  className="btn-primary text-lg px-12"
                  dir="ltr"
                >
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  050-766-0560
                </a>
                <div className="mt-4">
                  <a href="#clinic-contact" className="text-sage-600 hover:text-sage-700 font-semibold underline hover:no-underline transition-all">
                    או לצפייה במיקום הקליניקה
                  </a>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Testimonials Section */}
        <Testimonials testimonials={homeTestimonials} colorScheme="sage" />
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
