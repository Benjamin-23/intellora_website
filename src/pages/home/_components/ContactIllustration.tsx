import { MotionConfig, motion } from "motion/react";
import { Send, CheckCheck } from "lucide-react";

// A paper plane flies along a dashed route and lands as a delivered message.
const ROUTE = "M 16 86 C 70 86, 80 20, 140 34 S 210 70, 236 40";
const DURATION = 3.2;

export default function ContactIllustration() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="relative mb-6 h-[104px] w-[280px] max-w-full" aria-hidden="true">
        <svg viewBox="0 0 280 104" className="absolute inset-0 h-full w-full" fill="none">
          <path d={ROUTE} stroke="var(--border)" strokeWidth="2" strokeDasharray="4 6" strokeLinecap="round" />
          <motion.path
            d={ROUTE}
            stroke="var(--primary)"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 1], opacity: [1, 1, 0] }}
            transition={{ duration: DURATION, times: [0, 0.75, 1], repeat: Infinity, ease: "easeInOut" }}
          />
          <circle cx="16" cy="86" r="4" fill="var(--ring)" />
        </svg>

        {/* Plane rides the same route via CSS offset-path */}
        <motion.div
          className="absolute left-0 top-0 flex size-8 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/30"
          style={{ offsetPath: `path("${ROUTE}")`, offsetRotate: "auto 45deg" }}
          initial={{ offsetDistance: "0%" }}
          animate={{ offsetDistance: ["0%", "100%", "100%"], opacity: [1, 1, 0] }}
          transition={{ duration: DURATION, times: [0, 0.75, 1], repeat: Infinity, ease: "easeInOut" }}
        >
          <Send className="size-4 -rotate-45" />
        </motion.div>

        {/* Delivered bubble pops when the plane lands */}
        <motion.div
          className="absolute right-0 top-2 flex items-center gap-1.5 rounded-2xl rounded-bl-sm border border-border bg-card px-3 py-2 shadow-md"
          animate={{ scale: [0.6, 0.6, 1, 1], opacity: [0, 0, 1, 1] }}
          transition={{ duration: DURATION, times: [0, 0.7, 0.8, 1], repeat: Infinity }}
        >
          <span className="text-xs font-semibold text-foreground">Message sent</span>
          <CheckCheck className="size-4 text-ring" />
        </motion.div>
      </div>
    </MotionConfig>
  );
}
