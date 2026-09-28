import { motion } from "motion/react";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import { WhatsAppIcon, WHATSAPP_LINK, WHATSAPP_DISPLAY } from "./WhatsAppButton.tsx";

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32 section-warm overflow-hidden">
      {/* Decorative accents - unique to this section */}
      <div className="absolute top-0 right-1/4 w-80 h-80 rounded-full bg-accent/20 blur-3xl" />
      <div className="absolute -bottom-32 -left-16 w-96 h-96 rounded-full bg-ring/10 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Contact
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              {"Let's Work Together"}
            </h2>
            <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
              Have a project in mind or want to collaborate? We would love to hear
              from you. Reach out and let us build something amazing together.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email us at</p>
                  <p className="font-medium text-foreground">support@intellorasolutions.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Based in</p>
                  <p className="font-medium text-foreground">Nairobi</p>
                </div>
              </div>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <WhatsAppIcon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Contact</p>
                  <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                    {WHATSAPP_DISPLAY}
                  </p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right side - CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.15, duration: 0.5, ease: "easeOut" }}
            className="flex items-center"
          >
            <div className="w-full p-8 sm:p-10 rounded-2xl bg-card border border-border shadow-lg">
              <h3 className="text-xl font-bold text-foreground">
                Ready to start your next project?
              </h3>
              <p className="mt-3 text-muted-foreground">
                Whether you need a custom product built, want to license one of
                our solutions, or just want to say hello - we are all ears.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="gap-2" asChild>
                  <a href="mailto:support@intellorasolutions.com">
                    Send Email <ArrowUpRight className="w-4 h-4" />
                  </a>
                </Button>
                <Button size="lg" variant="secondary" asChild>
                  <a href="#products">View Our Work</a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
