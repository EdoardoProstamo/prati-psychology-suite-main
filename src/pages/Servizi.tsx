import Layout from "@/components/Layout";
import ServicesPreview from "@/components/ServicesPreview";
import ContactCTA from "@/components/ContactCTA";
import { SITE_DATA } from "@/config/siteConfig";
import infoImg from "@/assets/info-window.jpg";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Servizi() {
  const ref = useScrollReveal();

  return (
    <Layout>
      <title>Servizi – {SITE_DATA.fullTitle}</title>
      <meta
        name="description"
        content={`Servizi di psicologia a Roma Prati: supporto psicologico, colloqui individuali, gestione ansia e stress, crescita personale, consulenza. Dott. ${SITE_DATA.name}.`}
      />

      <section className="pt-32 pb-16 section-padding bg-muted" ref={ref}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="reveal-up text-xs tracking-widest uppercase text-primary mb-3">
              Servizi
            </p>
            <h1 className="reveal-up text-4xl md:text-5xl font-serif font-semibold text-foreground mb-6 leading-tight">
              Il supporto professionale di cui hai bisogno
            </h1>
            <p className="reveal-up text-muted-foreground leading-relaxed">
              Ogni persona è unica e merita un percorso pensato su misura. Offriamo un ventaglio 
              di servizi psicologici per accompagnarti verso il benessere, con competenza, 
              riservatezza e rispetto dei tuoi tempi.
            </p>
          </div>
          <div className="reveal-up premium-card">
            <div className="premium-img-wrapper aspect-[4/3]">
              <img
                src={infoImg}
                alt="Ambiente sereno dello studio"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      <ServicesPreview showAll />
      <ContactCTA />
    </Layout>
  );
}
