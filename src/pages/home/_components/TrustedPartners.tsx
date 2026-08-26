import { motion } from "motion/react";

const PARTNERS = [
  {
    name: "Safaricom",
    logo: "https://hercules-cdn.com/file_IUW66dCddaWbJQTU1VkkAl27",
  },
  {
    name: "Google",
    logo: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
  },
  {
    name: "Natively AI",
    logo: "https://hercules-cdn.com/file_F6WOTdZYiTj97fGekx7aJsl1",
  },
  {
    name: "InspireHub",
    logo: "https://hercules-cdn.com/file_GP4naJ3JMBFckr5zxGKMnX1y",
  },
];

export default function TrustedPartners() {
  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-card/80 via-background to-primary/5" />
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
            Trusted Partners
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
            Built With Industry Leaders
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            We collaborate with world-class companies to deliver exceptional products and services.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {PARTNERS.map((partner, idx) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col items-center gap-4"
            >
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white flex items-center justify-center p-4 shadow-lg border border-border/30">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
              <span className="text-sm sm:text-base font-semibold text-foreground">
                {partner.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
