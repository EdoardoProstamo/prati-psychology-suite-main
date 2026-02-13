import { useScrollReveal } from "@/hooks/useScrollReveal";
import { SITE_DATA } from "@/config/siteConfig";
import { Phone, MapPin } from "lucide-react";
import ctaImg from "@/assets/cta-welcome.jpg";

export default function ContactCTA() {
  const ref = useScrollReveal();

  return (
    <section className="relative" ref={ref}>
      <div className="premium-img-wrapper absolute inset-0">
        <img
          src={ctaImg}
          alt="Ingresso accogliente dello studio di psicologia"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-foreground/55" />
      </div>

      <div className="relative z-10 section-padding">
        <div className="max-w-2xl mx-auto text-center">
          <p className="reveal-up text-xs tracking-widest uppercase text-primary-foreground/70 mb-3">
            Inizia il tuo percorso
          </p>
          <h2 className="reveal-up text-3xl md:text-4xl font-serif font-semibold text-primary-foreground mb-4">
            Prenota un primo colloquio
          </h2>
          <p className="reveal-up text-primary-foreground/80 mb-8 leading-relaxed">
            Il primo passo è sempre il più importante. Contattaci per un colloquio conoscitivo, 
            senza impegno, per capire insieme come possiamo esserti d'aiuto.
          </p>

          <div className="reveal-up flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`tel:${SITE_DATA.phone}`}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md text-sm font-medium transition-all duration-200 hover:opacity-90"
            >
              <Phone className="w-4 h-4" />
              {SITE_DATA.phoneDisplay}
            </a>
            <a
              href={SITE_DATA.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary-foreground/90 text-sm link-underline"
            >
              <MapPin className="w-4 h-4" />
              {SITE_DATA.addressShort}, Roma
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
