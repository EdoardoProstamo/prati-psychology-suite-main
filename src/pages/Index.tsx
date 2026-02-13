import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import ServicesPreview from "@/components/ServicesPreview";
import HowWeWork from "@/components/HowWeWork";
import ReviewsSection from "@/components/ReviewsSection";
import ContactCTA from "@/components/ContactCTA";
import { SITE_DATA } from "@/config/siteConfig";

const Index = () => {
  return (
    <Layout>
      <title>{SITE_DATA.fullTitle} – Supporto Psicologico Professionale</title>
      <meta
        name="description"
        content={`${SITE_DATA.name}, psicologo a Roma Prati. Supporto psicologico, colloqui individuali, gestione ansia e stress. Studio in ${SITE_DATA.addressShort}. Prenota: ${SITE_DATA.phoneDisplay}`}
      />
      <HeroSection />
      <ServicesPreview />
      <HowWeWork />
      <ReviewsSection />
      <ContactCTA />
    </Layout>
  );
};

export default Index;
