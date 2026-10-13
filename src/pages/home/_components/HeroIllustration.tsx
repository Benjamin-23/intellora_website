import { MotionConfig, motion } from "motion/react";
import { Bot, Code2, Smartphone, TrendingUp } from "lucide-react";
import IntelloraLogo from "./IntelloraLogo.tsx";

// Animated hero illustration: the Intellora mark as a glowing core, orbit rings, and
// floating cards for what we build (software, analytics, AI, mobile) linked to the core.
// Built from theme tokens so it follows light/dark mode.

const float = (delay: number, distance = 10) => ({
  animate: { y: [0, -distance, 0] },
  transition: { duration: 5, repeat: Infinity, ease: "easeInOut" as const, delay },
});

// Card anchor points in the 0-100 SVG space, matching the cards' CSS positions
const LINKS = [
  { x: 20, y: 20, color: "var(--primary)" },
  { x: 82, y: 18, color: "var(--ring)" },
  { x: 16, y: 80, color: "var(--ring)" },
  { x: 84, y: 80, color: "var(--primary)" },
];

function CodeCard() {
  const lines = [
    { w: "w-16", c: "bg-primary/70" },
    { w: "w-24", c: "bg-muted-foreground/30", indent: true },
    { w: "w-20", c: "bg-ring/80", indent: true },
    { w: "w-12", c: "bg-muted-foreground/30" },
  ];
  return (
    <div className="w-44 rounded-xl border border-border bg-card/90 p-3 shadow-xl backdrop-blur">
      <div className="flex items-center gap-1.5">
        <span className="size-2 rounded-full bg-red-400" />
        <span className="size-2 rounded-full bg-yellow-400" />
        <span className="size-2 rounded-full bg-green-400" />
        <Code2 className="ml-auto size-3.5 text-muted-foreground" />
      </div>
      <div className="mt-3 space-y-2">
        {lines.map((line, i) => (
          <motion.div
            key={i}
            className={`h-1.5 rounded-full ${line.w} ${line.c} ${line.indent ? "ml-3" : ""} origin-left`}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: [0, 1, 1, 0] }}
            transition={{ duration: 6, times: [0, 0.2, 0.85, 1], repeat: Infinity, delay: 1 + i * 0.35 }}
          />
        ))}
        <motion.span
          className="ml-3 inline-block h-3 w-0.5 bg-primary align-middle"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
      </div>
    </div>
  );
}

function ChartCard() {
  const bars = [40, 65, 50, 85, 70];
  return (
    <div className="w-40 rounded-xl border border-border bg-card/90 p-3 shadow-xl backdrop-blur">
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-medium text-muted-foreground">Growth</span>
        <span className="flex items-center gap-0.5 text-[10px] font-semibold text-primary">
          <TrendingUp className="size-3" /> 24%
        </span>
      </div>
      <div className="mt-3 flex h-14 items-end gap-1.5">
        {bars.map((h, i) => (
          <motion.div
            key={i}
            className={`flex-1 rounded-t-sm ${i === bars.length - 2 ? "bg-ring" : "bg-primary/70"}`}
            animate={{ height: [`${h * 0.4}%`, `${h}%`, `${h * 0.4}%`] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
          />
        ))}
      </div>
    </div>
  );
}

function ChatCard() {
  return (
    <div className="w-48 rounded-xl border border-border bg-card/90 p-3 shadow-xl backdrop-blur">
      <div className="flex items-center gap-2">
        <div className="flex size-6 items-center justify-center rounded-full bg-primary/15">
          <Bot className="size-3.5 text-primary" />
        </div>
        <span className="text-[11px] font-semibold text-foreground">AI Assistant</span>
      </div>
      <div className="mt-2.5 rounded-lg rounded-tl-none bg-muted px-2.5 py-2">
        <div className="h-1.5 w-28 rounded-full bg-muted-foreground/30" />
        <div className="mt-1.5 h-1.5 w-20 rounded-full bg-muted-foreground/30" />
      </div>
      <div className="mt-2 flex gap-1 pl-1">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="size-1.5 rounded-full bg-ring"
            animate={{ y: [0, -3, 0], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1, repeat: Infinity, delay: i * 0.15 }}
          />
        ))}
      </div>
    </div>
  );
}

