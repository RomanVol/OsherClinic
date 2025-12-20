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
  colorScheme?: 'sage' | 'terracotta' | 'sand';
}

export default function Testimonials({
  testimonials = [],
  title = "מה אומרות המטופלות שלנו",
  colorScheme = 'sage'
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
    sage: {
      title: 'text-forest-800',
      gradient: 'from-sage-50 to-cream-50',
      accent: 'text-sage-600',
      border: 'border-sage-100',
      icon: 'bg-sage-100 text-sage-500'
    },
    terracotta: {
      title: 'text-forest-800',
      gradient: 'from-terracotta-50 to-sand-50',
      accent: 'text-terracotta-600',
      border: 'border-terracotta-100',
      icon: 'bg-terracotta-100 text-terracotta-500'
    },
    sand: {
      title: 'text-forest-800',
      gradient: 'from-sand-50 to-cream-50',
      accent: 'text-sand-700',
      border: 'border-sand-200',
      icon: 'bg-sand-100 text-sand-600'
    }
  };

  const colors = colorClasses[colorScheme];

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className={`text-2xl md:text-3xl lg:text-4xl font-bold ${colors.title}`}>
            {title}
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {displayTestimonials.map((testimonial, index) => (
            <article
              key={index}
              className={`relative bg-gradient-to-br ${colors.gradient} rounded-3xl shadow-soft hover:shadow-soft-lg transition-all duration-300 p-6 md:p-8 flex flex-col border ${colors.border}`}
            >
              {/* Testimonial Image (if provided) */}
              {testimonial.image && (
                <div className="mb-4 -mx-6 -mt-6 md:-mx-8 md:-mt-8 overflow-hidden rounded-t-3xl">
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
              <div className={`w-10 h-10 ${colors.icon} rounded-xl flex items-center justify-center mb-4`}>
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Testimonial Text */}
              <p className="text-forest-700 leading-relaxed mb-6 text-base md:text-lg flex-grow">
                "{testimonial.text}"
              </p>

              {/* Author Info */}
              <div className="border-t border-sage-100/50 pt-4 mt-auto">
                <p className={`font-bold ${colors.accent} text-lg`}>
                  {testimonial.name}
                </p>
                {testimonial.service && (
                  <p className="text-forest-500 text-sm mt-1">
                    {testimonial.service}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Note about adding more testimonials */}
        {testimonials.length === 0 && (
          <div className="mt-8 text-center">
            <p className="text-forest-400 text-sm italic">
              * ניתן להוסיף המלצות אמיתיות מהמטופלות
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
