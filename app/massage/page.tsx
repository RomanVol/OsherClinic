import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';
import ContactSection from '../components/ContactSection';
import { massageTestimonials } from '../data/testimonials';
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
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-pink-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-md sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 md:py-6">
          <Link href="/" className="inline-block mb-2 text-primary-600 hover:text-primary-700 text-sm md:text-base">
            ← חזרה לדף הבית
          </Link>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-primary-700">
            טיפול מגע עם שמנים אתריים
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
            <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center">
              <svg className="w-12 h-12 md:w-16 md:h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-4 md:space-y-6 text-gray-700 leading-relaxed text-base md:text-lg">
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-primary-700 mb-3 md:mb-4">מהו הטיפול?</h2>
              <p>
                טיפול מגע עם שמנים אתריים הוא חוויה ייחודית המשלבת את כוח המגע הטיפולי עם התכונות הריפוייות של שמנים אתריים טבעיים.
                הטיפול מותאם אישית לכל מטופלת, תוך התחשבות במצבה הפיזי והרגשי.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-primary-700 mb-3 md:mb-4">היתרונות</h2>
              <ul className="list-disc list-inside space-y-2 mr-4">
                <li>הרפיה עמוקה של השרירים והמערכת העצבית</li>
                <li>שיפור זרימת הדם והלימפה בגוף</li>
                <li>הפגת מתחים רגשיים ופיזיים</li>
                <li>חיזוק המערכת החיסונית</li>
                <li>שיפור איכות השינה והרגשת חיוניות</li>
                <li>איזון אנרגטי ורגשי</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-primary-700 mb-3 md:mb-4">איך נראה הטיפול בפועל?</h2>
              <ol className="list-decimal list-inside space-y-2 mr-4">
                <li>שיחה קצרה והבנת הצורך שלך (מתח, עייפות, כאבים, עומס רגשי).</li>
                <li>בחירת שמנים אתריים מותאמת אישית למצבך ולמטרה של המפגש.</li>
                <li>טיפול מגע רגוע ומקצועי בסביבה שקטה ובטוחה.</li>
                <li>הקשבה לגוף והתאמת לחץ וקצב תוך כדי הטיפול.</li>
                <li>סיום הדרגתי, שתייה והמלצות להמשך (במידת הצורך).</li>
              </ol>
            </section>

<section>
  <h2 className="text-xl md:text-2xl font-bold text-primary-700 mb-3 md:mb-4">השמנים האתריים</h2>
  <p>
    אני עובדת עם מגוון שמנים אתריים איכותיים ביותר, כל אחד עם תכונות ייחודיות משלו.
    השמנים נבחרים במיוחד עבורך בהתאם למצבך ולצרכים שלך - מלבנדר להרגעה, בלאנס לאיזון רגשי,
    תפוז להעלאת אנרגיה ולבונה להפגת חרדות ומתחים ועוד רבים נוספים.
  </p>
  <div className="mt-4 bg-gradient-to-r from-primary-50 to-pink-50 p-4 md:p-6 rounded-xl">
    <h3 className="text-lg md:text-xl font-semibold text-primary-800 mb-3">שמנים אתריים של חברת דוטרה</h3>
    <p className="mb-3">
      בקליניקה אני משתמשת בשמנים אתריים איכותיים של חברת דוטרה (doTERRA), המובילה העולמית בתחום השמנים האתריים הטהורים והטבעיים.
    </p>
    <p className="mb-4">
      ניתן לרכוש את השמנים האתריים דרך הקליניקה של אושר - אשמח לייעץ לך ולהתאים את השמנים המתאימים ביותר עבורך.
    </p>

    {/* Updated Layout: Flex Column */}
    <div className="flex flex-col items-start gap-4">
      {/* 1. Text Link is now above */}
      <a
        href="https://www.doterra.com/IL/he_IL"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold text-base md:text-lg underline hover:no-underline transition-all"
      >
        למידע נוסף על שמנים אתריים של דוטרה
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </a>

      {/* 2. Image is now below (also clickable) */}
      <a 
        href="https://www.doterra.com/IL/he_IL"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/images/doTerraOil.jpeg"
          alt="שמנים אתריים doTERRA בקליניקה של אושר"
          width={250}
          height={250}
          className="rounded-lg hover:opacity-90 transition-opacity"
        />
      </a>
    </div>
  </div>
