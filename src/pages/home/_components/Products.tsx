import { useState, useEffect } from "react";
import type { ComponentType } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Home,
  SlidersHorizontal,
  ExternalLink,
  Bell,
  Search,
  Star,
  Calendar,
  User,
  Zap,
  Wrench,
  Sparkles,
  Paintbrush,
  ChevronLeft,
  CheckCircle2,
  CreditCard,
  LayoutDashboard,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button.tsx";

// Coded HandyHub app screens - theme-aware (built from design tokens, not static
// screenshots) so both the phone and desktop mockups match the site's light/dark theme.

function PhoneStatusBar() {
  return (
    <div className="h-4 shrink-0 flex items-center justify-between px-3 text-[6px] font-medium text-foreground/70">
      <span>9:41</span>
      <div className="flex items-center gap-0.5">
        <div className="w-2 h-1.5 rounded-[1px] bg-foreground/50" />
        <div className="w-2 h-1.5 rounded-[1px] bg-foreground/50" />
        <div className="w-3 h-1.5 rounded-[1px] border border-foreground/50" />
      </div>
    </div>
  );
}

function HandyHubBrowseScreen() {
  const categories = [
    { icon: Zap, label: "Electric" },
    { icon: Wrench, label: "Plumbing" },
    { icon: Sparkles, label: "Cleaning" },
    { icon: Paintbrush, label: "Paint" },
  ];
  const pros = [
    { name: "James K.", role: "Electrician", rating: "4.9", price: "KSh 800" },
    { name: "Grace W.", role: "Cleaner", rating: "5.0", price: "KSh 500" },
  ];

  return (
    <div className="w-full h-full bg-background flex flex-col">
      <PhoneStatusBar />
      <div className="px-3 pt-1 pb-2 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-1">
          <div className="w-4 h-4 rounded-md bg-primary flex items-center justify-center">
            <Home className="w-2.5 h-2.5 text-primary-foreground" />
          </div>
          <span className="text-[7px] font-bold text-foreground">HandyHub</span>
        </div>
        <Bell className="w-2.5 h-2.5 text-muted-foreground" />
      </div>
      <div className="px-3 pb-2 shrink-0">
        <div className="h-4 rounded-full bg-muted flex items-center px-2 gap-1">
          <Search className="w-2 h-2 text-muted-foreground" />
          <span className="text-[5.5px] text-muted-foreground">Search services...</span>
        </div>
      </div>
      <div className="px-3 flex gap-1.5 pb-2 shrink-0">
        {categories.map((c) => (
          <div
            key={c.label}
            className="flex-1 flex flex-col items-center gap-0.5 rounded-lg bg-card border border-border/60 py-1.5"
          >
            <c.icon className="w-2.5 h-2.5 text-primary" />
            <span className="text-[4.5px] text-muted-foreground">{c.label}</span>
          </div>
        ))}
      </div>
      <div className="px-3 flex-1 space-y-1.5 overflow-hidden">
        {pros.map((p) => (
          <div
            key={p.name}
            className="flex items-center gap-1.5 rounded-lg bg-card border border-border/60 p-1.5"
          >
            <div className="w-5 h-5 shrink-0 rounded-full bg-accent flex items-center justify-center text-[5px] font-bold text-accent-foreground">
              {p.name[0]}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[5.5px] font-semibold text-foreground truncate">{p.name}</div>
              <div className="text-[4.5px] text-muted-foreground">{p.role}</div>
            </div>
            <div className="text-right shrink-0">
              <div className="flex items-center gap-0.5 justify-end">
                <Star className="w-1.5 h-1.5 fill-primary text-primary" />
                <span className="text-[4.5px] text-foreground">{p.rating}</span>
              </div>
              <div className="text-[4.5px] text-primary font-semibold">{p.price}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="h-5 shrink-0 border-t border-border/60 flex items-center justify-around bg-card">
        {[Home, Search, Calendar, User].map((Icon, i) => (
          <Icon key={i} className={`w-2.5 h-2.5 ${i === 0 ? "text-primary" : "text-muted-foreground"}`} />
        ))}
      </div>
    </div>
  );
}

function HandyHubJobScreen() {
  const quotes = [
    { name: "David M.", price: "KSh 1,200" },
    { name: "Peter O.", price: "KSh 1,350" },
  ];

  return (
    <div className="w-full h-full bg-background flex flex-col">
      <PhoneStatusBar />
      <div className="px-3 pt-1 pb-2 flex items-center gap-1.5 shrink-0">
        <ChevronLeft className="w-2.5 h-2.5 text-muted-foreground" />
        <span className="text-[7px] font-bold text-foreground">Post a Job</span>
      </div>
      <div className="px-3 space-y-1.5 shrink-0">
        <div>
          <div className="text-[4.5px] text-muted-foreground mb-0.5">Service Category</div>
          <div className="h-4 rounded-md bg-primary/10 border border-primary/30 flex items-center px-1.5">
            <span className="text-[5px] text-primary font-medium">Plumbing</span>
          </div>
        </div>
        <div>
          <div className="text-[4.5px] text-muted-foreground mb-0.5">Description</div>
          <div className="rounded-md bg-muted/60 border border-border/50 p-1.5 space-y-1">
            <div className="h-0.5 rounded-full bg-foreground/15 w-full" />
            <div className="h-0.5 rounded-full bg-foreground/15 w-4/5" />
            <div className="h-0.5 rounded-full bg-foreground/15 w-3/5" />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-[4.5px] text-muted-foreground">Budget</span>
          <span className="text-[5.5px] font-semibold text-foreground">KSh 1,500</span>
        </div>
        <div className="h-4 rounded-full bg-primary flex items-center justify-center">
          <span className="text-[5px] font-semibold text-primary-foreground">Get Quotes</span>
        </div>
      </div>
      <div className="px-3 mt-2 space-y-1">
        <div className="text-[4.5px] text-muted-foreground">2 quotes received</div>
        {quotes.map((q) => (
          <div
            key={q.name}
            className="flex items-center gap-1.5 rounded-lg bg-card border border-border/60 p-1.5"
          >
            <div className="w-4 h-4 shrink-0 rounded-full bg-ring/30 flex items-center justify-center text-[4.5px] font-bold text-foreground">
              {q.name[0]}
            </div>
            <div className="flex-1 text-[5px] text-foreground truncate">{q.name}</div>
            <div className="text-[4.5px] text-primary font-semibold shrink-0">{q.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function HandyHubDashboardScreen() {
  const stats = [
    { label: "Active Jobs", value: "12", icon: Wrench },
    { label: "Completed", value: "148", icon: CheckCircle2 },
    { label: "Earnings", value: "KSh 84K", icon: CreditCard },
  ];
  const bookings = [
    { name: "Alice N.", service: "Deep Cleaning", status: "In Progress" },
    { name: "Brian K.", service: "Wiring Fix", status: "Completed" },
    { name: "Faith M.", service: "Pipe Repair", status: "Pending" },
  ];
  const statusStyle: Record<string, string> = {
    Completed: "bg-primary/15 text-primary",
    "In Progress": "bg-accent/60 text-accent-foreground",
    Pending: "bg-muted text-muted-foreground",
  };

  return (
    <div className="w-full h-full flex bg-background text-foreground">
      <div className="w-8 shrink-0 bg-card border-r border-border/60 flex flex-col items-center py-2 gap-2.5">
        <div className="w-4 h-4 rounded-md bg-primary flex items-center justify-center">
          <Home className="w-2.5 h-2.5 text-primary-foreground" />
        </div>
        {[LayoutDashboard, Calendar, MessageCircle, CreditCard].map((Icon, i) => (
          <Icon key={i} className={`w-2.5 h-2.5 ${i === 0 ? "text-primary" : "text-muted-foreground"}`} />
        ))}
      </div>
      <div className="flex-1 p-2.5 flex flex-col gap-2 min-w-0">
        <div className="flex items-center justify-between">
          <span className="text-[7px] font-bold">Dashboard</span>
          <div className="w-4 h-4 rounded-full bg-accent" />
        </div>
        <div className="grid grid-cols-3 gap-1.5">
          {stats.map((s) => (
            <div key={s.label} className="rounded-md bg-card border border-border/60 p-1.5">
              <s.icon className="w-2 h-2 text-primary mb-0.5" />
              <div className="text-[6px] font-bold">{s.value}</div>
              <div className="text-[4px] text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
        <div className="rounded-md bg-card border border-border/60 flex-1 p-1.5 space-y-1.5 overflow-hidden">
          {bookings.map((b) => (
            <div key={b.name} className="flex items-center justify-between gap-1.5 text-[4.5px]">
              <span className="text-foreground font-medium truncate">{b.name}</span>
              <span className="text-muted-foreground truncate hidden sm:inline">{b.service}</span>
              <span
                className={`px-1 py-0.5 rounded-full text-[3.8px] font-medium shrink-0 ${statusStyle[b.status]}`}
              >
                {b.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function HandyHubMarketplaceScreen() {
  const pros = [
    { name: "James K.", role: "Electrician", rating: "4.9" },
    { name: "Grace W.", role: "Cleaner", rating: "5.0" },
    { name: "David M.", role: "Plumber", rating: "4.8" },
  ];

  return (
    <div className="w-full h-full bg-background text-foreground p-2.5 flex flex-col gap-2">
      <div className="flex items-center gap-1.5">
        <div className="flex-1 h-4 rounded-full bg-muted flex items-center px-2 gap-1">
          <Search className="w-2 h-2 text-muted-foreground" />
          <span className="text-[5px] text-muted-foreground">Find a professional...</span>
        </div>
        <div className="h-4 px-2 rounded-full bg-primary flex items-center shrink-0">
          <span className="text-[4.5px] font-semibold text-primary-foreground">Search</span>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-1.5 flex-1">
        {pros.map((p) => (
          <div
            key={p.name}
            className="rounded-md bg-card border border-border/60 p-1.5 flex flex-col items-center justify-center gap-0.5"
          >
            <div className="w-5 h-5 rounded-full bg-ring/30 flex items-center justify-center text-[5px] font-bold">
              {p.name[0]}
            </div>
            <div className="text-[4.5px] font-semibold text-center truncate w-full">{p.name}</div>
            <div className="text-[4px] text-muted-foreground">{p.role}</div>
            <div className="flex items-center gap-0.5">
              <Star className="w-1.5 h-1.5 fill-primary text-primary" />
              <span className="text-[4px]">{p.rating}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const HANDYHUB_PHONE_SCREENS: ComponentType[] = [HandyHubBrowseScreen, HandyHubJobScreen];
const HANDYHUB_DESKTOP_SCREENS: ComponentType[] = [HandyHubDashboardScreen, HandyHubMarketplaceScreen];

function SwipePhoneMockup({ screens, alt }: { screens: ComponentType[]; alt: string }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % screens.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [screens.length]);

  const Screen = screens[current];

  return (
    <div className="relative w-32 sm:w-40 aspect-[9/19] overflow-hidden rounded-[1.4rem] shadow-2xl border-4 border-card bg-background">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          aria-label={`${alt} screen ${current + 1}`}
          className="absolute inset-0"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <Screen />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function SlideScreenMockup({ screens, alt }: { screens: ComponentType[]; alt: string }) {
  const [current, setCurrent] = useState(0);
  // Total slides = 1 (brand slide) + screens.length
  const totalSlides = screens.length + 1;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % totalSlides);
    }, 4000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  const Screen = current > 0 ? screens[current - 1] : null;

  return (
    <div className="rounded-xl overflow-hidden shadow-2xl border border-border/30 relative aspect-[16/8] bg-card">
      <AnimatePresence mode="wait">
        {current === 0 ? (
          <motion.div
            key="brand"
            className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-4 bg-gradient-to-br from-purple-900 via-fuchsia-900 to-rose-950"
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
              className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
            >
              HandyHub
            </motion.div>
            <motion.p
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.4, ease: "easeOut" }}
              className="text-fuchsia-200 text-sm sm:text-base italic"
            >
              Kazi Safi, Space Safi
            </motion.p>
          </motion.div>
        ) : (
          Screen && (
            <motion.div
              key={current}
              aria-label={`${alt} view ${current}`}
              className="absolute inset-0"
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <Screen />
            </motion.div>
          )
        )}
      </AnimatePresence>
    </div>
  );
}

const PRODUCTS = [
  {
    id: "home-services",
    icon: Home,
    name: "HandyHub",
    tagline: "Kazi Safi, Space Safi",
    description:
      "Kenya's #1 service platform connecting homeowners with verified electricians, plumbers, cleaners & more across every county. Book trusted fundis with a tap.",
    features: [
      "2,500+ verified professionals",
      "15K+ jobs completed",
      "M-Pesa payments integrated",
      "Background-checked fundis",
    ],
    url: "https://handyhub.co.ke/",
    gradient: "from-purple-500/20 via-fuchsia-500/10 to-rose-500/5",
    darkGradient: "dark:from-purple-500/10 dark:via-fuchsia-500/5 dark:to-rose-500/5",
    hasAnimatedMockups: true,
  },
  {
    id: "smart-property-filters",
    icon: SlidersHorizontal,
    name: "ReaPro",
    tagline: "Kenya's #1 Property Platform",
    description:
      "Smart property search with advanced filters for buying, renting, and commercial real estate. Discover coastal luxury, city apartments, and investment opportunities across Kenya.",
    features: [
      "Search by location, type & price",
      "Buy, Rent & Commercial listings",
      "Explore top neighbourhoods",
      "Featured & verified listings",
    ],
    phoneMockup: "https://hercules-cdn.com/file_wlSDrVyNyKJnlwGjlrmIJSa4",
    screenMockup: "https://hercules-cdn.com/file_JTCnEgPp87WE2aJUTtaAa1h2",
    url: "https://smart-property-filters-646691.onhercules.app/",
    gradient: "from-primary/20 via-ring/10 to-accent/15",
    darkGradient: "dark:from-primary/15 dark:via-ring/8 dark:to-accent/10",
    hasAnimatedMockups: false,
  },
];

export default function Products() {
  return (
    <section id="products" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Decorative accent - distinct from the sections above/below */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-64 rounded-full bg-primary/10 blur-3xl" />

      {/* Filled shape confetti - breaks up the otherwise plain top area */}
      <div className="absolute top-10 left-[8%] w-4 h-4 rounded-full bg-primary/40" />
      <div className="hidden sm:block absolute top-24 right-[12%] w-14 h-14 rounded-full border-[3px] border-ring/30" />
      <div className="hidden sm:block absolute top-8 right-[22%] w-6 h-6 rotate-45 rounded-md bg-chart-4/20" />
      <div
        className="hidden lg:block absolute top-16 right-[6%] w-0 h-0"
        style={{
          borderLeft: "14px solid transparent",
          borderRight: "14px solid transparent",
          borderBottom: "22px solid color-mix(in oklch, var(--chart-5) 30%, transparent)",
        }}
      />
      <div className="hidden sm:flex absolute top-32 left-[18%] gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-ring/50" />
        <span className="w-1.5 h-1.5 rounded-full bg-ring/35" />
        <span className="w-1.5 h-1.5 rounded-full bg-ring/20" />
      </div>
      <div className="absolute bottom-4 left-[4%] sm:left-[10%] w-3 h-3 rounded-full bg-chart-3/40" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Our Products
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Products We Have Shipped
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            Each product is crafted with care, built for scale, and designed to
            delight users across every touchpoint.
          </p>
        </motion.div>

        {/* Product sections */}
        <div className="space-y-32">
          {PRODUCTS.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className={`relative rounded-3xl overflow-hidden bg-gradient-to-br ${product.gradient} ${product.darkGradient} border border-border/30 p-6 sm:p-10 lg:p-14`}
            >
              {/* Animated background effect for ReaPro card */}
              {product.id === "smart-property-filters" && (
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  {/* Floating orbs */}
                  <motion.div
                    className="absolute top-[10%] left-[10%] w-32 h-32 rounded-full bg-primary/15 blur-2xl"
                    animate={{ y: [0, -20, 0], x: [0, 15, 0], scale: [1, 1.2, 1] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <motion.div
                    className="absolute bottom-[15%] right-[15%] w-40 h-40 rounded-full bg-ring/12 blur-2xl"
                    animate={{ y: [0, 25, 0], x: [0, -10, 0], scale: [1, 0.85, 1] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  />
                  <motion.div
                    className="absolute top-[50%] left-[40%] w-24 h-24 rounded-full bg-accent/10 blur-xl"
                    animate={{ y: [0, -30, 0], x: [0, 20, 0], scale: [1, 1.3, 1] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                  />
                  {/* Grid pattern overlay */}
                  <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                      backgroundImage: "linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)",
                      backgroundSize: "40px 40px",
                    }}
                  />
                </div>
              )}

              <div
                className={`relative z-10 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* Text content */}
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <product.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      Product {index + 1}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-primary font-medium italic">
                    {product.tagline}
                  </p>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>

                  <ul className="mt-6 space-y-3">
                    {product.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 text-sm text-foreground"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <Button size="sm" className="gap-2" asChild>
                      <a href={product.url} target="_blank" rel="noopener noreferrer">
                        Visit {product.name} <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Mockups */}
                <div
                  className={`relative flex items-center justify-center ${
                    index % 2 === 1 ? "lg:col-start-1" : ""
                  }`}
                >
                  {product.hasAnimatedMockups ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
                      className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl"
                    >
                      {/* Slide desktop mockup */}
                      <SlideScreenMockup screens={HANDYHUB_DESKTOP_SCREENS} alt="HandyHub desktop" />

                      {/* Swipe phone mockup */}
                      <motion.div
                        initial={{ opacity: 0, y: 30, scale: 0.85 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
                        className="absolute -bottom-8 -right-4 sm:-right-8 z-20"
                      >
                        <div className="relative">
                          <SwipePhoneMockup screens={HANDYHUB_PHONE_SCREENS} alt="HandyHub mobile" />

                          {/* Rating badge pinned to the phone's top corner */}
                          <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.9, duration: 0.4, ease: "easeOut" }}
                            className="absolute -bottom-3 -left-3 sm:-left-5 z-30"
                          >
                            <motion.div
                              animate={{ y: [0, -4, 0] }}
                              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                              className="flex items-center gap-1 rounded-full bg-card border border-border/60 shadow-xl pl-1.5 pr-2.5 py-1"
                            >
                              <Star className="w-3 h-3 fill-primary text-primary" />
                              <span className="text-[11px] font-bold text-foreground">4.9</span>
                            </motion.div>
                          </motion.div>
                        </div>
                      </motion.div>

                      {/* Floating chat notification card */}
                      <motion.div
                        initial={{ opacity: 0, y: -16, scale: 0.85 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
                        className="hidden sm:block absolute -top-6 -left-4 md:-left-10 z-20"
                      >
                        <motion.div
                          animate={{ y: [0, -6, 0] }}
                          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                          className="flex items-start gap-2 rounded-xl bg-card border border-border/60 shadow-xl px-3 py-2 max-w-[168px]"
                        >
                          <div className="w-7 h-7 shrink-0 rounded-full bg-primary/15 flex items-center justify-center">
                            <MessageCircle className="w-3.5 h-3.5 text-primary" />
                          </div>
                          <div className="min-w-0">
                            <p className="text-[11px] font-semibold text-foreground leading-tight">
                              New job request
                            </p>
                            <p className="text-[10px] text-muted-foreground leading-tight truncate">
                              &ldquo;Need a plumber ASAP&rdquo;
                            </p>
                          </div>
                        </motion.div>
                      </motion.div>

                      {/* Floating professionals-online card */}
                      <motion.div
                        initial={{ opacity: 0, x: -16, scale: 0.85 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 1, duration: 0.5, ease: "easeOut" }}
                        className="hidden md:block absolute bottom-10 -left-10 z-20"
                      >
                        <motion.div
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                          className="flex items-center gap-2 rounded-xl bg-card border border-border/60 shadow-xl px-3 py-2"
                        >
                          <div className="flex -space-x-2">
                            {[
                              { l: "J", c: "bg-primary" },
                              { l: "G", c: "bg-ring" },
                              { l: "D", c: "bg-chart-3" },
                            ].map((a) => (
                              <div
                                key={a.l}
                                className={`w-6 h-6 rounded-full border-2 border-card flex items-center justify-center text-[9px] font-bold text-white ${a.c}`}
                              >
                                {a.l}
                              </div>
                            ))}
                          </div>
                          <div>
                            <p className="text-[11px] font-bold text-foreground leading-tight">2,500+</p>
                            <p className="text-[9px] text-muted-foreground leading-tight">Pros online</p>
                          </div>
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
                      className="relative w-full max-w-md"
                    >
                      <div className="rounded-xl overflow-hidden shadow-2xl border border-border/30">
                        <img
                          src={product.screenMockup}
                          alt={`${product.name} dashboard view`}
                          className="w-full h-auto object-cover"
                        />
                      </div>

                      <motion.div
                        initial={{ opacity: 0, y: 30, scale: 0.85 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
                        className="absolute -bottom-8 -right-4 sm:-right-8 w-32 sm:w-40"
                      >
                        <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-card">
                          <img
                            src={product.phoneMockup}
                            alt={`${product.name} mobile view`}
                            className="w-full h-auto object-cover"
                          />
                        </div>
                      </motion.div>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
