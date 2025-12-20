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
מעוניינ/ת ב: ${formData.interest}

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
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-sage-50 via-cream-50 to-sand-50" />
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-sage-100/40 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-terracotta-100/30 rounded-full blur-3xl" />

      <div className="relative container mx-auto px-4 max-w-3xl">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-sage-100 mb-4">
            <svg className="w-7 h-7 text-sage-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-forest-800 mb-3">
            צרי קשר
          </h2>
          <p className="text-forest-600 text-lg">
            מלאי את הפרטים ואחזור אליך בהקדם
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-4xl shadow-soft-lg p-6 md:p-10 lg:p-12 border border-sage-100/30">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-forest-700 font-medium mb-2">
                שם מלא <span className="text-terracotta-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="input-organic"
                placeholder="הכניסי את שמך המלא"
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-forest-700 font-medium mb-2">
                אימייל <span className="text-terracotta-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="input-organic"
                placeholder="example@email.com"
                dir="ltr"
              />
            </div>

            {/* Phone Field */}
            <div>
              <label htmlFor="phone" className="block text-forest-700 font-medium mb-2">
                מספר טלפון <span className="text-terracotta-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="input-organic"
                placeholder="050-1234567"
                dir="ltr"
              />
            </div>

            {/* Interest Selection */}
            <div>
              <label htmlFor="interest" className="block text-forest-700 font-medium mb-2">
                במה את מעוניינת? <span className="text-terracotta-500">*</span>
              </label>
              <select
                id="interest"
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                required
                className="input-organic bg-white cursor-pointer"
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
              <label htmlFor="message" className="block text-forest-700 font-medium mb-2">
                הודעה
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="input-organic resize-none"
                placeholder="כתבי כאן את הודעתך (אופציונלי)"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary text-lg py-5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    שולח...
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    שלחי הודעה
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </span>
                )}
              </button>
            </div>

            {/* Success Message */}
            {submitMessage && (
              <div className="text-center p-5 bg-sage-50 border border-sage-200 rounded-2xl">
                <div className="flex items-center justify-center mb-2">
                  <svg className="w-6 h-6 text-sage-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-sage-700 font-medium">
                  {submitMessage}
                </p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
