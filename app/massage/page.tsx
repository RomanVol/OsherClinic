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
              טיפול מגע עם שמנים אתריים
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
        <section className="relative bg-white/60 backdrop-blur-md rounded-[3rem] shadow-2xl p-8 md:p-12 lg:p-16 max-w-5xl mx-auto animate-fade-in-up border-2 border-terracotta/10 overflow-hidden mb-12 md:mb-16">
          {/* Decorative corner element */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-terracotta/20 to-transparent rounded-bl-full"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-peach/30 to-transparent rounded-tr-full"></div>

          {/* Hero Icon */}
          <div className="flex justify-center mb-8 md:mb-10 relative z-10">
            <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-terracotta to-terracotta-dark rounded-3xl flex items-center justify-center shadow-xl">
              <svg className="w-12 h-12 md:w-16 md:h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8 md:space-y-10 text-gray-700 leading-relaxed text-base md:text-lg relative z-10">
            <section>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-sage-dark mb-4 md:mb-5">מהו הטיפול?</h2>
              <p className="first-letter:text-4xl first-letter:font-serif first-letter:font-bold first-letter:text-terracotta first-letter:float-right first-letter:ml-2 first-letter:leading-none">
                טיפול מגע עם שמנים אתריים הוא חוויה ייחודית המשלבת את כוח המגע הטיפולי עם התכונות הריפוייות של שמנים אתריים טבעיים.
                הטיפול מותאם אישית לכל מטופלת, תוך התחשבות במצבה הפיזי והרגשי.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-sage-dark mb-4 md:mb-5">היתרונות</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'הרפיה עמוקה של השרירים והמערכת העצבית',
                  'שיפור זרימת הדם והלימפה בגוף',
                  'הפגת מתחים רגשיים ופיזיים',
                  'חיזוק המערכת החיסונית',
                  'שיפור איכות השינה והרגשת חיוניות',
                  'איזון אנרגטי ורגשי'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3 bg-peach/30 p-4 rounded-2xl border border-gold/10">
                    <div className="w-6 h-6 bg-terracotta/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-terracotta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-sage-dark mb-4 md:mb-5">איך נראה הטיפול בפועל?</h2>
              <div className="space-y-4">
                {[
                  { step: '01', text: 'שיחה קצרה והבנת הצורך שלך (מתח, עייפות, כאבים, עומס רגשי).' },
                  { step: '02', text: 'בחירת שמנים אתריים מותאמת אישית למצבך ולמטרה של המפגש.' },
                  { step: '03', text: 'טיפול מגע רגוע ומקצועי בסביבה שקטה ובטוחה.' },
                  { step: '04', text: 'הקשבה לגוף והתאמת לחץ וקצב תוך כדי הטיפול.' },
                  { step: '05', text: 'סיום הדרגתי, שתייה והמלצות להמשך (במידת הצורך).' }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-gradient-to-br from-terracotta to-terracotta-dark rounded-2xl flex items-center justify-center flex-shrink-0 text-white font-serif font-bold text-lg shadow-md group-hover:scale-110 transition-transform">
                      {item.step}
                    </div>
                    <p className="pt-3">{item.text}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-gradient-to-br from-sage-light/50 to-peach/30 p-6 md:p-8 rounded-[2rem] border-2 border-gold/10">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-sage-dark mb-4 md:mb-5">השמנים האתריים</h2>
              <p className="mb-6">
                אני עובדת עם מגוון שמנים אתריים איכותיים ביותר, כל אחד עם תכונות ייחודיות משלו.
                השמנים נבחרים במיוחד עבורך בהתאם למצבך ולצרכים שלך - מלבנדר להרגעה, בלאנס לאיזון רגשי,
                תפוז להעלאת אנרגיה ולבונה להפגת חרדות ומתחים ועוד רבים נוספים.
              </p>
              <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-gold/20">
                <h3 className="text-xl md:text-2xl font-serif font-semibold text-sage-dark mb-4">שמנים אתריים של חברת דוטרה</h3>
                <p className="mb-4">
                  בקליניקה אני משתמשת בשמנים אתריים איכותיים של חברת דוטרה (doTERRA), המובילה העולמית בתחום השמנים האתריים הטהורים והטבעיים.
                </p>
                <p className="mb-6">
                  ניתן לרכוש את השמנים האתריים דרך הקליניקה של אושר - אשמח לייעץ לך ולהתאים את השמנים המתאימים ביותר עבורך.
                </p>

                <div className="flex flex-col items-start gap-4">
                  <a
                    href="https://www.doterra.com/IL/he_IL"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sage-dark hover:text-terracotta font-semibold text-base md:text-lg underline decoration-2 underline-offset-4 hover:decoration-terracotta transition-all"
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
                    className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <Image
                      src="/images/doTerraOil.jpeg"
                      alt="שמנים אתריים doTERRA בקליניקה של אושר"
                      width={250}
                      height={250}
                      className="hover:scale-105 transition-transform duration-500"
                    />
                  </a>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-sage-dark mb-4 md:mb-5">למי מתאים הטיפול?</h2>
              <p>
                הטיפול מתאים לכל אישה המחפשת רגע של שקט, הרפיה ושיקום. במיוחד מומלץ לנשים הסובלות ממתחים,
                כאבי שרירים, עייפות כרונית, או פשוט מחפשות חוויה של פינוק עצמי ודאגה לגוף ולנפש.
              </p>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-peach/40 p-6 rounded-2xl border border-terracotta/10">
                <h2 className="text-xl md:text-2xl font-serif font-bold text-sage-dark mb-3">משך הטיפול</h2>
                <p>
                  טיפול סטנדרטי נמשך כשעה עד שעה וחצי, ומתבצע במרחב שקט ומזמין שיאפשר לך להירגע ולהתחבר לעצמך.
                </p>
              </div>
              <div className="bg-sage-light/50 p-6 rounded-2xl border border-sage/10">
                <h2 className="text-xl md:text-2xl font-serif font-bold text-sage-dark mb-3">אזורי שירות</h2>
                <p>
                  הקליניקה בחריש ומעניקה טיפול לנשים מאזור השרון הצפוני, כולל חריש, חדרה, פרדס חנה והסביבה.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-sage-dark mb-4 md:mb-5">שאלות נפוצות</h2>
              <div className="space-y-4">
                {[
                  { q: 'האם הטיפול מתאים גם למי שמעולם לא עשתה טיפול מגע?', a: 'כן. מתחילים בעדינות, מסבירים כל שלב, ומתאימים את הטיפול לקצב ולנוחות שלך.' },
                  { q: 'איך בוחרים את השמנים האתריים?', a: 'הבחירה נעשית יחד איתך לפי תחושה, מטרה טיפולית ומצב רגשי/פיזי באותו יום.' },
                  { q: 'כמה זמן נמשך טיפול ומה כדאי להביא?', a: 'בדרך כלל שעה עד שעה וחצי. מומלץ להגיע בבגדים נוחים ולתת לעצמך זמן להירגע אחרי.' }
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
                <Link href="/consciousness" className="inline-flex items-center gap-2 bg-sage-light/60 hover:bg-sage-light px-5 py-3 rounded-full text-sage-dark font-semibold transition-all hover:shadow-md">
                  <span>טיפול תודעה בשיטת שלושת המימדים</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                  </svg>
                </Link>
                <Link href="/lecture" className="inline-flex items-center gap-2 bg-peach/60 hover:bg-peach px-5 py-3 rounded-full text-gold-dark font-semibold transition-all hover:shadow-md">
                  <span>הרצאה: מצניחה לצמיחה</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                  </svg>
                </Link>
              </div>
            </section>

            {/* Call to Action */}
            <div className="relative bg-gradient-to-br from-terracotta/10 via-peach/30 to-sage-light/20 backdrop-blur-lg rounded-[2rem] p-8 md:p-10 text-center border-2 border-gold/20 overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-gold/10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-terracotta/10 rounded-full blur-2xl"></div>

              <div className="relative z-10">
                <p className="text-xl md:text-2xl font-serif font-bold text-sage-dark mb-6">
                  מוכנה לתאם שיחה ולקבוע טיפול?
                </p>
                <a
                  href="tel:0507660560"
                  className="inline-block bg-gradient-to-r from-terracotta to-terracotta-dark hover:from-terracotta-dark hover:to-terracotta text-white font-bold text-lg md:text-xl px-10 md:px-14 py-4 md:py-5 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1"
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

        {/* Testimonials Section */}
        <Testimonials testimonials={homeTestimonials} />
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
              הקליניקה של אושר
            </h3>
            <div className="w-16 h-[2px] bg-gold/50 mx-auto mb-6"></div>

            <div className="text-sage-light/80 space-y-2">
              <p className="text-base md:text-lg font-semibold">מרכז לטיפולים הוליסטיים ופיתוח אישי</p>
              <p className="text-sm md:text-base">נשים בלבד • חריש, השרון הצפוני</p>
            </div>

            <div className="mt-8 pt-6 border-t border-sage/30">
              <p className="text-sage-light/60 text-sm">© 2025 הקליניקה של אושר • כל הזכויות שמורות</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
