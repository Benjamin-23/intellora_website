import { Suspense, lazy } from "react";
import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";

const HeroScene = lazy(() => import("./HeroScene.tsx"));

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-20">
      
      {/* Background gradient - layered for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/8 via-background to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_20%_40%,_var(--primary)_0%,_transparent_60%)] opacity-[0.07]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_20%,_var(--ring)_0%,_transparent_50%)] opacity-[0.08]" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-ring/12 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-accent/8 rounded-full blur-2xl" />

      {/* Moon / Sun - peeking in from the bottom-left corner, half cropped by the section edge */}
      <div
        className="absolute -bottom-28 -left-28 w-64 h-64 sm:w-80 sm:h-80 rounded-full pointer-events-none opacity-[0.12] dark:hidden"
        style={{
          background:
            "radial-gradient(circle at 38% 35%, #fef9c3 0%, #fde047 40%, #eab308 75%, transparent 100%)",
        }}
      />
      <div
        className="absolute -bottom-28 -left-28 w-64 h-64 sm:w-80 sm:h-80 rounded-full pointer-events-none opacity-[0.08] hidden dark:block"
        style={{
          background:
            "radial-gradient(circle at 38% 35%, #f8fafc 0%, #cbd5e1 35%, #64748b 70%, transparent 100%)",
        }}
      />

      {/* 3D Scene */}
      <Suspense fallback={null}>
        <HeroScene />
      </Suspense>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left column - Text content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-8">
              
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Intelligent Solutions, Delivered
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-extrabold text-balance leading-tight tracking-tight">
              
              Building the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-ring">
                Future
              </span>{" "}
              of Digital Products
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-xl text-balance">
              
              Intellora crafts intelligent software products that transform how
              people live and work. From home services to property technology, we
              deliver excellence.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.6 }}
              className="mt-10 flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4">
              
              <Button size="lg" className="gap-2" asChild>
                <a href="#products">
                  Explore Products <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <a href="#about">Learn About Us</a>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-lg lg:max-w-none">
              
              {[
              { value: "2+", label: "Products Shipped" },
              { value: "10K+", label: "Active Users" },
              { value: "99%", label: "Uptime" },
              { value: "4.9", label: "Avg. Rating" }].
              map((stat) =>
              <div key={stat.label} className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-bold text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </div>
              )}
            </motion.div>
          </div>

          {/* Right column - Humanoid AI Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="relative hidden lg:flex items-center justify-center">
            
            {/* Glow effect behind image */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-ring/10 rounded-full blur-3xl scale-75" />

            {/* The humanoid image */}
            <div className="relative">
              <img
                src="https://hercules-cdn.com/file_beJkdftid8qUAsX6grq5aJqC"
                alt="Futuristic AI humanoid representing Intellora's intelligent technology"
                className="w-full max-w-lg h-auto object-contain"
                style={{
                  maskImage:
                    "radial-gradient(ellipse 75% 80% at 50% 40%, black 60%, transparent 100%)",
                  WebkitMaskImage:
                    "radial-gradient(ellipse 75% 80% at 50% 40%, black 60%, transparent 100%)",
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
      {/* Wave shape divider at bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-[60px] sm:h-[80px] md:h-[120px]"
          preserveAspectRatio="none"
        >
          {/* Gradient glow line */}
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--primary)" stopOpacity="0" />
              <stop offset="20%" stopColor="var(--primary)" stopOpacity="0.6" />
              <stop offset="50%" stopColor="var(--ring)" stopOpacity="1" />
              <stop offset="80%" stopColor="var(--primary)" stopOpacity="0.6" />
              <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="waveFill" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="var(--background)" stopOpacity="0" />
              <stop offset="100%" stopColor="var(--background)" stopOpacity="1" />
            </linearGradient>
          </defs>
          {/* Filled area below the wave */}
          <path
            d="M0 80 C240 40, 480 100, 720 60 C960 20, 1200 90, 1440 50 L1440 120 L0 120 Z"
            fill="url(#waveFill)"
          />
          {/* Glowing wave stroke */}
          <path
            d="M0 80 C240 40, 480 100, 720 60 C960 20, 1200 90, 1440 50"
            stroke="url(#waveGradient)"
            strokeWidth="2"
            fill="none"
          />
          {/* Secondary subtle line */}
          <path
            d="M0 90 C320 60, 560 110, 800 70 C1040 30, 1280 95, 1440 65"
            stroke="url(#waveGradient)"
            strokeWidth="1"
            strokeOpacity="0.3"
            fill="none"
          />
        </svg>
      </div>
    </section>);

}