export default function LectureContactSection() {
  return (
    <section id="lecture-contact" className="relative py-16 md:py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-peach/20 to-cream"></div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-gold/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-terracotta/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-sage-dark mb-4">
            ההרצאה
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto"></div>
        </div>

        {/* Contact Information */}
        <div className="relative bg-white/70 backdrop-blur-md rounded-[2.5rem] shadow-2xl p-8 md:p-10 lg:p-12 mb-10 md:mb-14 max-w-2xl mx-auto border-2 border-gold/10 overflow-hidden">
          {/* Decorative corners */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-gold/15 to-transparent rounded-bl-full"></div>
          <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-terracotta/10 to-transparent rounded-tr-full"></div>

          <div className="flex flex-col sm:flex-row justify-center gap-8 sm:gap-12 relative z-10">
            {/* Phone */}
            <div className="flex items-center gap-4 group">
              <div className="w-14 h-14 bg-gradient-to-br from-sage to-sage-dark rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-serif font-bold text-sage-dark mb-1">טלפון</h3>
                <a
                  href="tel:0507660560"
                  className="text-sage-dark hover:text-terracotta text-base md:text-lg font-semibold transition-colors underline decoration-2 underline-offset-4 hover:decoration-terracotta"
                  dir="ltr"
                >
                  050-766-0560
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4 group">
              <div className="w-14 h-14 bg-gradient-to-br from-gold to-gold-dark rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-serif font-bold text-sage-dark mb-1">דוא״ל</h3>
                <a
                  href="mailto:osheryuma@gmail.com"
                  className="text-sage-dark hover:text-terracotta text-base md:text-lg font-semibold transition-colors break-all underline decoration-2 underline-offset-4 hover:decoration-terracotta"
                  dir="ltr"
                >
                  osheryuma@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Call to Action Button */}
          <div className="mt-8 pt-6 border-t-2 border-gold/20 relative z-10">
            <a
              href="tel:0507660560"
              className="block w-full bg-gradient-to-r from-gold to-gold-dark hover:from-gold-dark hover:to-gold text-white font-bold text-base md:text-lg px-6 py-4 md:py-5 rounded-full shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-1 text-center"
            >
              <span className="flex items-center justify-center gap-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                התקשרי עכשיו להזמנת הרצאה
              </span>
            </a>
          </div>
        </div>

        {/* Lecture Images - Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-2 border-gold/10 group">
            <img
              src="/images/lecture_in_front.jpeg"
              alt="אושר מרצה מול קהל"
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-2 border-gold/10 group">
            <img
              src="/images/lecture_in_the_hall.jpeg"
              alt="הרצאה באולם"
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
