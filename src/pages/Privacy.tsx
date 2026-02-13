import Layout from "@/components/Layout";
import { SITE_DATA } from "@/config/siteConfig";

export default function Privacy() {
  return (
    <Layout>
      <title>Privacy Policy – {SITE_DATA.fullTitle}</title>

      <section className="pt-32 section-padding bg-background min-h-screen">
        <div className="max-w-3xl mx-auto prose-sm">
          <h1 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-8">
            Privacy Policy
          </h1>

          <div className="space-y-6 text-sm text-muted-foreground leading-relaxed">
            <div>
              <h2 className="font-serif text-lg font-semibold text-foreground mb-2">
                Titolare del trattamento
              </h2>
              <p>
                {SITE_DATA.name}<br />
                {SITE_DATA.address}<br />
                Tel: {SITE_DATA.phoneDisplay}<br />
                P.IVA: {SITE_DATA.piva}
              </p>
            </div>

            <div>
              <h2 className="font-serif text-lg font-semibold text-foreground mb-2">
                Tipologie di dati raccolti
              </h2>
              <p>
                Il presente sito web non raccoglie dati personali degli utenti in modo diretto. 
                Non sono presenti form di contatto, aree riservate o sistemi di registrazione. 
                La navigazione sul sito non comporta la raccolta di dati personali identificativi, 
                salvo quanto previsto dalla sezione Cookie Policy.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-lg font-semibold text-foreground mb-2">
                Finalità del trattamento
              </h2>
              <p>
                Eventuali dati personali comunicati volontariamente dall'utente tramite contatto 
                telefonico saranno utilizzati esclusivamente per rispondere alle richieste 
                dell'utente e per la gestione del rapporto professionale.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-lg font-semibold text-foreground mb-2">
                Base giuridica del trattamento
              </h2>
              <p>
                Il trattamento dei dati si fonda sul consenso dell'interessato e/o sulla 
                necessità di esecuzione di misure precontrattuali o contrattuali, ai sensi 
                dell'art. 6 del Regolamento UE 2016/679 (GDPR).
              </p>
            </div>

            <div>
              <h2 className="font-serif text-lg font-semibold text-foreground mb-2">
                Conservazione dei dati
              </h2>
              <p>
                I dati personali saranno conservati per il tempo strettamente necessario al 
                conseguimento delle finalità per le quali sono stati raccolti e comunque non 
                oltre i termini previsti dalla normativa vigente.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-lg font-semibold text-foreground mb-2">
                Diritti dell'interessato
              </h2>
              <p>
                Ai sensi degli artt. 15-22 del GDPR, l'interessato ha il diritto di accedere 
                ai propri dati, richiederne la rettifica, la cancellazione, la limitazione del 
                trattamento, la portabilità, nonché di opporsi al trattamento stesso. 
                Per esercitare tali diritti, è possibile contattare il Titolare ai recapiti 
                sopra indicati.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-lg font-semibold text-foreground mb-2">
                Modifiche alla presente informativa
              </h2>
              <p>
                Il Titolare si riserva il diritto di apportare modifiche alla presente 
                informativa in qualsiasi momento. Si consiglia di consultare periodicamente 
                questa pagina.
              </p>
            </div>

            <p className="text-xs text-muted-foreground/70 pt-4 border-t border-border">
              Ultimo aggiornamento: {new Date().toLocaleDateString("it-IT", { year: "numeric", month: "long", day: "numeric" })}
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
