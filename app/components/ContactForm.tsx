'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    // Create WhatsApp message
    const whatsappMessage = `
שלום, הגיעה פנייה חדשה מהאתר:

שם: ${formData.name}
אימייל: ${formData.email}
טלפון: ${formData.phone}
מעוניינת ב: ${formData.interest}

הודעה:
${formData.message}
    `.trim();

    // Open WhatsApp with the message
    const phoneNumber = '972507660560';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, '_blank');

    // Show success message
    setSubmitMessage('הפנייה נשלחת בוואטסאפ! תודה על פנייתך.');

    // Reset form after 2 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        interest: '',
        message: ''
      });
      setSubmitMessage('');
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <section id="contact-section" className="relative py-16 md:py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-sage-light/30 via-peach/20 to-cream"></div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-sage/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-terracotta/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-sage-dark mb-4">
            צרי קשר
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-4"></div>
          <p className="text-gray-600 text-base md:text-lg font-sans">
            מלאי את הפרטים ונחזור אליך בהקדם
          </p>
        </div>

        <form onSubmit={handleSubmit} className="relative bg-white/70 backdrop-blur-md rounded-[2.5rem] shadow-2xl p-8 md:p-10 lg:p-12 border-2 border-gold/10 overflow-hidden">
          {/* Decorative corner */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-sage/10 to-transparent rounded-bl-full"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-terracotta/10 to-transparent rounded-tr-full"></div>

          <div className="space-y-6 relative z-10">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sage-dark font-serif font-semibold mb-2 text-base md:text-lg">
                שם מלא <span className="text-terracotta">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-5 py-4 border-2 border-sage-light rounded-2xl focus:border-sage focus:ring-2 focus:ring-sage/20 outline-none transition-all text-base md:text-lg bg-white/80"
                placeholder="הכניסי את שמך המלא"
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sage-dark font-serif font-semibold mb-2 text-base md:text-lg">
                אימייל <span className="text-terracotta">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-5 py-4 border-2 border-sage-light rounded-2xl focus:border-sage focus:ring-2 focus:ring-sage/20 outline-none transition-all text-base md:text-lg bg-white/80"
                placeholder="example@email.com"
                dir="ltr"
              />
            </div>

            {/* Phone Field */}
            <div>
              <label htmlFor="phone" className="block text-sage-dark font-serif font-semibold mb-2 text-base md:text-lg">
                מספר טלפון <span className="text-terracotta">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-5 py-4 border-2 border-sage-light rounded-2xl focus:border-sage focus:ring-2 focus:ring-sage/20 outline-none transition-all text-base md:text-lg bg-white/80"
                placeholder="050-1234567"
                dir="ltr"
              />
            </div>

            {/* Interest Selection */}
            <div>
              <label htmlFor="interest" className="block text-sage-dark font-serif font-semibold mb-2 text-base md:text-lg">
                במה את מעוניינת? <span className="text-terracotta">*</span>
              </label>
              <select
                id="interest"
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                required
                className="w-full px-5 py-4 border-2 border-sage-light rounded-2xl focus:border-sage focus:ring-2 focus:ring-sage/20 outline-none transition-all text-base md:text-lg bg-white/80 cursor-pointer"
              >
                <option value="">בחרי אפשרות</option>
                <option value="טיפול מגע עם שמנים אתריים">טיפול מגע עם שמנים אתריים</option>
                <option value="טיפול תודעה בשיטת שלושת המימדים">טיפול תודעה בשיטת שלושת המימדים</option>
                <option value="הרצאה: מצניחה לצמיחה">הרצאה: מצניחה לצמיחה</option>
                <option value="ייעוץ כללי">ייעוץ כללי</option>
                <option value="אחר">אחר</option>
              </select>
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-sage-dark font-serif font-semibold mb-2 text-base md:text-lg">
                הודעה
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-5 py-4 border-2 border-sage-light rounded-2xl focus:border-sage focus:ring-2 focus:ring-sage/20 outline-none transition-all resize-none text-base md:text-lg bg-white/80"
                placeholder="כתבי כאן את הודעתך (אופציונלי)"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-sage to-sage-dark hover:from-sage-dark hover:to-sage text-white font-bold text-lg md:text-xl px-8 py-5 rounded-full shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? 'שולח...' : 'שלחי הודעה'}
              </button>
            </div>

            {/* Success Message */}
            {submitMessage && (
              <div className="text-center p-5 bg-sage-light/50 border-2 border-sage/30 rounded-2xl">
                <p className="text-sage-dark font-semibold text-base md:text-lg">
                  {submitMessage}
                </p>
              </div>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
