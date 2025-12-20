export default function ContactSection() {
  return (
    <section id="clinic-contact" className="relative py-16 md:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream-100 via-sage-50 to-sand-50" />

      <div className="relative container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-terracotta-100 mb-4">
            <svg className="w-7 h-7 text-terracotta-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-forest-800 mb-3">
            מיקום הקליניקה
          </h2>
          <p className="text-forest-600 text-lg">
            מרחב שקט ונעים בלב חריש
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Contact Information Card */}
          <div className="bg-white rounded-4xl shadow-soft-lg p-8 md:p-10 border border-sage-100/30 order-2 lg:order-1">
            <div className="space-y-6">
              {/* Location */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-sage-50/50 hover:bg-sage-50 transition-colors">
                <div className="w-12 h-12 bg-sage-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-sage-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-forest-800 mb-1">כתובת</h3>
                  <p className="text-forest-600 leading-relaxed">
                    תאנה 52, חריש
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-terracotta-50/50 hover:bg-terracotta-50 transition-colors">
                <div className="w-12 h-12 bg-terracotta-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-terracotta-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-forest-800 mb-1">טלפון</h3>
                  <a
                    href="tel:0507660560"
                    className="text-terracotta-600 hover:text-terracotta-700 font-semibold transition-colors"
                    dir="ltr"
                  >
                    050-766-0560
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-sand-50/50 hover:bg-sand-50 transition-colors">
                <div className="w-12 h-12 bg-sand-200 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-sand-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-forest-800 mb-1">דוא״ל</h3>
                  <a
                    href="mailto:osheryuma@gmail.com"
                    className="text-sand-700 hover:text-sand-800 font-semibold transition-colors break-all"
                    dir="ltr"
                  >
                    osheryuma@gmail.com
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-sage-50/50 hover:bg-sage-50 transition-colors">
                <div className="w-12 h-12 bg-sage-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-sage-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-forest-800 mb-1">שעות פעילות</h3>
                  <p className="text-forest-600">
                    בתיאום מראש
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-8 pt-6 border-t border-sage-100">
              <a
                href="tel:0507660560"
                className="btn-primary w-full text-lg justify-center"
              >
                <svg className="w-5 h-5 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                התקשרי עכשיו לתיאום פגישה
              </a>
            </div>
          </div>

          {/* Clinic Image */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-sage-200/50 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-terracotta-100/50 rounded-full blur-xl" />

              <div className="relative rounded-4xl overflow-hidden shadow-soft-xl">
                <img
                  src="/images/clinic_2.jpeg"
                  alt="הקליניקה של אושר - מרחב טיפולי שקט ונעים"
                  className="w-full h-auto object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-forest-900/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
