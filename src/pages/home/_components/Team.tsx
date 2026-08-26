import { motion } from "motion/react";
import { Globe, Mail } from "lucide-react";

const TEAM_MEMBERS = [
  {
    name: "Alex Mwangi",
    role: "CEO & Founder",
    bio: "Visionary leader driving Intellora's mission to build smarter digital solutions across Africa.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Sarah Otieno",
    role: "CTO",
    bio: "Engineering expert with a passion for scalable architecture and cutting-edge technology.",
    avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop&crop=face",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "James Kimani",
    role: "Head of Design",
    bio: "Crafting beautiful, user-centric experiences that make complex technology feel effortless.",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Grace Wanjiru",
    role: "Head of Product",
    bio: "Connecting user needs with business goals to ship products people genuinely love.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
    linkedin: "#",
    twitter: "#",
  },
];

export default function Team() {
  return (
    <section id="team" className="relative py-24 sm:py-32 overflow-hidden">
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
            Our Team
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            The People Behind Intellora
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            A talented team of builders, thinkers, and creators passionate about
            delivering exceptional digital products.
          </p>
        </motion.div>

        {/* Team grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM_MEMBERS.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
                ease: "easeOut",
              }}
              className="group text-center"
            >
              {/* Avatar */}
              <div className="relative mx-auto w-36 h-36 sm:w-40 sm:h-40 mb-5 rounded-2xl overflow-hidden shadow-lg border border-border/50 group-hover:shadow-xl transition-shadow duration-300">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay with social links */}
                <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  <a
                    href={member.linkedin}
                    className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                    aria-label={`${member.name} LinkedIn`}
                  >
                    <Globe className="w-4 h-4" />
                  </a>
                  <a
                    href={member.twitter}
                    className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                    aria-label={`${member.name} Email`}
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Info */}
              <h3 className="font-semibold text-lg text-foreground">
                {member.name}
              </h3>
              <p className="text-sm font-medium text-primary mt-0.5">
                {member.role}
              </p>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed max-w-xs mx-auto">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