</section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-primary-700 mb-3 md:mb-4">למי מתאים הטיפול?</h2>
              <p>
                הטיפול מתאים לכל אישה המחפשת רגע של שקט, הרפיה ושיקום. במיוחד מומלץ לנשים הסובלות ממתחים,
                כאבי שרירים, עייפות כרונית, או פשוט מחפשות חוויה של פינוק עצמי ודאגה לגוף ולנפש.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-primary-700 mb-3 md:mb-4">משך הטיפול</h2>
              <p>
                טיפול סטנדרטי נמשך כשעה עד שעה וחצי, ומתבצע במרחב שקט ומזמין שיאפשר לך להירגע ולהתחבר לעצמך.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-primary-700 mb-3 md:mb-4">אזורי שירות</h2>
              <p>
                הקליניקה בחריש ומעניקה טיפול לנשים מאזור השרון הצפוני, כולל חריש, חדרה, פרדס חנה והסביבה (בתיאום מראש).
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-primary-700 mb-3 md:mb-4">שאלות נפוצות</h2>
              <div className="space-y-4">
                <div className="bg-primary-50 p-4 md:p-5 rounded-xl">
                  <h3 className="text-lg md:text-xl font-semibold text-primary-800 mb-2">האם הטיפול מתאים גם למי שמעולם לא עשתה טיפול מגע?</h3>
                  <p>כן. מתחילים בעדינות, מסבירים כל שלב, ומתאימים את הטיפול לקצב ולנוחות שלך.</p>
                </div>
                <div className="bg-primary-50 p-4 md:p-5 rounded-xl">
                  <h3 className="text-lg md:text-xl font-semibold text-primary-800 mb-2">איך בוחרים את השמנים האתריים?</h3>
                  <p>הבחירה נעשית יחד איתך לפי תחושה, מטרה טיפולית ומצב רגשי/פיזי באותו יום.</p>
                </div>
                <div className="bg-primary-50 p-4 md:p-5 rounded-xl">
                  <h3 className="text-lg md:text-xl font-semibold text-primary-800 mb-2">כמה זמן נמשך טיפול ומה כדאי להביא?</h3>
                  <p>בדרך כלל שעה עד שעה וחצי. מומלץ להגיע בבגדים נוחים ולתת לעצמך זמן להירגע אחרי.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-primary-700 mb-3 md:mb-4">אולי יעניין אותך גם</h2>
              <ul className="list-disc list-inside space-y-2 mr-4">
                <li>
                  <Link href="/consciousness" className="text-primary-700 hover:text-primary-800 underline hover:no-underline">
                    טיפול תודעה בשיטת שלושת המימדים
                  </Link>
                </li>
                <li>
                  <Link href="/lecture" className="text-primary-700 hover:text-primary-800 underline hover:no-underline">
                    הרצאה: מצניחה לצמיחה - חיים כנגד כל הסיכויים
                  </Link>
                </li>
              </ul>
            </section>

            {/* Call to Action */}
            <div className="pt-6 md:pt-8 text-center border-t border-gray-200">
              <p className="text-lg md:text-xl font-semibold text-primary-700 mb-4 md:mb-6">
                מוכנה לתאם שיחה ולקבוע טיפול?
              </p>
              <a
                href="tel:0507660560"
                className="inline-block bg-gradient-to-r from-primary-500 to-pink-500 hover:from-primary-600 hover:to-pink-600 text-white font-bold text-base md:text-lg px-8 md:px-12 py-3 md:py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                dir="ltr"
              >
                050-766-0560
              </a>
              <div className="mt-4">
                <a href="#clinic-contact" className="text-primary-700 hover:text-primary-800 font-semibold underline hover:no-underline transition-all">
                  או לצפייה במיקום הקליניקה
                </a>
              </div>
            </div>
          </div>
        </article>

        {/* Testimonials Section */}
<Testimonials testimonials={homeTestimonials} />
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
