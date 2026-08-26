import { motion } from "motion/react";
import { Globe, Briefcase, Wrench, Smartphone, BrainCircuit } from "lucide-react";

const SERVICES = [
  {
    number: "01",
    icon: Globe,
    title: "Website Development",
    description:
      "Custom, responsive websites built from the ground up - fast, accessible, and designed to turn visitors into customers.",
    color: "var(--primary)",
    bg: "bg-primary/10",
    text: "text-primary",
  },
  {
    number: "02",
    icon: Briefcase,
    title: "IT Consulting",
    description:
      "Strategic guidance on technology decisions - from architecture and tooling to scaling your systems the right way.",
    color: "var(--ring)",
    bg: "bg-ring/10",
    text: "text-ring",
  },
  {
    number: "03",
    icon: Wrench,
    title: "Website Fix or Upgrade",
    description:
      "Stuck with an outdated or broken site? We diagnose, repair, and modernize existing websites without starting from scratch.",
    color: "oklch(0.62 0.13 175)",
    bg: "bg-[oklch(0.62_0.13_175)]/10",
    text: "text-[oklch(0.62_0.13_175)]",
  },
  {
    number: "04",
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Native-feel iOS and Android apps built for real-world use, from first prototype through to app store launch.",
    color: "oklch(0.6 0.18 300)",
    bg: "bg-[oklch(0.6_0.18_300)]/10",
    text: "text-[oklch(0.6_0.18_300)]",
  },
  {
    number: "05",
    icon: BrainCircuit,
    title: "Software Systems with AI",
    description:
      "Intelligent systems that put AI to work in your product - from smart automation to fully custom machine-learning features.",
    color: "oklch(0.75 0.17 105)",
    bg: "bg-[oklch(0.75_0.17_105)]/10",
    text: "text-[oklch(0.75_0.17_105)]",
  },
];

const STICKY_TOP = ["top-24", "top-28", "top-32", "top-36", "top-40"];

export default function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      {/* Decorative accent - distinct from the sections above/below */}
      <div className="absolute top-1/3 right-0 w-72 h-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full bg-ring/10 blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            What We Can Build For You
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            Beyond our own products, we partner with teams and businesses to
            design, build, and maintain software that works.
          </p>
        </motion.div>

        <div className="pb-4">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className={`${index === SERVICES.length - 1 ? "relative" : `sticky ${STICKY_TOP[index]}`} mb-6`}
              style={{ zIndex: index + 1 }}
            >
              <div className="flex flex-col sm:flex-row gap-5 sm:items-center rounded-2xl bg-card border border-border shadow-xl shadow-black/5 p-6 sm:p-8">
                <div className="flex items-center gap-4 sm:gap-6 sm:shrink-0">
                  <span
                    className="text-4xl sm:text-5xl font-extrabold tabular-nums"
                    style={{ color: service.color, opacity: 0.25 }}
                  >
                    {service.number}
                  </span>
                  <div
                    className={`w-14 h-14 rounded-xl ${service.bg} flex items-center justify-center shrink-0`}
                  >
                    <service.icon className={`w-7 h-7 ${service.text}`} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
                  <p className="mt-1.5 text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
