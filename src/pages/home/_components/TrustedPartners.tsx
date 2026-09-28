import { motion } from "motion/react";
import { BrainCircuit, Wallet } from "lucide-react";

const PARTNERS = [
  {
    name: "Anthropic",
    description: "Claude models power our intelligent product features",
    icon: BrainCircuit,
  },
  {
    name: "M-Pesa",
    description: "Seamless mobile money payments for every transaction",
    icon: Wallet,
  },
];

export default function TrustedPartners() {
  return (
    <section className="py-20 sm:py-28 relative overflow-hidden section-violet">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Trusted Integrations
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
            Built On Industry Leaders
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            We integrate with best-in-class platforms to power intelligent
            features and seamless payments.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 max-w-2xl mx-auto">
          {PARTNERS.map((partner, idx) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex items-center gap-4 rounded-2xl bg-card border border-border/50 shadow-lg p-6"
            >
              <div className="w-14 h-14 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center">
                <partner.icon className="w-7 h-7 text-primary" />
              </div>
              <div>
                <span className="text-lg font-bold text-foreground">{partner.name}</span>
                <p className="text-sm text-muted-foreground mt-0.5">{partner.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
