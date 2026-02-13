import Layout from "@/components/Layout";
import { SITE_DATA } from "@/config/siteConfig";

export default function Cookie() {
  return (
    <Layout>
      <title>Cookie Policy – {SITE_DATA.fullTitle}</title>

      <section className="pt-32 section-padding bg-background min-h-screen">
        <div className="max-w-3xl mx-auto prose-sm">
          <h1 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-8">
            Cookie Policy
          </h1>

          <div className="space-y-6 text-sm text-muted-foreground leading-relaxed">
            <div>
              <h2 className="font-serif text-lg font-semibold text-foreground mb-2">
                Cosa sono i cookie
              </h2>
              <p>
                I cookie sono piccoli file di testo che i siti visitati inviano al terminale 
                dell'utente (computer, tablet, smartphone), dove vengono memorizzati per essere 
                poi ritrasmessi agli stessi siti alla visita successiva.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-lg font-semibold text-foreground mb-2">
                Cookie utilizzati da questo sito
              </h2>
              <p>
                Il presente sito web utilizza esclusivamente cookie tecnici strettamente 
                necessari al corretto funzionamento del sito. Non vengono utilizzati cookie 
                di profilazione né cookie di terze parti per finalità pubblicitarie.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-lg font-semibold text-foreground mb-2">
                Cookie tecnici
              </h2>
              <p>
                I cookie tecnici sono necessari per il corretto funzionamento del sito e non 
                possono essere disattivati. Generalmente vengono impostati solo in risposta ad 
                azioni effettuate dall'utente, come la navigazione tra le pagine. Non raccolgono 
                informazioni personali identificative.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-lg font-semibold text-foreground mb-2">
                Gestione dei cookie
              </h2>
              <p>
                L'utente può gestire le preferenze relative ai cookie direttamente all'interno 
                del proprio browser. Ogni browser offre la possibilità di accettare, rifiutare 
                o eliminare i cookie. La disattivazione dei cookie tecnici potrebbe compromettere 
                il corretto funzionamento del sito.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-lg font-semibold text-foreground mb-2">
                Riferimenti normativi
              </h2>
              <p>
                La presente Cookie Policy è redatta in conformità al Regolamento UE 2016/679 
                (GDPR), al D.Lgs. 196/2003 (Codice Privacy) come modificato dal D.Lgs. 101/2018, 
                e alle Linee Guida del Garante per la protezione dei dati personali in materia 
                di cookie e altri strumenti di tracciamento (Provvedimento n. 231 del 10 giugno 2021).
              </p>
            </div>

            <div>
              <h2 className="font-serif text-lg font-semibold text-foreground mb-2">
                Contatti
              </h2>
              <p>
                Per qualsiasi informazione relativa alla presente Cookie Policy, è possibile 
                contattare il Titolare del trattamento:<br />
                {SITE_DATA.name}<br />
                {SITE_DATA.address}<br />
                Tel: {SITE_DATA.phoneDisplay}
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
