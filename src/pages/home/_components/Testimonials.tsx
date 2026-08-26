import { motion } from "motion/react";
import { Quote, Star } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Wanjiku Kamau",
    role: "Homeowner, Nairobi",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
    quote:
      "HandyHub connected me with a verified electrician in minutes. No more asking around for referrals - just book, pay with M-Pesa, and done.",
    rating: 5,
  },
  {
    name: "Brian Otieno",
    role: "Property Investor",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    quote:
      "ReaPro's filters made it so easy to find the right coastal property. I found and shortlisted three listings in under an hour.",
    rating: 5,
  },
  {
    name: "Grace Njeri",
    role: "Verified Fundi, HandyHub",
    avatar:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop&crop=face",
    quote:
      "Since joining HandyHub, my cleaning business has tripled its bookings. The platform handles payments so I can focus on the work.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Decorative accents - distinct from the sections above/below */}
      <div className="absolute top-1/3 left-0 -translate-x-1/2 w-72 h-72 rounded-full bg-ring/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 translate-x-1/3 w-96 h-96 rounded-full bg-[oklch(0.75_0.17_105)]/10 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            What Our Users Say
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            Real feedback from the people who use our products every day.
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
                ease: "easeOut",
              }}
              className="relative flex flex-col rounded-2xl bg-card border border-border/50 shadow-sm p-6"
            >
              <Quote className="w-8 h-8 text-primary/20" />

              <div className="flex items-center gap-0.5 mt-3">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" />
                ))}
              </div>

              <p className="mt-3 text-sm text-foreground leading-relaxed flex-1">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3 mt-6 pt-5 border-t border-border/50">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover shrink-0"
                />
                <div>
                  <p className="text-sm font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
