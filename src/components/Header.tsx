import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useScrollHeader } from "@/hooks/useScrollHeader";
import { SITE_DATA } from "@/config/siteConfig";
import { Phone, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Servizi", to: "/servizi" },
  { label: "Contatti", to: "/contatti" },
];

export default function Header() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-card/95 backdrop-blur-sm shadow-sm border-b border-border"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="flex flex-col" onClick={() => setMobileOpen(false)}>
          <span className="font-serif text-lg font-semibold text-foreground tracking-tight leading-tight">
            {SITE_DATA.name}
          </span>
          <span className="text-xs text-muted-foreground tracking-wide uppercase">
            {SITE_DATA.category} · Roma Prati
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`link-underline text-sm tracking-wide transition-colors duration-200 ${location.pathname === link.to
                  ? "text-primary font-medium"
                  : "text-muted-foreground hover:text-foreground"
                }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={`tel:${SITE_DATA.phone}`}
            className="inline-flex items-center gap-2 text-sm text-primary font-medium hover:text-accent-foreground transition-colors duration-200"
          >
            <Phone className="w-4 h-4" />
            <span className="hidden lg:inline">{SITE_DATA.phoneDisplay}</span>
          </a>
        </nav>

        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Chiudi menu" : "Apri menu"}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {mobileOpen && (
        <nav className="md:hidden bg-card border-b border-border px-6 pb-6 pt-2">
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={`text-base py-1 ${location.pathname === link.to
                    ? "text-primary font-medium"
                    : "text-muted-foreground"
                  }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`tel:${SITE_DATA.phone}`}
              className="inline-flex items-center gap-2 text-primary font-medium pt-2 border-t border-border"
            >
              <Phone className="w-4 h-4" />
              {SITE_DATA.phoneDisplay}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
