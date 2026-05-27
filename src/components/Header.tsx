import { Link } from "@tanstack/react-router";
import { Phone, MapPin, Clock, Instagram, Facebook, Menu, X } from "lucide-react";

import { useState } from "react";
import { SITE, waLink } from "@/lib/site";
import logoDalex from "@/assets/logo-dalex.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/emitir-gru", label: "Emitir GRU" },
  { to: "/certificado", label: "Certificado" },
  { to: "/servicos", label: "Serviços" },
  { to: "/produtos", label: "Produtos" },
  { to: "/localizacao", label: "Localização" },
  { to: "/contato", label: "Contato" },
  { to: "/sobre", label: "Sobre Nós" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top bar */}
      <div className="hidden md:block bg-primary text-primary-foreground text-xs">
        <div className="max-w-7xl mx-auto w-full px-4 flex items-center justify-between py-2">
          <div className="flex items-center gap-5 opacity-90">
            <span className="flex items-center gap-1.5">
              <Phone size={14} /> {SITE.phone}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin size={14} /> {SITE.address}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} /> {SITE.hours}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <a href={SITE.instagram} target="_blank" rel="noreferrer" className="hover:text-accent transition-base">
              <Instagram size={16} />
            </a>
            <a href={SITE.facebook} target="_blank" rel="noreferrer" className="hover:text-accent transition-base">
              <Facebook size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className="bg-background/95 backdrop-blur border-b border-border shadow-card">
        <div className="max-w-7xl mx-auto w-full px-4 flex items-center justify-between h-26">
          <Link to="/" className="flex items-center gap-3 group shrink-0">
            <img
              src={logoDalex}
              alt="Auto Elétrica Dalex"
              className="w-18 h-18 rounded-full shadow-soft transition-transform duration-500 group-hover:rotate-6 group-hover:scale-105"
            />
            <div className="font-black text-2xl text-primary tracking-tight whitespace-nowrap">
              Auto Elétrica Dalex
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                activeOptions={{ exact: true }}
                className="px-3 py-2 rounded-md text-sm font-medium text-foreground/80 hover:text-primary hover:bg-secondary transition-base"
                activeProps={{ className: "px-3 py-2 rounded-md text-sm font-semibold text-primary bg-secondary" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={waLink("Olá! Gostaria de solicitar um orçamento.")}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-2 bg-primary-gradient text-primary-foreground px-4 py-2.5 rounded-md font-semibold text-sm shadow-elegant hover:opacity-90 transition-base"
            >
              Solicitar orçamento
            </a>
            <button
              className="lg:hidden p-2 rounded-md hover:bg-secondary"
              onClick={() => setOpen((v) => !v)}
              aria-label="Menu"
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden border-t border-border bg-background">
            <nav className="max-w-7xl mx-auto w-full px-4 py-3 flex flex-col">
              {nav.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="px-3 py-3 rounded-md text-sm font-medium text-foreground/80 hover:bg-secondary"
                >
                  {n.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
