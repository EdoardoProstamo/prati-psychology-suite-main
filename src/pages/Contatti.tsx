import Layout from "@/components/Layout";
import { SITE_DATA } from "@/config/siteConfig";
import { Phone, MapPin, Clock, ExternalLink } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Contatti() {
  const ref = useScrollReveal();

  return (
    <Layout>
      <title>Contatti – {SITE_DATA.fullTitle}</title>
      <meta
        name="description"
        content={`Contatta il Dott. ${SITE_DATA.name}, psicologo a Roma Prati. Indirizzo: ${SITE_DATA.address}. Tel: ${SITE_DATA.phoneDisplay}`}
      />

      <section className="pt-32 section-padding bg-background min-h-[70vh]" ref={ref}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <p className="reveal-up text-xs tracking-widest uppercase text-primary mb-3">
              Contatti
            </p>
            <h1 className="reveal-up text-4xl md:text-5xl font-serif font-semibold text-foreground mb-4">
              Siamo qui per te
            </h1>
            <p className="reveal-up text-muted-foreground max-w-lg mx-auto leading-relaxed">
              Per informazioni o per prenotare un primo colloquio conoscitivo, non esitare a contattarci.
            </p>
          </div>

          <div className="reveal-up bg-card border border-border rounded-lg p-8 md:p-12 space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-md bg-accent flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-serif font-semibold text-foreground mb-1">Indirizzo</h3>
                <p className="text-sm text-muted-foreground">{SITE_DATA.address}</p>
                <a
                  href={SITE_DATA.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-primary font-medium mt-2 link-underline"
                >
                  Apri su Google Maps
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="border-t border-border" />

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-md bg-accent flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-serif font-semibold text-foreground mb-1">Telefono</h3>
                <a
                  href={`tel:${SITE_DATA.phone}`}
                  className="text-sm text-primary font-medium link-underline"
                >
                  {SITE_DATA.phoneDisplay}
                </a>
              </div>
            </div>

            <div className="border-t border-border" />

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-md bg-accent flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-serif font-semibold text-foreground mb-1">Orari</h3>
                <p className="text-sm text-muted-foreground">{SITE_DATA.hours}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
