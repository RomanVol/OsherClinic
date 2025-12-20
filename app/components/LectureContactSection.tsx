export default function LectureContactSection() {
  return (
    <section id="lecture-contact" className="relative py-16 md:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-sand-50 via-cream-50 to-terracotta-50" />

      <div className="relative container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-sand-200 mb-4">
            <svg className="w-7 h-7 text-sand-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
            </svg>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-forest-800 mb-3">
            להזמנת הרצאה
          </h2>
          <p className="text-forest-600 text-lg">
            צרי קשר ונתאם הרצאה בהתאמה אישית
          </p>
        </div>

        {/* Contact Card */}
        <div className="bg-white rounded-4xl shadow-soft-lg p-8 md:p-10 mb-10 md:mb-14 max-w-2xl mx-auto border border-sand-100/30">
          <div className="flex flex-col sm:flex-row justify-center gap-8 sm:gap-12">
            {/* Phone */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-sand-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-7 h-7 text-sand-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-forest-800 mb-1">טלפון</h3>
                <a
                  href="tel:0507660560"
                  className="text-sand-600 hover:text-sand-700 text-lg font-semibold transition-colors"
                  dir="ltr"
                >
                  050-766-0560
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-terracotta-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-7 h-7 text-terracotta-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-forest-800 mb-1">דוא״ל</h3>
                <a
                  href="mailto:osheryuma@gmail.com"
                  className="text-terracotta-600 hover:text-terracotta-700 text-lg font-semibold transition-colors break-all"
                  dir="ltr"
                >
                  osheryuma@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-8 pt-6 border-t border-sand-100">
            <a
              href="tel:0507660560"
              className="block w-full text-center px-8 py-4 rounded-full font-bold text-lg text-white bg-gradient-to-r from-sand-500 to-sand-600 hover:from-sand-600 hover:to-sand-700 shadow-soft hover:shadow-soft-lg transition-all duration-300 transform hover:scale-[1.02]"
            >
              <span className="flex items-center justify-center">
                <svg className="w-5 h-5 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                התקשרי עכשיו להזמנת הרצאה
              </span>
            </a>
          </div>
        </div>

        {/* Lecture Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div className="relative group">
            <div className="absolute -inset-2 bg-sand-200/50 rounded-4xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative rounded-3xl overflow-hidden shadow-soft-lg border border-sand-100">
              <img
                src="/images/lecture_in_front.jpeg"
                alt="אושר מרצה מול קהל"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-2 bg-terracotta-100/50 rounded-4xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative rounded-3xl overflow-hidden shadow-soft-lg border border-sand-100">
              <img
                src="/images/lecture_in_the_hall.jpeg"
                alt="הרצאה באולם"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
