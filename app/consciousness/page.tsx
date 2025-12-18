import Link from 'next/link';
import type { Metadata } from 'next';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';
import ContactSection from '../components/ContactSection';
import { consciousnessTestimonials } from '../data/testimonials';
import { homeTestimonials } from '../data/testimonials';

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
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-pink-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-md sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 md:py-6">
          <Link href="/" className="inline-block mb-2 text-purple-600 hover:text-purple-700 text-sm md:text-base">
            ← חזרה לדף הבית
          </Link>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-purple-700">
            טיפול תודעה בשיטת שלושת המימדים
          </h1>
          <p className="text-center text-pink-600 font-semibold text-base md:text-lg mt-2">
            נשים בלבד ✨
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 md:py-12 max-w-4xl">
        <article className="bg-white/90 backdrop-blur rounded-3xl shadow-2xl p-6 md:p-8 lg:p-12">
          {/* Hero Icon */}
          <div className="flex justify-center mb-6 md:mb-8">
            <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center">
              <svg className="w-12 h-12 md:w-16 md:h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-4 md:space-y-6 text-gray-700 leading-relaxed text-base md:text-lg">
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-purple-700 mb-3 md:mb-4">מהי שיטת שלושת המימדים?</h2>
              <p>
                שיטת שלושת המימדים היא גישה טיפולית ייחודית ומקיפה לפיתוח תודעה ושינוי פנימי עמוק.
                השיטה מבוססת על עבודה במקביל על שלושה ממדים מרכזיים בחיינו - הממד הפיזי, הממד הרגשי והממד הרוחני.
              </p>
              <div className="mt-4">
                <a 
                  href="https://cmtm.co.il/articles/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-purple-600 hover:text-purple-700 font-semibold text-base md:text-lg underline hover:no-underline transition-all"
                >
                  למידע נוסף על השיטה
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-purple-700 mb-3 md:mb-4">שלושת המימדים</h2>
              <div className="space-y-4">
                <div className="bg-purple-50 p-4 md:p-6 rounded-xl">
                  <h3 className="text-lg md:text-xl font-semibold text-purple-800 mb-2">הממד הפיזי</h3>
                  <p>
                    עבודה על הגוף, התחושות הפיזיות וההבנה של הקשר בין גוף לנפש.
                    שחרור מתחים פיזיים המשקפים עומסים רגשיים.
                  </p>
                </div>
                
                <div className="bg-purple-50 p-4 md:p-6 rounded-xl">
                  <h3 className="text-lg md:text-xl font-semibold text-purple-800 mb-2">הממד הרגשי</h3>
                  <p>
                    חקירה והבנה של הרגשות, האמונות והדפוסים הרגשיים שמנחים את חיינו.
                    שחרור של רגשות עכורים וריפוי פצעים רגשיים.
                  </p>
                </div>
                
                <div className="bg-purple-50 p-4 md:p-6 rounded-xl">
                  <h3 className="text-lg md:text-xl font-semibold text-purple-800 mb-2">הממד הרוחני</h3>
                  <p>
                    התחברות לעצמי הפנימי העמוק, למטרת החיים ולמשמעות האישית.
                    פיתוח מודעות רוחנית והרחבת התודעה.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-purple-700 mb-3 md:mb-4">מה כולל התהליך?</h2>
              <p>
                התהליך מותאם אישית לכל אישה וכולל: תשאול ושיחה מעמיקה ומתוך כך הבנה על אילו מטרות את רוצה לעבוד ולשפר, ביחד אנחנו בודקות מה הוא היעד שלך ולאן את רוצה להגיע. אנחנו גורמות לתת מודע שלך לשנות ולחדש דפוסי מחשבה והרגלים חדשים וטובים..
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-purple-700 mb-3 md:mb-4">איך נראה מפגש בפועל?</h2>
              <ol className="list-decimal list-inside space-y-2 mr-4">
                <li>שיחת היכרות קצרה והגדרת מטרה ברורה למפגש.</li>
                <li>מיפוי דפוסים/אמונות שמנהלים אותך ביומיום.</li>
                <li>עבודה תודעתית בשילוב שלושת המימדים (פיזי/רגשי/רוחני) לפי הצורך.</li>
                <li>חיזוק תובנות וכלים פרקטיים להמשך השבוע.</li>
                <li>סיכום והמלצה לצעדים הבאים בתהליך (אם מתאים).</li>
              </ol>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-purple-700 mb-3 md:mb-4">למי מתאים הטיפול?</h2>
              <ul className="list-disc list-inside space-y-2 mr-4">
                <li>נשים המחפשות שינוי אמיתי בחיים</li>
                <li>מי שחווה תקיעות או חוסר בהירות לגבי הדרך</li>
                <li>נשים בתהליכי מעבר או משברים</li>
                <li>מי שרוצה להעמיק את ההכרות העצמית</li>
                <li>נשים המחפשות משמעות ומטרה בחיים</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-purple-700 mb-3 md:mb-4">התוצאות</h2>
              <p>
                השיטה מובילה לשינוי מודעות עמוק, הבנה חדשה של עצמך ושל החיים שלך,
                שחרור מדפוסים מגבילים, והתחברות אמיתית לכוח הפנימי והחוכמה שבתוכך.
                הטיפול מאפשר צמיחה אישית ורוחנית משמעותית ובעלת השפעה ארוכת טווח.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-purple-700 mb-3 md:mb-4">אזורי שירות</h2>
              <p>
                הקליניקה בחריש ומלווה נשים מאזור השרון הצפוני, כולל חריש, חדרה, פרדס חנה והסביבה (בתיאום מראש).
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-purple-700 mb-3 md:mb-4">שאלות נפוצות</h2>
              <div className="space-y-4">
                <div className="bg-purple-50 p-4 md:p-5 rounded-xl">
                  <h3 className="text-lg md:text-xl font-semibold text-purple-800 mb-2">האם צריך ניסיון קודם בטיפול תודעתי?</h3>
                  <p>לא. מתחילים מהנקודה שבה את נמצאת ומתקדמים בקצב שמתאים לך.</p>
                </div>
                <div className="bg-purple-50 p-4 md:p-5 rounded-xl">
                  <h3 className="text-lg md:text-xl font-semibold text-purple-800 mb-2">אחרי כמה מפגשים מרגישים שינוי?</h3>
                  <p>יש נשים שמרגישות הקלה כבר אחרי מפגש אחד, ולרוב תהליך עמוק נבנה לאורך כמה מפגשים.</p>
                </div>
                <div className="bg-purple-50 p-4 md:p-5 rounded-xl">
                  <h3 className="text-lg md:text-xl font-semibold text-purple-800 mb-2">מה ההבדל בין שיחה רגילה לבין טיפול בשיטה?</h3>
                  <p>המטרה היא לא רק להבין, אלא גם לשנות דפוסים בפועל בעבודה תודעתית ממוקדת ומובנית.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-purple-700 mb-3 md:mb-4">אולי יעניין אותך גם</h2>
              <ul className="list-disc list-inside space-y-2 mr-4">
                <li>
                  <Link href="/massage" className="text-purple-700 hover:text-purple-800 underline hover:no-underline">
                    טיפול מגע עם שמנים אתריים
                  </Link>
                </li>
                <li>
                  <Link href="/lecture" className="text-purple-700 hover:text-purple-800 underline hover:no-underline">
                    הרצאה: מצניחה לצמיחה - חיים כנגד כל הסיכויים
                  </Link>
                </li>
              </ul>
            </section>

            {/* Certification Image */}
            {/* <section>
              <h2 className="text-xl md:text-2xl font-bold text-purple-700 mb-3 md:mb-4">הסמכה מקצועית</h2>
              <div className="flex justify-center">
                <img 
                  src="/images/certification.jpeg" 
                  alt="תעודת הסמכה בשיטת שלושת המימדים"
                  className="rounded-xl shadow-lg max-w-full h-auto -mb-[120px] mt-[20px]"
                />
              </div>
            </section> */}

            <section>
            <h2 className="text-xl md:text-2xl font-bold text-purple-700 mb-3 md:mb-4">הסמכה מקצועית</h2>
            <div className="flex justify-center">
              <div className="w-full max-w-2xl h-[400px] md:h-[600px] overflow-hidden rounded-xl shadow-lg">
                <img 
                  src="/images/certification.jpeg" 
                  alt="תעודת הסמכה בשיטת שלושת המימדים"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </section>
            {/* Call to Action */}
            <div className="pt-6 md:pt-8 text-center border-t border-gray-200">
              <p className="text-lg md:text-xl font-semibold text-purple-700 mb-4 md:mb-6">
                מוכנה לתאם שיחה ולהתחיל תהליך?
              </p>
              <a
                href="tel:0507660560"
                className="inline-block bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-bold text-base md:text-lg px-8 md:px-12 py-3 md:py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                dir="ltr"
              >
                050-766-0560
              </a>
              <div className="mt-4">
                <a href="#clinic-contact" className="text-purple-700 hover:text-purple-800 font-semibold underline hover:no-underline transition-all">
                  או לצפייה במיקום הקליניקה
                </a>
              </div>
            </div>
          </div>
        </article>

        {/* Testimonials Section */}
        {/* <Testimonials testimonials={consciousnessTestimonials} /> */}
      </main>

      {/* Contact Form */}
      <ContactForm />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-sm mt-12 md:mt-20 py-6 md:py-8">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p className="text-base md:text-lg">הקליניקה של אושר © 2025</p>
          <p className="mt-2 text-sm md:text-base">כל הזכויות שמורות</p>
        </div>
      </footer>
    </div>
  );
}
