'use client';

import Link from 'next/link';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import ContactSection from './components/ContactSection';
import { homeTestimonials } from './data/testimonials';

export default function Home() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-pink-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-md sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 md:py-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-primary-700">
            הקליניקה של אושר
          </h1>
          <p className="text-center text-pink-600 font-semibold text-base md:text-lg mt-2">
            נשים בלבד ✨
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 md:py-12">
        {/* Three Highlight Squares Section */}
        <section className="mb-12 md:mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {/* First Square - Massage Treatment */}
            <Link href="/massage" className="block">
              <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-6 md:p-8 flex flex-col items-center text-center group hover:scale-105 cursor-pointer min-h-[280px] sm:min-h-[320px]">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center mb-4 md:mb-6 group-hover:rotate-12 transition-transform duration-300">
                  <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-primary-800 mb-3 md:mb-4">
                  טיפול מגע עם שמנים אתריים
                </h2>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  חוויית טיפול מרגיעה ומחדשת המשלבת מגע מקצועי עם שמנים אתריים איכותיים לאיזון גוף ונפש
                </p>
                <div className="mt-auto pt-4">
                  <span className="text-primary-600 font-semibold text-sm md:text-base group-hover:underline">
                    לחצי למידע נוסף ←
                  </span>
                </div>
              </div>
            </Link>

            {/* Second Square - Consciousness Treatment */}
            <Link href="/consciousness" className="block">
              <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-6 md:p-8 flex flex-col items-center text-center group hover:scale-105 cursor-pointer min-h-[280px] sm:min-h-[320px]">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mb-4 md:mb-6 group-hover:rotate-12 transition-transform duration-300">
                  <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-purple-800 mb-3 md:mb-4">
                  טיפול תודעה בשיטת שלושת המימדים
                </h2>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  שיטה ייחודית לפיתוח תודעה ושינוי פנימי עמוק המאפשרת צמיחה אישית ורוחנית
                </p>
                <div className="mt-auto pt-4">
                  <span className="text-purple-600 font-semibold text-sm md:text-base group-hover:underline">
                    לחצי למידע נוסף ←
                  </span>
                </div>
              </div>
            </Link>

            {/* Third Square - Lecture */}
            <Link href="/lecture" className="block sm:col-span-2 lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-6 md:p-8 flex flex-col items-center text-center group hover:scale-105 cursor-pointer min-h-[280px] sm:min-h-[320px]">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center mb-4 md:mb-6 group-hover:rotate-12 transition-transform duration-300">
                  <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-pink-800 mb-3 md:mb-4">
                  הרצאה: מצניחה לצמיחה - חיים כנגד כל הסיכויים
                </h2>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  הרצאה מעוררת השראה על התגברות על אתגרים והפיכת משברים להזדמנויות לצמיחה
                </p>
                <div className="mt-auto pt-4">
                  <span className="text-pink-600 font-semibold text-sm md:text-base group-hover:underline">
                    לחצי למידע נוסף ←
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* About Section */}
        <section className="bg-white/90 backdrop-blur rounded-3xl shadow-2xl p-6 md:p-8 lg:p-12 max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-700 mb-4 md:mb-6 text-center">
            אודות אושר
          </h2>
          <div className="space-y-4 md:space-y-6 text-gray-700 leading-relaxed text-base md:text-lg">
            <p>
              ברוכות הבאות לקליניקה של אושר - מרכז לטיפולים הוליסטיים ופיתוח אישי המיועד במיוחד לנשים.
            </p>
            <p>
              אני אושר, מטפלת מוסמכת עם ניסיון רב בתחום הטיפול ההוליסטי, המאמינה בכוח הריפוי הטבעי של הגוף והנפש.
              המטרה שלי היא ללוות אותך במסע האישי שלך לבריאות, איזון ואושר אמיתי.
            </p>
            <p>
              בקליניקה שלי, כל אישה זוכה לטיפול אישי ומותאם, במרחב בטוח ומזמין המאפשר שחרור, ריפוי וצמיחה.
              אני משלבת שיטות טיפול מסורתיות ומודרניות כדי ליצור חוויה ייחודית המתאימה בדיוק לצרכים שלך.
            </p>
            <p className="font-semibold text-primary-700 text-center text-lg md:text-xl">
              מזמינה אותך להצטרף אליי למסע של גילוי עצמי, ריפוי ושינוי אמיתי
            </p>
          </div>
        </section>

        {/* Call to Action - Before Testimonials */}
        <section className="mt-8 md:mt-12 mb-12 md:mb-16 text-center">
          <button 
            onClick={scrollToContact}
            className="bg-gradient-to-r from-primary-500 to-pink-500 hover:from-primary-600 hover:to-pink-600 text-white font-bold text-lg md:text-xl px-8 md:px-12 py-3 md:py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            צרי קשר לקביעת פגישה
          </button>
        </section>

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
