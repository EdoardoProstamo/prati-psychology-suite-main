import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { SERVICES } from "@/config/siteConfig";
import { ArrowRight } from "lucide-react";

import imgSupporto from "@/assets/service-supporto.jpg";
import imgColloqui from "@/assets/service-colloqui.jpg";
import imgAnsia from "@/assets/service-ansia.jpg";
import imgCrescita from "@/assets/service-crescita.jpg";
import imgConsulenza from "@/assets/service-consulenza.jpg";

const SERVICE_IMAGES: Record<string, string> = {
  "supporto-psicologico": imgSupporto,
  "colloqui-individuali": imgColloqui,
  "gestione-ansia-stress": imgAnsia,
  "crescita-personale": imgCrescita,
  "consulenza-psicologica": imgConsulenza,
};

interface ServicesPreviewProps {
  showAll?: boolean;
}

export default function ServicesPreview({ showAll = false }: ServicesPreviewProps) {
  const ref = useScrollReveal();
  const items = showAll ? SERVICES : SERVICES.slice(0, 3);

  return (
    <section className="section-padding bg-background" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="reveal-up text-center mb-14">
          <p className="text-xs tracking-widest uppercase text-primary mb-3">I nostri servizi</p>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground">
            Come possiamo aiutarti
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((service) => (
            <article key={service.id} className="reveal-up premium-card group" tabIndex={0}>
              <div className="premium-img-wrapper aspect-[4/3]">
                <img
                  src={SERVICE_IMAGES[service.id]}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs tracking-wide text-primary bg-accent px-2.5 py-1 rounded-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {!showAll && (
          <div className="reveal-up text-center mt-10">
            <Link
              to="/servizi"
              className="inline-flex items-center gap-2 text-sm text-primary font-medium link-underline hover:gap-3 transition-all duration-200"
            >
              Scopri tutti i servizi
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
