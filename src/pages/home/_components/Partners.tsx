import { motion } from "motion/react";

const PARTNERS_ROW_1 = [
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
];

const PARTNERS_ROW_2 = [
  { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
  { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
  { name: "GraphQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" },
];

function MarqueeRow({ items, direction = "left", duration = 30 }: { items: typeof PARTNERS_ROW_1; direction?: "left" | "right"; duration?: number }) {
  const duplicated = [...items, ...items, ...items];

  return (
    <div className="relative overflow-hidden">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-background to-transparent z-10" />

      <motion.div
        className="flex gap-6 sm:gap-10"
        animate={{
          x: direction === "left" ? ["0%", "-33.333%"] : ["-33.333%", "0%"],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration,
            ease: "linear",
          },
        }}
      >
        {duplicated.map((partner, idx) => (
          <div
            key={`${partner.name}-${idx}`}
            className="flex items-center gap-3 rounded-xl border border-border/60 bg-card/60 px-5 py-3 sm:px-7 sm:py-4 backdrop-blur-sm shrink-0"
          >
            <img
              src={partner.icon}
              alt={partner.name}
              className="h-8 w-8 sm:h-10 sm:w-10"
            />
            <span className="text-sm sm:text-base font-semibold text-foreground whitespace-nowrap">
              {partner.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function Partners() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      {/* Gradient background for visual depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/8 via-transparent to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Technology Stack
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
            Powered By Modern Technologies
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            We leverage cutting-edge tools and frameworks to build fast, scalable, and intelligent solutions.
          </p>
        </motion.div>

        {/* Two rows scrolling in opposite directions */}
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <MarqueeRow items={PARTNERS_ROW_1} direction="left" duration={28} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <MarqueeRow items={PARTNERS_ROW_2} direction="right" duration={32} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
