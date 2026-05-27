import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from "lucide-react";
import { SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="max-w-7xl mx-auto w-full px-4 py-14 grid gap-10 md:grid-cols-4">
        <div>
          <div className="font-display font-extrabold text-2xl">DALEX</div>
          <p className="text-sm opacity-80 mt-3">
            Posto autorizado VDO. Especialistas em tacógrafos e elétrica automotiva
            com tradição, qualidade e confiança.
          </p>
          <div className="flex gap-3 mt-4">
            <a href={SITE.instagram} target="_blank" rel="noreferrer" className="w-9 h-9 grid place-items-center rounded-md bg-white/10 hover:bg-accent transition-base"><Instagram size={16} /></a>
            <a href={SITE.facebook} target="_blank" rel="noreferrer" className="w-9 h-9 grid place-items-center rounded-md bg-white/10 hover:bg-accent transition-base"><Facebook size={16} /></a>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Navegação</h4>
          <ul className="space-y-2 text-sm opacity-90">
            <li><Link to="/" className="hover:text-accent">Home</Link></li>
            <li><Link to="/servicos" className="hover:text-accent">Serviços</Link></li>
            <li><Link to="/produtos" className="hover:text-accent">Produtos</Link></li>
            <li><Link to="/sobre" className="hover:text-accent">Sobre Nós</Link></li>
            <li><Link to="/contato" className="hover:text-accent">Contato</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Atendimento</h4>
          <ul className="space-y-2 text-sm opacity-90">
            {SITE.phones.map((p) => (
              <li key={p.label} className="flex items-start gap-2">
                <Phone size={14} className="mt-1" />
                <span><span className="font-semibold">{p.label}:</span> {p.number}</span>
              </li>
            ))}
            <li className="flex items-start gap-2"><Mail size={14} className="mt-1" /> {SITE.email}</li>
            <li className="flex items-start gap-2"><Clock size={14} className="mt-1" /> {SITE.hours}</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Endereço</h4>
          <p className="text-sm opacity-90 flex items-start gap-2">
            <MapPin size={14} className="mt-1" /> {SITE.address}
          </p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto w-full px-4 py-5 text-xs opacity-70 flex flex-wrap justify-between gap-2">
          <span>© {new Date().getFullYear()} Auto Elétrica Dalex. Todos os direitos reservados.</span>
          <span>Posto Autorizado VDO • Serviços conforme INMETRO</span>
        </div>
      </div>
    </footer>
  );
}
