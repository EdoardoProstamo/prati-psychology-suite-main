import { Link } from "react-router-dom";
import { SITE_DATA } from "@/config/siteConfig";
import { Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="section-padding bg-muted">
      <div className="max-w-xl mx-auto text-center">
        <div className="bg-card rounded-lg border border-border p-8 md:p-10">
          <h3 className="font-serif text-lg font-semibold text-foreground mb-1">
            {SITE_DATA.name}
          </h3>
          <p className="text-sm text-muted-foreground mb-6">{SITE_DATA.category}</p>

          <div className="space-y-3 text-sm text-foreground">
            <p className="flex items-center justify-center gap-2">
              <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
              {SITE_DATA.address}
            </p>
            <p className="flex items-center justify-center gap-2">
              <Phone className="w-4 h-4 text-primary flex-shrink-0" />
              <a
                href={`tel:${SITE_DATA.phone}`}
                className="link-underline text-primary"
              >
                {SITE_DATA.phoneDisplay}
              </a>
            </p>
          </div>

          <p className="mt-6 text-xs text-muted-foreground">
            P.IVA: {SITE_DATA.piva}
          </p>

          <div className="mt-4 flex items-center justify-center gap-4 text-xs text-muted-foreground">
            <Link to="/privacy" className="link-underline hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <span className="text-border">|</span>
            <Link to="/cookie" className="link-underline hover:text-foreground transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>

        <p className="mt-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} {SITE_DATA.name}. Tutti i diritti riservati.
        </p>
      </div>
    </footer>
  );
}
