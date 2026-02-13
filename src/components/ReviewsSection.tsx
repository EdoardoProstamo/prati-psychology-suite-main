import { useScrollReveal } from "@/hooks/useScrollReveal";
import { SITE_DATA } from "@/config/siteConfig";
import { Star, ExternalLink } from "lucide-react";

export default function ReviewsSection() {
  const ref = useScrollReveal();
  const fullStars = Math.floor(SITE_DATA.reviewScore);
  const hasHalf = SITE_DATA.reviewScore % 1 >= 0.5;

  return (
    <section className="section-padding bg-background" ref={ref}>
      <div className="max-w-2xl mx-auto text-center">
        <div className="reveal-up">
          <p className="text-xs tracking-widest uppercase text-primary mb-3">Feedback</p>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-8">
            Valutazioni dei pazienti
          </h2>
        </div>

        <div className="reveal-up bg-card border border-border rounded-lg p-8 md:p-10">
          <p className="text-muted-foreground text-sm mb-5">
            La fiducia dei nostri pazienti è il miglior riconoscimento del nostro impegno quotidiano.
          </p>

          <div className="flex items-center justify-center gap-1 mb-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-6 h-6 ${
                  i < fullStars
                    ? "text-primary fill-primary"
                    : i === fullStars && hasHalf
                    ? "text-primary fill-primary/50"
                    : "text-border"
                }`}
              />
            ))}
          </div>

          <p className="text-lg font-serif font-semibold text-foreground mb-2">
            Valutazione media: {SITE_DATA.reviewScore} su {SITE_DATA.reviewMax}
          </p>

          <p className="text-sm text-muted-foreground mb-6">
            Ogni percorso è unico e contribuisce a costruire un rapporto di fiducia e crescita condivisa.
          </p>

          <a
            href={SITE_DATA.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-primary font-medium link-underline transition-colors duration-200 hover:text-accent-foreground"
          >
            Consulta le recensioni su Google
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
