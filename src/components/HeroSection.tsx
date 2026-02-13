import { useScrollReveal } from "@/hooks/useScrollReveal";
import { SITE_DATA } from "@/config/siteConfig";
import { Phone, MapPin, Clock } from "lucide-react";
import heroImg from "@/assets/hero-therapy.jpg";

export default function HeroSection() {
  const ref = useScrollReveal();

  return (
    <section className="relative min-h-[85vh] flex items-center">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Studio di psicologia accogliente e luminoso a Roma Prati"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-foreground/40" />
      </div>

      <div className="relative z-10 section-padding w-full" ref={ref}>
        <div className="max-w-3xl">
          <p className="reveal-up text-sm tracking-widest uppercase text-primary-foreground/80 mb-4">
            {SITE_DATA.category} · Roma Prati
          </p>
          <h1 className="reveal-up text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-primary-foreground leading-tight mb-6">
            Uno spazio sicuro per il tuo benessere psicologico
          </h1>
          <p className="reveal-up text-lg text-primary-foreground/85 max-w-xl mb-10 leading-relaxed">
            Percorsi di supporto professionale personalizzati, in un ambiente riservato 
            e accogliente nel cuore del quartiere Prati.
          </p>

          <div className="reveal-up flex flex-col sm:flex-row gap-3">
            <a
              href={`tel:${SITE_DATA.phone}`}
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md text-sm font-medium transition-all duration-200 hover:opacity-90"
            >
              <Phone className="w-4 h-4" />
              Chiama ora
            </a>
            <a
              href={SITE_DATA.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary-foreground/15 backdrop-blur-sm text-primary-foreground border border-primary-foreground/20 px-6 py-3 rounded-md text-sm font-medium transition-all duration-200 hover:bg-primary-foreground/25"
            >
              <MapPin className="w-4 h-4" />
              Come raggiungerci
            </a>
          </div>
        </div>

        <div className="reveal-up mt-12 flex flex-wrap gap-4">
          {[
            { icon: MapPin, label: SITE_DATA.addressShort },
            { icon: Phone, label: SITE_DATA.phoneDisplay },
            { icon: Clock, label: SITE_DATA.hours },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-md px-4 py-2 text-primary-foreground/90 text-sm border border-primary-foreground/10"
            >
              <item.icon className="w-4 h-4 text-primary-foreground/70" />
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
