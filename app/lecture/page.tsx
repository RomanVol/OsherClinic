import Link from 'next/link';
import type { Metadata } from 'next';
import ContactForm from '../components/ContactForm';
import LectureContactSection from '../components/LectureContactSection';

export const metadata: Metadata = {
  title: 'מצניחה לצמיחה - חיים כנגד כל הסיכויים | הקליניקה של אושר',
  description: 'הרצאה מעוררת השראה על התגברות על אתגרים והפיכת משברים להזדמנויות לצמיחה',
};

export default function LecturePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-pink-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-md sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 md:py-6">
          <Link href="/" className="inline-block mb-2 text-pink-600 hover:text-pink-700 text-sm md:text-base">
            ← חזרה לדף הבית
          </Link>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-pink-700">
            מצניחה לצמיחה - חיים כנגד כל הסיכויים
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
            <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center">
              <svg className="w-12 h-12 md:w-16 md:h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-4 md:space-y-6 text-gray-700 leading-relaxed text-base md:text-lg">
            <section>
              <h2 className="text-xl md:text-2xl font-bold text-pink-700 mb-3 md:mb-4">על ההרצאה</h2>
              <p>
                הרצאה מעוררת השראה ומלאת תקווה המבוססת על סיפור אישי אמיתי של התגברות על אתגרים קשים
                והפיכת משברים להזדמנויות לצמיחה ושינוי. זהו מסע מרגש מצניחה לצמיחה - סיפור של חיים
                שנבנו מחדש כנגד כל הסיכויים.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-pink-700 mb-3 md:mb-4">נושאים מרכזיים בהרצאה</h2>
              <div className="space-y-3">
                <div className="bg-pink-50 p-4 md:p-5 rounded-xl">
                  <h3 className="text-lg md:text-xl font-semibold text-pink-800 mb-2">הכוח שבמשברים</h3>
                  <p>
                    כיצד משברים וקשיים יכולים להפוך לנקודת המפנה החזקה ביותר בחיינו
                  </p>
                </div>
                
                <div className="bg-pink-50 p-4 md:p-5 rounded-xl">
                  <h3 className="text-lg md:text-xl font-semibold text-pink-800 mb-2">מצניחה לצמיחה</h3>
                  <p>
                    כלים מעשיים ליציאה מתחושת תקיעות והתחלה מחודשת מתוך מקום של כוח
                  </p>
                </div>
                
                <div className="bg-pink-50 p-4 md:p-5 rounded-xl">
                  <h3 className="text-lg md:text-xl font-semibold text-pink-800 mb-2">האמונה בעצמך</h3>
                  <p>
                    פיתוח החוזק הפנימי והאמונה שכל דבר אפשרי, גם כנגד כל הסיכויים
                  </p>
                </div>
                
                <div className="bg-pink-50 p-4 md:p-5 rounded-xl">
                  <h3 className="text-lg md:text-xl font-semibold text-pink-800 mb-2">בניית חיים חדשים</h3>
                  <p>
                    צעדים מעשיים ליצירת המציאות שאת באמת רוצה לחיות בה
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-pink-700 mb-3 md:mb-4">למי מיועדת ההרצאה?</h2>
              <ul className="list-disc list-inside space-y-2 mr-4">
                <li>נשים העוברות תקופה מאתגרת או משבר אישי</li>
                <li>מי שמרגישה תקועה ומחפשת השראה לשינוי</li>
                <li>נשים שרוצות ללמוד כיצד להפוך קשיים להזדמנויות</li>
                <li>מי שצריכה חיזוק ואמונה שאפשר גם אחרת</li>
                <li>כל אישה המחפשת תקווה, חוזק והשראה</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-pink-700 mb-3 md:mb-4">מה תקבלי מההרצאה?</h2>
              <p>
                ההרצאה תעניק לך השראה אמיתית, תקווה מחודשת ובעיקר - הבנה עמוקה שאת מסוגלת להתמודד
                עם כל אתגר ולצמוח ממנו. תלמדי כלים מעשיים להתמודדות עם משברים, ותצאי עם תחושה
                מחוזקת של כוח אישי ואפשרות.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-bold text-pink-700 mb-3 md:mb-4">פורמטים זמינים</h2>
              <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-4 md:p-6 rounded-xl">
                <p className="mb-3">ההרצאה ניתנת במספר פורמטים:</p>
                <ul className="list-disc list-inside space-y-2 mr-4">
                  <li>הרצאה קבוצתית (למפעלים, ארגונים, קהילות נשים)</li>
                  <li>סדנה מעמיקה בת מספר מפגשים</li>
                  <li>הרצאה פרטית לקבוצות קטנות</li>
                  <li>אירועים מיוחדים ויומי עיון</li>
                </ul>
              </div>
            </section>

            <section className="bg-pink-50 p-4 md:p-6 rounded-xl">
              <p className="text-base md:text-lg italic text-pink-900">
                "סיפורי החיים שלנו לא נכתבים מראש. יש לנו את הכוח לשנות את הכיוון,
                להפוך כל נפילה לקפיצת מדרגה, וכל משבר להזדמנות לצמיחה אמיתית.
                זה לא תמיד קל, אבל זה תמיד אפשרי - ואני כאן כדי להראות לכן איך."
              </p>
              <p className="text-right mt-3 font-semibold text-pink-800">- אושר</p>
            </section>

            {/* Call to Action */}
            <div className="pt-6 md:pt-8 text-center border-t border-gray-200">
              <p className="text-lg md:text-xl font-semibold text-pink-700 mb-4 md:mb-6">
                מעוניינת להזמין את ההרצאה או לשמוע עוד פרטים?
              </p>
              <a href="#lecture-contact" className="inline-block bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-bold text-base md:text-lg px-8 md:px-12 py-3 md:py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                צרי קשר לפרטים והזמנות
              </a>
            </div>
          </div>
        </article>

        {/* Testimonials Images Section */}
        <section className="py-8 md:py-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-pink-700 mb-8 md:mb-12 text-center">
            מה אומרות נשים שהשתתפו בהרצאה
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/images/testemoniel_lecture1.jpeg"
                alt="המלצה מהרצאה"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/images/testemoniel_lecture2.jpeg"
                alt="המלצה מהרצאה"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/images/testemoniel_lecture3.jpeg"
                alt="המלצה מהרצאה"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>
      </main>

      {/* Contact Form */}
      <ContactForm />

      {/* Contact Section */}
      <LectureContactSection />

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
