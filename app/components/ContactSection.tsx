export default function ContactSection() {
  return (
    <section id="clinic-contact" className="bg-gradient-to-br from-primary-50 via-purple-50 to-pink-50 py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-700 mb-8 md:mb-12 text-center">
          מיקום הקליניקה
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Contact Information */}
          <div className="bg-white/90 backdrop-blur rounded-3xl shadow-xl p-6 md:p-8 lg:p-10 order-2 lg:order-1">
            <div className="space-y-6">
              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">כתובת</h3>
                  <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                    <strong>עיר:</strong> חריש<br />
                    <strong>רחוב:</strong> תאנה 52
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">טלפון</h3>
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
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">דוא״ל</h3>
                  <a 
                    href="mailto:osheryuma@gmail.com" 
                    className="text-pink-600 hover:text-pink-700 text-base md:text-lg font-semibold transition-colors break-all"
                    dir="ltr"
                  >
                    osheryuma@gmail.com
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">שעות פעילות</h3>
                  <p className="text-gray-700 text-base md:text-lg">
                    הקליניקה פתוחה בתיאום מראש
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action Button */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <a 
                href="tel:0507660560"
                className="block w-full bg-gradient-to-r from-primary-500 to-pink-500 hover:from-primary-600 hover:to-pink-600 text-white font-bold text-base md:text-lg px-6 py-3 md:py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center"
              >
                📞 התקשרי עכשיו לתיאום פגישה
              </a>
            </div>
          </div>

          {/* Clinic Image */}
          <div className="order-1 lg:order-2">
            <div className="rounded-3xl overflow-hidden shadow-2xl bg-gray-200">
              <img
                src="/images/clinic_2.jpeg"
                alt="הקליניקה של אושר"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
