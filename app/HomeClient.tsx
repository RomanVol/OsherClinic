'use client';

import Link from 'next/link';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import ContactSection from './components/ContactSection';
import { homeTestimonials } from './data/testimonials';

export default function HomeClient() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Organic Background Shapes */}
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
      {/* Header */}
      <header className="bg-cream/95 backdrop-blur-md border-b-2 border-gold/20 sticky top-0 z-10 animate-fade-in-up">
        <div className="container mx-auto px-4 py-6 md:py-8">
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-center text-sage-dark tracking-wide">
              אושר של קליניקה
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
        {/* Three Services Section - Asymmetric Layout */}
        <section className="mb-16 md:mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
            {/* First Card - Massage Treatment - Larger, Left */}
            <Link href="/massage" className="lg:col-span-7 block animate-fade-in-up">
              <div className="relative bg-white/70 backdrop-blur-sm rounded-[2.5rem] shadow-2xl hover:shadow-3xl transition-all duration-500 p-8 md:p-10 lg:p-12 group overflow-hidden border-2 border-gold/10 hover:border-gold/30 min-h-[400px] md:min-h-[450px]">
                {/* Decorative corner element */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-terracotta/20 to-transparent rounded-bl-full"></div>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-terracotta to-terracotta-dark rounded-3xl flex items-center justify-center group-hover:rotate-6 transition-transform duration-500 shadow-lg">
                      <svg className="w-10 h-10 md:w-12 md:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-sage-dark mb-3 leading-tight">
                        טיפול מגע עם שמנים אתריים
                      </h2>
                    </div>
                  </div>

                  <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6 flex-grow">
                    חוויית טיפול מרגיעה ומחדשת המשלבת מגע מקצועי עם שמנים אתריים איכותיים לאיזון גוף ונפש. טיפול המותאם אישית לצרכים שלך, יוצר חוויה של שקט, הרפיה ושחרור עמוק.
                  </p>

                  <div className="flex items-center gap-2 text-terracotta-dark font-semibold text-lg group-hover:gap-4 transition-all">
                    <span>למידע נוסף</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>

            {/* Right Column - Two Stacked Cards */}
            <div className="lg:col-span-5 flex flex-col gap-6 md:gap-8">
              {/* Second Card - Consciousness Treatment */}
              <Link href="/consciousness" className="block animate-fade-in-up animation-delay-200">
                <div className="relative bg-sage-light/80 backdrop-blur-sm rounded-[2rem] shadow-xl hover:shadow-2xl transition-all duration-500 p-6 md:p-8 group overflow-hidden border-2 border-sage/20 hover:border-sage/40 min-h-[280px]">
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-sage/20 to-transparent rounded-tr-full"></div>

                  <div className="relative z-10">
                    <div className="w-16 h-16 md:w-18 md:h-18 bg-gradient-to-br from-sage to-sage-dark rounded-2xl flex items-center justify-center mb-4 group-hover:-rotate-6 transition-transform duration-500 shadow-md">
                      <svg className="w-8 h-8 md:w-9 md:h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>

                    <h2 className="text-xl md:text-2xl font-serif font-bold text-sage-dark mb-3 leading-tight">
                      טיפול תודעה בשיטת שלושת המימדים
                    </h2>

                    <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
                      שיטה ייחודית לפיתוח תודעה ושינוי פנימי עמוק המאפשרת צמיחה אישית ורוחנית
                    </p>

                    <div className="flex items-center gap-2 text-sage-dark font-semibold group-hover:gap-3 transition-all">
                      <span>למידע נוסף</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Third Card - Lecture */}
              <Link href="/lecture" className="block animate-fade-in-up animation-delay-300">
                <div className="relative bg-peach/70 backdrop-blur-sm rounded-[2rem] shadow-xl hover:shadow-2xl transition-all duration-500 p-6 md:p-8 group overflow-hidden border-2 border-gold/20 hover:border-gold/40 min-h-[280px]">
                  <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-gold/20 to-transparent rounded-br-full"></div>

                  <div className="relative z-10">
                    <div className="w-16 h-16 md:w-18 md:h-18 bg-gradient-to-br from-gold to-gold-dark rounded-2xl flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform duration-500 shadow-md">
                      <svg className="w-8 h-8 md:w-9 md:h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>

                    <h2 className="text-xl md:text-2xl font-serif font-bold text-sage-dark mb-3 leading-tight">
                      הרצאה: מצניחה לצמיחה
                    </h2>

                    <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
                      הרצאה מעוררת השראה על התגברות על אתגרים והפיכת משברים להזדמנויות לצמיחה
                    </p>

                    <div className="flex items-center gap-2 text-gold-dark font-semibold group-hover:gap-3 transition-all">
                      <span>למידע נוסף</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="relative bg-white/60 backdrop-blur-md rounded-[3rem] shadow-2xl p-8 md:p-12 lg:p-16 max-w-5xl mx-auto animate-fade-in-up animation-delay-400 border-2 border-sage/10 overflow-hidden">
          {/* Decorative botanical elements */}
          <div className="absolute top-8 right-8 w-40 h-40 opacity-10">
            <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 20 Q120 60, 100 100 Q80 60, 100 20" fill="currentColor" className="text-sage"/>
              <path d="M100 100 Q140 120, 180 100 Q140 80, 100 100" fill="currentColor" className="text-terracotta"/>
              <path d="M100 100 Q80 140, 100 180 Q120 140, 100 100" fill="currentColor" className="text-gold"/>
              <circle cx="100" cy="100" r="8" fill="currentColor" className="text-gold-dark"/>
            </svg>
          </div>

          <div className="relative z-10">
            <div className="text-center mb-8 md:mb-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-sage-dark mb-4">
                אודות אושר
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto"></div>
            </div>

            <div className="space-y-5 md:space-y-6 text-gray-700 leading-relaxed text-base md:text-lg max-w-3xl mx-auto">
              <p className="first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:text-terracotta first-letter:float-right first-letter:ml-2 first-letter:leading-none">
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

              <div className="pt-6 border-t-2 border-gold/20">
                <p className="font-serif font-semibold text-sage-dark text-center text-xl md:text-2xl italic">
                  מזמינה אותך להצטרף אליי למסע של גילוי עצמי, ריפוי ושינוי אמיתי
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Primary Call to Action */}
        <section className="mt-16 md:mt-20 mb-16 md:mb-20 animate-fade-in-up animation-delay-500">
          <div className="relative max-w-4xl mx-auto bg-gradient-to-br from-terracotta/10 via-peach/30 to-sage-light/20 backdrop-blur-lg rounded-[3rem] p-8 md:p-12 lg:p-16 text-center border-2 border-gold/20 overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-gold/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-terracotta/10 rounded-full blur-2xl"></div>

            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-sage-dark mb-4 md:mb-6">
                מוכנה להתחיל את המסע?
              </h3>
              <p className="text-lg md:text-xl text-gray-700 mb-8 md:mb-10 max-w-2xl mx-auto">
                לתיאום שיחה ולקביעת פגישה - התקשרי עכשיו
              </p>

              <a
                href="tel:0507660560"
                className="inline-block bg-gradient-to-r from-sage to-sage-dark hover:from-sage-dark hover:to-sage text-white font-bold text-lg md:text-xl px-10 md:px-14 py-4 md:py-5 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 mb-6"
                dir="ltr"
              >
                <span className="flex items-center gap-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  050-766-0560
                </span>
              </a>

              <div className="mt-6">
                <div className="flex items-center gap-3 justify-center mb-3">
                  <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold"></div>
                  <span className="text-gray-600">או</span>
                  <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold"></div>
                </div>
                <button
                  type="button"
                  onClick={scrollToContact}
                  className="text-sage-dark hover:text-terracotta font-semibold text-base md:text-lg underline decoration-2 underline-offset-4 hover:decoration-terracotta transition-all duration-300"
                >
                  השאירי פרטים ואחזור אלייך
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        {/* <Testimonials testimonials={homeTestimonials} /> */}
      </main>

      {/* Contact Form */}
      <ContactForm />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
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

