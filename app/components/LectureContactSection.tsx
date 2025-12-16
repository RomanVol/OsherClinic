export default function LectureContactSection() {
  return (
    <section id="lecture-contact" className="bg-gradient-to-br from-primary-50 via-purple-50 to-pink-50 py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-700 mb-8 md:mb-12 text-center">
          ההרצאה
        </h2>

        {/* Contact Information */}
        <div className="bg-white/90 backdrop-blur rounded-3xl shadow-xl p-6 md:p-8 lg:p-10 mb-8 md:mb-12 max-w-2xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-12">
            {/* Phone */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-1">טלפון</h3>
                <a
                  href="tel:0507660560"
                  className="text-purple-600 hover:text-purple-700 text-base md:text-lg font-semibold transition-colors"
                  dir="ltr"
                >
                  050-766-0560
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-1">דוא״ל</h3>
                <a
                  href="mailto:osheryuma@gmail.com"
                  className="text-pink-600 hover:text-pink-700 text-base md:text-lg font-semibold transition-colors break-all"
                  dir="ltr"
                >
                  osheryuma@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Call to Action Button */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <a
              href="tel:0507660560"
              className="block w-full bg-gradient-to-r from-primary-500 to-pink-500 hover:from-primary-600 hover:to-pink-600 text-white font-bold text-base md:text-lg px-6 py-3 md:py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center"
            >
              📞 התקשרי עכשיו להזמנת הרצאה
            </a>
          </div>
        </div>

        {/* Lecture Images - Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div className="rounded-3xl overflow-hidden shadow-2xl bg-gray-200">
            <img
              src="/images/lecture_in_front.jpeg"
              alt="אושר מרצה מול קהל"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="rounded-3xl overflow-hidden shadow-2xl bg-gray-200">
            <img
              src="/images/lecture_in_the_hall.jpeg"
              alt="הרצאה באולם"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
