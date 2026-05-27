import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, MessageCircle, Clock } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SITE, waLink } from "@/lib/site";

export const Route = createFileRoute("/localizacao")({
  head: () => ({
    meta: [
      { title: "Localização — Auto Elétrica Dalex" },
      { name: "description", content: "Endereço, telefone, WhatsApp e horários de atendimento da Auto Elétrica Dalex." },
    ],
  }),
  component: Loc,
});

function Loc() {
  return (
    <>
      <PageHero title="Localização" subtitle="Venha nos visitar ou fale conosco a qualquer momento." />
      <section className="max-w-7xl mx-auto w-full px-4 py-16 grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 rounded-xl overflow-hidden shadow-elegant border border-border h-[460px]">
          <iframe
            title="Mapa"
            src={SITE.mapsEmbed}
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <aside className="space-y-4">
          <div className="bg-primary-gradient text-primary-foreground rounded-xl p-6 shadow-elegant">
            <h3 className="font-display font-bold text-xl flex items-center gap-2"><Clock size={20} /> Horário de Atendimento</h3>
            <p className="mt-3 text-sm opacity-90">Segunda a Sexta</p>
            <p className="font-display font-bold text-2xl">07h40 às 12h00</p>
            <p className="font-display font-bold text-2xl">13h30 às 18h00</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-6 shadow-card space-y-3">
            <div className="flex items-start gap-3"><MapPin className="text-primary mt-1" size={18} /><div><div className="font-semibold">Endereço</div><div className="text-sm text-muted-foreground">{SITE.address}</div></div></div>
            {SITE.phones.map((p) => (
              <div key={p.label} className="flex items-start gap-3">
                <Phone className="text-primary mt-1" size={18} />
                <div>
                  <div className="font-semibold">{p.label}</div>
                  <a href={`https://wa.me/${p.whatsapp}`} target="_blank" rel="noreferrer" className="text-sm text-muted-foreground hover:text-primary">{p.number}</a>
                </div>
              </div>
            ))}
          </div>
        </aside>
      </section>
    </>
  );
}
