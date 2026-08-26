import Header from "./home/_components/Header.tsx";
import Hero from "./home/_components/Hero.tsx";
import Partners from "./home/_components/Partners.tsx";
import About from "./home/_components/About.tsx";
import Services from "./home/_components/Services.tsx";
import Products from "./home/_components/Products.tsx";
import TrustedPartners from "./home/_components/TrustedPartners.tsx";
import Testimonials from "./home/_components/Testimonials.tsx";
import Contact from "./home/_components/Contact.tsx";
import Footer from "./home/_components/Footer.tsx";
import SectionDivider from "./home/_components/SectionDivider.tsx";
import WhatsAppButton from "./home/_components/WhatsAppButton.tsx";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <WhatsAppButton />
      <Header />
      <Hero />
      <SectionDivider variant="wave" />
      <Partners />
      <SectionDivider variant="zigzag" />
      <About />
      <SectionDivider variant="curve" />
      <Services />
      <SectionDivider variant="dots" />
      <Products />
      <SectionDivider variant="pulse" />
      <TrustedPartners />
      <SectionDivider variant="slant" />
      <Testimonials />
      <SectionDivider variant="dots" />
      <Contact />
      <SectionDivider variant="wave" flip />
      <Footer />
    </div>
  );
}
