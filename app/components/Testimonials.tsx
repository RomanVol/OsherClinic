'use client';

interface Testimonial {
  name: string;
  text: string;
  service?: string;
  image?: string;
}

interface TestimonialsProps {
  testimonials?: Testimonial[];
  title?: string;
  colorScheme?: 'primary' | 'purple' | 'pink';
}

export default function Testimonials({ 
  testimonials = [], 
  title = "מה אומרות המטופלות שלנו",
  colorScheme = 'primary'
}: TestimonialsProps) {
  // Default placeholder testimonials if none provided
  const defaultTestimonials: Testimonial[] = [
    {
      name: "שם המטופלת",
      text: "כאן יופיע המלל של ההמלצה. זהו מקום שמור להמלצה מלאה מאחת המטופלות.",
      service: "טיפול מגע"
    },
    {
      name: "שם המטופלת",
      text: "כאן יופיע המלל של ההמלצה. זהו מקום שמור להמלצה מלאה מאחת המטופלות.",
      service: "טיפול תודעה"
    },
    {
      name: "שם המטופלת",
      text: "כאן יופיע המלל של ההמלצה. זהו מקום שמור להמלצה מלאה מאחת המטופלות.",
      service: "הרצאה"
    }
  ];

  const displayTestimonials = testimonials.length > 0 ? testimonials : defaultTestimonials;

  const colorClasses = {
    primary: {
      title: 'text-primary-700',
      gradient: 'from-primary-50 to-pink-50',
      accent: 'text-primary-600'
    },
    purple: {
      title: 'text-purple-700',
      gradient: 'from-purple-50 to-purple-100',
      accent: 'text-purple-600'
    },
    pink: {
      title: 'text-pink-700',
      gradient: 'from-pink-50 to-pink-100',
      accent: 'text-pink-600'
    }
  };

  const colors = colorClasses[colorScheme];

  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className={`text-2xl md:text-3xl lg:text-4xl font-bold ${colors.title} mb-8 md:mb-12 text-center`}>
          {title}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {displayTestimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`bg-gradient-to-br ${colors.gradient} rounded-2xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col`}
            >
              {/* Testimonial Image (if provided) */}
              {testimonial.image && (
                <div className="mb-4 -mx-6 -mt-6 md:-mx-8 md:-mt-8 overflow-hidden rounded-t-2xl">
                  <img
                    src={testimonial.image}
                    alt={`המלצה מ${testimonial.name}`}
                    className="w-full h-auto -mt-[80px]"
                    loading="lazy"
                    onError={(e) => {
                      console.log('Failed to load image:', testimonial.image);
                      e.currentTarget.style.display = 'none';
                    }}
                    onLoad={() => console.log('Image loaded:', testimonial.image)}
                  />
                </div>
              )}

              {/* Quote Icon */}
              <div className="mb-4">
                {/* <svg 
                  className={`w-8 h-8 md:w-10 md:h-10 ${colors.accent} opacity-50`}
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg> */}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 leading-relaxed mb-6 text-sm md:text-base italic flex-grow">
                "{testimonial.text}"
              </p>

              {/* Author Info */}
              <div className="border-t border-gray-200 pt-4">
                <p className={`font-semibold ${colors.accent} text-base md:text-lg`}>
                  {testimonial.name}
                </p>
                {testimonial.service && (
                  <p className="text-gray-500 text-sm mt-1">
                    {testimonial.service}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Note about adding more testimonials */}
        {testimonials.length === 0 && (
          <div className="mt-8 text-center">
            <p className="text-gray-500 text-sm italic">
              * ניתן להוסיף המלצות אמיתיות מהמטופלות
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
