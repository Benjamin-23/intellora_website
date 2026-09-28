import { motion } from "motion/react";
import { Lightbulb, Target, Zap } from "lucide-react";

const VALUES = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    description:
      "We explore cutting-edge technologies to solve real-world problems that matter to everyday people.",
  },
  {
    icon: Target,
    title: "User-Centric",
    description:
      "Every feature we build starts with understanding our users' needs and delivering intuitive experiences.",
  },
  {
    icon: Zap,
    title: "Speed & Quality",
    description:
      "We ship fast without compromising on craftsmanship. Our products are built to scale and delight.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 section-teal overflow-hidden">
      {/* Decorative accents - breaks up the flat section background */}
      <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-[oklch(0.6_0.18_300)]/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-accent/20 blur-3xl" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(var(--foreground) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Filled shape accents - a different motif from the Products section confetti */}
      <div className="hidden sm:block absolute top-16 right-[8%] w-16 h-16 rounded-full border-2 border-dashed border-primary/25" />
      <div
        className="hidden sm:block absolute bottom-20 left-[6%] w-10 h-10 bg-[oklch(0.62_0.13_175)]/20"
        style={{ clipPath: "polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%)" }}
      />
      <div className="absolute top-1/2 left-2 sm:left-4 flex flex-col gap-1.5">
        <span className="w-3 h-3 bg-ring/30" />
        <span className="w-2 h-2 bg-ring/20" />
      </div>
      <div className="hidden lg:block absolute top-10 left-[4%] w-4 h-4">
        <span className="absolute top-1/2 left-0 w-full h-[2px] -translate-y-1/2 bg-primary/30" />
        <span className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-primary/30" />
      </div>
      <div className="absolute bottom-10 right-[10%] w-3 h-3 rounded-full bg-[oklch(0.6_0.18_300)]/35" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              About Us
            </span>
            <h2 className="mt-8 sm:mt-10 text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              We Build{" "}
              <span className="relative inline-block whitespace-nowrap">
                <span className="text-muted-foreground/40 line-through decoration-destructive decoration-[3px]">
                  Websites
                </span>
                <motion.span
                  initial={{ opacity: 0, y: 8, rotate: -10 }}
                  whileInView={{ opacity: 1, y: 0, rotate: -6 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7, duration: 0.4, ease: "easeOut" }}
                  className="font-accent italic absolute -top-5 sm:-top-6 left-1/2 -translate-x-1/2 text-primary text-xl sm:text-2xl"
                >
                  Products
                </motion.span>
              </span>{" "}
              People Love
            </h2>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
              Intellora is a product studio focused on creating intelligent
              digital solutions. We combine deep technical expertise with
              beautiful design to deliver products that solve real problems in
              home services, real estate, and beyond.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Founded with the mission of making technology accessible and
              impactful, we continue to push boundaries with every product we
              launch.
            </p>
          </motion.div>

          {/* Values side */}
          <div className="space-y-6">
            {VALUES.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  delay: index * 0.15,
                  duration: 0.5,
                  ease: "easeOut",
                }}
                className="flex gap-4 p-5 rounded-xl bg-card border border-border/50 shadow-sm"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{value.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
