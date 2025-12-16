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

📝 שם: ${formData.name}
📧 אימייל: ${formData.email}
📱 טלפון: ${formData.phone}
🎯 מעוניינ/ת ב: ${formData.interest}

💬 הודעה:
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
    <section id="contact-section" className="py-12 md:py-16 bg-gradient-to-br from-primary-50 via-purple-50 to-pink-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-700 mb-4">
            צרי קשר
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            מלאי את הפרטים ונחזור אליך בהקדם
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white/90 backdrop-blur rounded-3xl shadow-xl p-6 md:p-8 lg:p-10">
          <div className="space-y-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-gray-800 font-semibold mb-2 text-base md:text-lg">
                שם מלא <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all text-base md:text-lg"
                placeholder="הכניסי את שמך המלא"
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-gray-800 font-semibold mb-2 text-base md:text-lg">
                אימייל <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all text-base md:text-lg"
                placeholder="example@email.com"
                dir="ltr"
              />
            </div>

            {/* Phone Field */}
            <div>
              <label htmlFor="phone" className="block text-gray-800 font-semibold mb-2 text-base md:text-lg">
                מספר טלפון <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all text-base md:text-lg"
                placeholder="050-1234567"
                dir="ltr"
              />
            </div>

            {/* Interest Selection */}
            <div>
              <label htmlFor="interest" className="block text-gray-800 font-semibold mb-2 text-base md:text-lg">
                במה את מעוניינת? <span className="text-red-500">*</span>
              </label>
              <select
                id="interest"
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all text-base md:text-lg bg-white"
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
              <label htmlFor="message" className="block text-gray-800 font-semibold mb-2 text-base md:text-lg">
                הודעה
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all resize-none text-base md:text-lg"
                placeholder="כתבי כאן את הודעתך (אופציונלי)"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-primary-500 to-pink-500 hover:from-primary-600 hover:to-pink-600 text-white font-bold text-lg md:text-xl px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? 'שולח...' : 'שלחי הודעה 📨'}
              </button>
            </div>

            {/* Success Message */}
            {submitMessage && (
              <div className="text-center p-4 bg-green-100 border-2 border-green-500 rounded-xl">
                <p className="text-green-700 font-semibold text-base md:text-lg">
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