function PhoneCard() {
  return (
    <div className="w-24 rounded-2xl border-4 border-foreground/80 bg-card p-1.5 shadow-xl">
      <div className="mx-auto mb-1.5 h-1 w-6 rounded-full bg-foreground/30" />
      <div className="flex items-center gap-1 rounded-md bg-primary px-1.5 py-1">
        <Smartphone className="size-2.5 text-primary-foreground" />
        <div className="h-1 w-8 rounded-full bg-primary-foreground/70" />
      </div>
      <div className="mt-1.5 space-y-1">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="flex items-center gap-1 rounded-md bg-muted p-1"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
          >
            <span className={`size-2.5 rounded-full ${i === 1 ? "bg-ring" : "bg-primary/60"}`} />
            <span className="h-1 flex-1 rounded-full bg-muted-foreground/30" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function HeroIllustration() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="relative mx-auto aspect-square w-full max-w-[340px] sm:max-w-[460px] lg:max-w-[520px]" aria-hidden="true">
        {/* Glow */}
        <div className="absolute inset-[18%] rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute inset-[30%] rounded-full bg-ring/20 blur-2xl" />

        {/* Orbits, links and travelling data dots */}
        <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full overflow-visible">
          <motion.g
            style={{ transformBox: "view-box", transformOrigin: "50px 50px" }}
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          >
            <circle cx="50" cy="50" r="40" fill="none" stroke="var(--border)" strokeWidth="0.3" strokeDasharray="1 1.5" />
            <circle cx="90" cy="50" r="1.2" fill="var(--ring)" />
            <circle cx="10" cy="50" r="0.9" fill="var(--primary)" />
          </motion.g>
          <motion.g
            style={{ transformBox: "view-box", transformOrigin: "50px 50px" }}
            animate={{ rotate: -360 }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          >
            <circle cx="50" cy="50" r="27" fill="none" stroke="var(--primary)" strokeOpacity="0.35" strokeWidth="0.3" />
            <circle cx="50" cy="23" r="1" fill="var(--primary)" />
          </motion.g>

          {LINKS.map((link, i) => (
            <g key={i}>
              <motion.line
                x1="50"
                y1="50"
                x2={link.x}
                y2={link.y}
                stroke={link.color}
                strokeOpacity="0.5"
                strokeWidth="0.35"
                strokeDasharray="1.5 1.5"
                animate={{ strokeDashoffset: [0, -6] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              />
              <motion.circle
                r="0.9"
                fill={link.color}
                animate={{ cx: [50, link.x], cy: [50, link.y], opacity: [0, 1, 0] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: i * 0.6 }}
              />
            </g>
          ))}
        </svg>

        {/* Core: the brand mark */}
        <motion.div
          className="absolute left-1/2 top-1/2 flex size-[30%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-primary/20 bg-card/80 shadow-2xl shadow-primary/20 backdrop-blur"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-ring/40"
            animate={{ scale: [1, 1.35], opacity: [0.7, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }}
          />
          <IntelloraLogo className="w-[62%] h-auto" />
        </motion.div>

        {/* Floating cards - scaled down on small screens */}
        <motion.div className="absolute left-[2%] top-[6%] origin-top-left scale-[0.72] sm:scale-90 lg:scale-100" {...float(0)}>
          <CodeCard />
        </motion.div>
        <motion.div className="absolute right-[0%] top-[4%] origin-top-right scale-[0.72] sm:scale-90 lg:scale-100" {...float(1.2, 12)}>
          <ChartCard />
        </motion.div>
        <motion.div className="absolute bottom-[8%] left-[0%] origin-bottom-left scale-[0.72] sm:scale-90 lg:scale-100" {...float(0.6, 8)}>
          <ChatCard />
        </motion.div>
        <motion.div className="absolute bottom-[2%] right-[6%] origin-bottom-right scale-[0.72] sm:scale-90 lg:scale-100" {...float(1.8)}>
          <PhoneCard />
        </motion.div>
      </div>
    </MotionConfig>
  );
}
