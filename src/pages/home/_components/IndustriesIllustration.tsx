import { MotionConfig, motion } from "motion/react";
import {
  Landmark,
  HeartPulse,
  GraduationCap,
  ShoppingBag,
  Truck,
  Sprout,
  Building2,
  Plane,
} from "lucide-react";
import IntelloraLogo from "./IntelloraLogo.tsx";

// Industries we build for: chips that light up in turn, all fed by the Intellora mark.
const INDUSTRIES = [
  { icon: Landmark, label: "Finance" },
  { icon: HeartPulse, label: "Healthcare" },
  { icon: GraduationCap, label: "Education" },
  { icon: ShoppingBag, label: "Retail" },
  { icon: Truck, label: "Logistics" },
  { icon: Sprout, label: "Agriculture" },
  { icon: Building2, label: "Real Estate" },
  { icon: Plane, label: "Travel" },
];

const STEP = 0.9; // seconds each chip stays highlighted
const CYCLE = STEP * INDUSTRIES.length;

export default function IndustriesIllustration() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="mt-8 rounded-2xl border border-border/60 bg-card/60 p-5 backdrop-blur-sm" aria-label="Industries we serve">
        <div className="flex items-center gap-3">
          <motion.div
            className="relative flex size-10 shrink-0 items-center justify-center rounded-full bg-card shadow-md"
            animate={{ scale: [1, 1.06, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.span
              className="absolute inset-0 rounded-full border-2 border-ring/50"
              animate={{ scale: [1, 1.5], opacity: [0.6, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
            />
            <IntelloraLogo className="w-7 h-7" />
          </motion.div>
          <p className="text-sm font-semibold text-foreground">Built for every industry</p>
          {/* Flowing line toward the chips */}
          <div className="relative h-px flex-1 overflow-hidden bg-border">
            <motion.span
              className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-primary to-transparent"
              animate={{ x: ["-100%", "300%"] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {INDUSTRIES.map((industry, i) => (
            <motion.div
              key={industry.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              className="relative overflow-hidden rounded-xl border border-border bg-background/70 px-3 py-2.5"
            >
              {/* Highlight sweeps across the chips one at a time */}
              <motion.span
                className={`absolute inset-0 ${i % 2 ? "bg-ring/20" : "bg-primary/15"}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{
                  duration: STEP * 2,
                  repeat: Infinity,
                  repeatDelay: CYCLE - STEP * 2,
                  delay: i * STEP,
                }}
              />
              <div className="relative flex items-center gap-2">
                <industry.icon className={`size-4 shrink-0 ${i % 2 ? "text-accent-foreground" : "text-primary"}`} />
                <span className="truncate text-xs font-semibold text-foreground">{industry.label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </MotionConfig>
  );
}
