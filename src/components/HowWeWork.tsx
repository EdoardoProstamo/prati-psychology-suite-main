import { useScrollReveal } from "@/hooks/useScrollReveal";
import studioImg from "@/assets/studio-office.jpg";

const STEPS = [
  {
    number: "01",
    title: "Primo contatto",
    description: "Una telefonata per conoscerci, comprendere le tue esigenze e valutare insieme il percorso più adatto.",
  },
  {
    number: "02",
    title: "Primo colloquio",
    description: "Un incontro conoscitivo nello studio, per stabilire un clima di fiducia e definire gli obiettivi del percorso.",
  },
  {
    number: "03",
    title: "Percorso personalizzato",
    description: "Sedute regolari con un approccio su misura, adattato ai tuoi ritmi e alle tue necessità specifiche.",
  },
];

export default function HowWeWork() {
  const ref = useScrollReveal();

  return (
    <section className="section-padding bg-muted" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="reveal-up">
              <p className="text-xs tracking-widest uppercase text-primary mb-3">Il percorso</p>
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-8">
                Come lavoriamo
              </h2>
            </div>

            <div className="space-y-8">
              {STEPS.map((step) => (
                <div key={step.number} className="reveal-up flex gap-5">
                  <span className="text-2xl font-serif font-semibold text-primary/40 leading-none mt-1 select-none">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="font-serif text-base font-semibold text-foreground mb-1">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal-up premium-card">
            <div className="premium-img-wrapper aspect-square">
              <img
                src={studioImg}
                alt="Lo studio del Dott. Verdicchio a Roma Prati"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
