import { createFileRoute } from "@tanstack/react-router";
import { Wrench, Cpu, Zap, ShieldCheck, Activity, Users, MessageCircle } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { waLink } from "@/lib/site";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: "Serviços — Auto Elétrica Dalex" },
      { name: "description", content: "Aferição, instalação e manutenção de tacógrafos, VDO On Board, elétrica automotiva e diagnóstico técnico." },
    ],
  }),
  component: Servicos,
});

const services = [
  { icon: Activity, title: "Aferição de Tacógrafos", desc: "Realizamos aferição e ensaios conforme exigências do INMETRO." },
  { icon: Wrench, title: "Instalação e Manutenção", desc: "Instalação, reparo e manutenção preventiva de tacógrafos digitais e mecânicos." },
  { icon: Cpu, title: "VDO On Board", desc: "Serviços e suporte completo para a plataforma VDO On Board." },
  { icon: Zap, title: "Elétrica Automotiva", desc: "Serviços elétricos para caminhões, veículos leves e pesados." },
  { icon: ShieldCheck, title: "Diagnóstico Técnico", desc: "Identificação de falhas e suporte especializado com equipamentos modernos." },
  { icon: Users, title: "Atendimento Especializado", desc: "Equipe treinada e preparada para atender com qualidade e agilidade." },
];

function Servicos() {
  return (
    <>
      <PageHero title="Nossos Serviços" subtitle="Soluções completas em tacógrafos e elétrica automotiva." />
      <section className="max-w-7xl mx-auto w-full px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="group p-7 rounded-xl border border-border bg-card hover-lift">
              <div className="w-14 h-14 rounded-lg bg-secondary grid place-items-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-base">
                <s.icon size={26} />
              </div>
              <h3 className="font-display font-bold text-xl mt-4 text-primary">{s.title}</h3>
              <p className="text-sm text-muted-foreground mt-2">{s.desc}</p>
              <a href={waLink(`Olá! Tenho interesse no serviço: ${s.title}.`)} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 mt-5 text-whatsapp font-semibold text-sm">
                <MessageCircle size={16} /> Solicitar orçamento
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
