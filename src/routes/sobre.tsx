import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, Award, ShieldCheck, Cpu, Users, Clock } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import elecImg from "@/assets/electrical.jpg";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre Nós — Auto Elétrica Dalex" },
      { name: "description", content: "Conheça a história, valores e diferenciais da Auto Elétrica Dalex." },
    ],
  }),
  component: Sobre,
});

const diff = [
  { icon: ShieldCheck, t: "Posto Autorizado VDO" },
  { icon: CheckCircle2, t: "Serviços conforme INMETRO" },
  { icon: Users, t: "Atendimento Especializado" },
  { icon: Award, t: "Experiência no Mercado" },
  { icon: Cpu, t: "Tecnologia e Precisão" },
  { icon: Clock, t: "Agilidade no Atendimento" },
];

function Sobre() {
  return (
    <>
      <PageHero title="Sobre a Auto Elétrica Dalex" subtitle="Tradição, qualidade e confiança em cada serviço." />
      <section className="max-w-7xl mx-auto w-full px-4 py-16 grid md:grid-cols-2 gap-12 items-center">
        <img src={elecImg} alt="Equipe técnica" loading="lazy" className="rounded-xl shadow-elegant" />
        <div>
          <span className="text-accent font-semibold uppercase tracking-wider text-sm">Nossa História</span>
          <h2 className="font-display font-extrabold text-3xl text-primary mt-2">Desde 1976 em Rio do Sul</h2>
          <p className="text-muted-foreground mt-4 leading-relaxed">
            A Auto Elétrica Dalex, localizada em Rio do Sul, é referência em soluções
            automotivas desde 1976, atuando com excelência nos segmentos de manutenção
            elétrica, mecânica leve e reparação de veículos. Uma trajetória marcada por
            confiança, qualidade e compromisso com seus clientes.
          </p>
          <p className="text-muted-foreground mt-3 leading-relaxed">
            Situada às margens da Rodovia BR-470, possui forte especialização em linha
            pesada, oferecendo serviços completos para caminhões, utilitários e veículos comerciais.
            Estrutura moderna, profissionais experientes e tecnologia de diagnóstico avançada garantem agilidade, precisão
            e segurança em cada atendimento.
          </p>
          <p className="text-muted-foreground mt-3 leading-relaxed">
            Ao longo de décadas, a Dalex se tornou sinônimo de confiança para motoristas,
            transportadoras, e empresas da região.
          </p>
        </div>
      </section>
      <section className="bg-secondary py-16">
        <div className="max-w-7xl mx-auto w-full px-4">
          <h2 className="font-display font-extrabold text-3xl text-primary text-center">Nossos Diferenciais</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            {diff.map((d) => (
              <div key={d.t} className="flex items-center gap-4 bg-card border border-border rounded-xl p-5 shadow-card hover-lift">
                <div className="w-12 h-12 rounded-lg bg-primary-gradient text-primary-foreground grid place-items-center"><d.icon size={22} /></div>
                <div className="font-semibold text-primary">{d.t}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
