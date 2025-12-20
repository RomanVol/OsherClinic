'use client';

import Link from 'next/link';
import ContactForm from './components/ContactForm';
import ContactSection from './components/ContactSection';

export default function HomeClient() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-cream-50">
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-64 h-64 bg-sage-200/30 rounded-full blur-3xl" />
        <div className="absolute top-40 left-20 w-48 h-48 bg-sand-200/40 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-1/4 w-72 h-72 bg-terracotta-100/20 rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <header className="relative bg-white/70 backdrop-blur-md border-b border-sage-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-5 md:py-6">
          {/* Logo & Title */}
          <div className="text-center">
            <div className="inline-flex items-center justify-center mb-2">
              {/* Leaf Icon */}
              <svg className="w-8 h-8 md:w-10 md:h-10 text-sage-500 ml-3" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
              </svg>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-forest-800 tracking-tight">
                הקליניקה של אושר
              </h1>
            </div>
            <p className="text-sage-600 font-medium text-sm md:text-base flex items-center justify-center gap-2">
              <span className="w-8 h-px bg-sage-300"></span>
              טיפולים הוליסטיים לנשים
              <span className="w-8 h-px bg-sage-300"></span>
            </p>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-12 md:py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            {/* Decorative Element */}
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-sage-100 to-sand-100 flex items-center justify-center shadow-soft animate-float">
                <svg className="w-10 h-10 md:w-12 md:h-12 text-sage-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-forest-800 mb-6 leading-tight">
              מרחב להתחדשות,
              <br />
              <span className="text-sage-600">ריפוי וצמיחה אישית</span>
            </h2>

            <p className="text-lg md:text-xl text-forest-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              ברוכות הבאות למרחב שבו תוכלי להתחבר מחדש לעצמך, לשחרר מתחים ולגלות את הכוח הפנימי שבך
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:0507660560"
                className="btn-primary text-lg px-10"
                dir="ltr"
              >
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                050-766-0560
              </a>
              <button
                type="button"
                onClick={scrollToContact}
                className="btn-secondary text-lg"
              >
                השאירי פרטים
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="relative container mx-auto px-4 py-8 md:py-12">
        {/* Three Service Cards */}
        <section className="mb-16 md:mb-24">
          <div className="text-center mb-10 md:mb-14">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-forest-800 mb-4">
              השירותים שלנו
            </h2>
            <p className="text-forest-600 text-lg max-w-xl mx-auto">
              מגוון טיפולים הוליסטיים המותאמים אישית לצרכים שלך
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Massage Treatment Card */}
            <Link href="/massage" className="block group">
              <article className="relative bg-white rounded-3xl shadow-soft hover:shadow-soft-lg transition-all duration-500 p-6 md:p-8 flex flex-col h-full border border-sage-100/50 overflow-hidden">
                {/* Background Decoration */}
                <div className="absolute top-0 left-0 w-32 h-32 bg-sage-50 rounded-full -translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-500" />

                <div className="relative">
                  {/* Icon */}
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-sage-100 to-sage-200 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-soft">
                    <svg className="w-8 h-8 md:w-10 md:h-10 text-sage-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>

                  {/* Badge */}
                  <span className="badge-sage mb-4">טיפול גוף</span>

                  <h3 className="text-xl md:text-2xl font-bold text-forest-800 mb-3 group-hover:text-sage-700 transition-colors">
                    טיפול מגע עם שמנים אתריים
                  </h3>

                  <p className="text-forest-600 leading-relaxed mb-6 flex-grow">
                    חוויית טיפול מרגיעה ומחדשת המשלבת מגע מקצועי עם שמנים אתריים איכותיים לאיזון גוף ונפש
                  </p>

                  <div className="flex items-center text-sage-600 font-semibold group-hover:text-sage-700 transition-colors">
                    <span>למידע נוסף</span>
                    <svg className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                    </svg>
                  </div>
                </div>
              </article>
            </Link>

            {/* Consciousness Treatment Card */}
            <Link href="/consciousness" className="block group">
              <article className="relative bg-white rounded-3xl shadow-soft hover:shadow-soft-lg transition-all duration-500 p-6 md:p-8 flex flex-col h-full border border-sage-100/50 overflow-hidden">
                {/* Background Decoration */}
                <div className="absolute top-0 left-0 w-32 h-32 bg-terracotta-50 rounded-full -translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-500" />

                <div className="relative">
                  {/* Icon */}
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-terracotta-100 to-terracotta-200 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-soft">
                    <svg className="w-8 h-8 md:w-10 md:h-10 text-terracotta-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>

                  {/* Badge */}
                  <span className="badge-terracotta mb-4">טיפול תודעה</span>

                  <h3 className="text-xl md:text-2xl font-bold text-forest-800 mb-3 group-hover:text-terracotta-700 transition-colors">
                    טיפול תודעה בשיטת שלושת המימדים
                  </h3>

                  <p className="text-forest-600 leading-relaxed mb-6 flex-grow">
                    שיטה ייחודית לפיתוח תודעה ושינוי פנימי עמוק המאפשרת צמיחה אישית ורוחנית
                  </p>

                  <div className="flex items-center text-terracotta-600 font-semibold group-hover:text-terracotta-700 transition-colors">
                    <span>למידע נוסף</span>
                    <svg className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                    </svg>
                  </div>
                </div>
              </article>
            </Link>

            {/* Lecture Card */}
            <Link href="/lecture" className="block group md:col-span-2 lg:col-span-1">
              <article className="relative bg-white rounded-3xl shadow-soft hover:shadow-soft-lg transition-all duration-500 p-6 md:p-8 flex flex-col h-full border border-sage-100/50 overflow-hidden">
                {/* Background Decoration */}
                <div className="absolute top-0 left-0 w-32 h-32 bg-sand-100 rounded-full -translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-500" />

                <div className="relative">
                  {/* Icon */}
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-sand-200 to-sand-300 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-soft">
                    <svg className="w-8 h-8 md:w-10 md:h-10 text-sand-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>

                  {/* Badge */}
                  <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-sand-100 text-sand-700 mb-4">
                    הרצאה
                  </span>

                  <h3 className="text-xl md:text-2xl font-bold text-forest-800 mb-3 group-hover:text-sand-700 transition-colors">
                    מצניחה לצמיחה
                  </h3>

                  <p className="text-forest-600 leading-relaxed mb-6 flex-grow">
                    הרצאה מעוררת השראה על התגברות על אתגרים והפיכת משברים להזדמנויות לצמיחה
                  </p>

                  <div className="flex items-center text-sand-600 font-semibold group-hover:text-sand-700 transition-colors">
                    <span>למידע נוסף</span>
                    <svg className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                    </svg>
                  </div>
                </div>
              </article>
            </Link>
          </div>
        </section>

        {/* About Section */}
        <section className="mb-16 md:mb-24">
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-white rounded-4xl shadow-soft-lg p-8 md:p-12 lg:p-16 border border-sage-100/30 overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-sage-50 rounded-full translate-x-1/2 -translate-y-1/2 opacity-60" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-sand-100 rounded-full -translate-x-1/2 translate-y-1/2 opacity-60" />

              <div className="relative">
                {/* Section Header */}
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-sage-100 mb-4">
                    <svg className="w-8 h-8 text-sage-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-forest-800">
                    אודות אושר
                  </h2>
                </div>

                {/* Content */}
                <div className="space-y-6 text-forest-700 text-lg leading-relaxed">
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

                  {/* Quote */}
                  <div className="bg-sage-50 rounded-2xl p-6 border-r-4 border-sage-400 mt-8">
                    <p className="text-sage-800 font-medium text-xl text-center italic">
                      "מזמינה אותך להצטרף אליי למסע של גילוי עצמי, ריפוי ושינוי אמיתי"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="mb-16 md:mb-24">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-gradient-to-br from-sage-500 to-sage-600 rounded-4xl p-8 md:p-12 shadow-soft-xl">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                מוכנה להתחיל את המסע?
              </h2>
              <p className="text-sage-100 text-lg mb-8">
                התקשרי עכשיו לתיאום שיחת היכרות ללא התחייבות
              </p>
              <a
                href="tel:0507660560"
                className="inline-flex items-center justify-center px-10 py-4 rounded-full font-bold text-lg text-sage-700 bg-white hover:bg-sage-50 shadow-soft-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
                dir="ltr"
              >
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                050-766-0560
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Contact Form */}
      <ContactForm />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <footer className="bg-forest-800 text-white py-10 md:py-14">
        <div className="container mx-auto px-4">
          <div className="text-center">
            {/* Logo */}
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
