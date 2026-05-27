import { createFileRoute, Link } from "@tanstack/react-router";
import { FileText, Wrench, ShieldCheck, Award, Clock, Cpu, ArrowRight, CheckCircle2, Truck, Zap, Activity, Users } from "lucide-react";

import heroImg from "@/assets/hero-truck.jpg";
import tachoImg from "@/assets/tachograph.jpg";
import elecImg from "@/assets/electrical.jpg";
import dalexTeam from "@/assets/dalex-team.png";

import prodTacografo from "@/assets/produto-tacografo.jpg";
import prodBobina from "@/assets/produto-bobina-bvdr.jpg";
import servGru from "@/assets/servico-gru.jpg";
import servCert from "@/assets/servico-certificado.jpg";
import { waLink } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Auto Elétrica Dalex" },
      { name: "description", content: "Posto autorizado VDO. Aferição, instalação e manutenção de tacógrafos para caminhões, ônibus e veículos pesados." },
    ],
  }),
  component: Home,
});

const features = [
  { icon: Award, title: "Anos de Experiência", desc: "Tradição no setor automotivo." },
  { icon: ShieldCheck, title: "Posto Autorizado VDO", desc: "Garantia oficial de fábrica." },
  { icon: CheckCircle2, title: "Serviços Certificados", desc: "Conforme exigências do INMETRO." },
  { icon: Clock, title: "Atendimento Rápido", desc: "Agilidade com qualidade técnica." },
  { icon: Cpu, title: "Tecnologia e Precisão", desc: "Equipamentos modernos." },
  { icon: Users, title: "Equipe Especializada", desc: "Profissionais capacitados." },
];

const services = [
  { icon: Activity, title: "Aferição de Tacógrafos", desc: "Aferição e ensaios conforme exigências do INMETRO." },
  { icon: Wrench, title: "Instalação e Manutenção", desc: "Instalação, reparo e manutenção preventiva de tacógrafos digitais e mecânicos." },
  { icon: Cpu, title: "VDO On Board", desc: "Serviços e suporte para a plataforma VDO On Board." },
  { icon: Zap, title: "Elétrica Automotiva", desc: "Serviços elétricos para caminhões, veículos leves e pesados." },
  { icon: ShieldCheck, title: "Diagnóstico Técnico", desc: "Identificação de falhas e suporte especializado." },
  { icon: Users, title: "Atendimento Especializado", desc: "Equipe treinada e preparada para atender com qualidade." },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section
        className="relative bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="absolute inset-0 bg-hero-gradient" />
        {/* decorative ring */}
        <div className="absolute -right-32 -top-32 w-[480px] h-[480px] rounded-full border-2 border-accent/20 animate-spin-slow pointer-events-none" />
        <div className="absolute right-10 bottom-10 w-40 h-40 rounded-full border border-white/10 animate-spin-slow pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full px-4 relative py-24 md:py-36 text-primary-foreground grid lg:grid-cols-[1fr_auto] gap-10 items-center">
          <div className="max-w-3xl animate-fade-in-up">
            <span className="inline-flex items-center gap-2 bg-white text-primary px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider shadow-soft">
              <Truck size={14} /> Posto Autorizado VDO
            </span>
            <h1 className="font-display font-extrabold text-4xl md:text-5xl mt-5 leading-tight text-balance">
              Sua Segurança na Estrada Começa Aqui!
            </h1>
            <p className="mt-5 text-lg md:text-xl opacity-90">
              A Auto Elétrica Dalex é especializada em tacógrafos e elétrica de veículos
              automotores, atuando há anos com qualidade, confiança e excelência. Realizamos
              aferição, instalação, manutenção e suporte técnico para diversos veículos.
            </p>
            <p className="mt-3 text-base opacity-80">
              Trabalhamos com tecnologia, experiência e profissionais qualificados para
              garantir segurança, precisão e funcionamento correto do seu equipamento.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={waLink("Olá! Gostaria de falar com vocês.")} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-md font-semibold shadow-soft hover-lift">
                Fale Conosco
              </a>
              <a href="https://shopee.com.br/dalexauto?entryPoint=ShopBySearch&searchKeyword=dalexauto" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-md font-semibold shadow-soft hover-lift">
                E-commerce
              </a>
            </div>
          </div>

          <div className="hidden lg:block animate-fade-in-up">
            <img
              src={dalexTeam}
              alt="Equipe Dalex Auto Elétrica"
              className="w-full max-w-xl h-auto drop-shadow-2xl"
            />
          </div>

        </div>
      </section>

      {/* Highlights — destaques visuais */}
      <section className="max-w-7xl mx-auto w-full px-4 -mt-12 relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { img: prodTacografo, title: "Tacógrafos", desc: "Digitais e mecânicos VDO", to: "/produtos" as const },
            { img: prodBobina, title: "Bobinas BVDR", desc: "Peças originais VDO", to: "/produtos" as const },
            { img: servGru, title: "Emissão de GRU", desc: "Direto pelo INMETRO", to: "/emitir-gru" as const },
            { img: servCert, title: "Certificado Final", desc: "Consulta oficial online", to: "/certificado" as const },
          ].map((c, i) => (
            <Link
              to={c.to}
              key={c.title}
              className="group relative overflow-hidden rounded-xl shadow-elegant hover-lift bg-card animate-fade-in-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={c.img}
                  alt={c.title}
                  loading="lazy"
                  width={768}
                  height={768}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 text-primary-foreground">
                <h3 className="font-display font-bold text-lg">{c.title}</h3>
                <p className="text-xs opacity-90 mt-0.5">{c.desc}</p>
                <span className="inline-flex items-center gap-1 mt-3 text-xs font-semibold text-accent opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  Saiba mais <ArrowRight size={12} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="max-w-7xl mx-auto w-full px-4 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-accent font-semibold uppercase tracking-wider text-sm">Sobre a Empresa</span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-primary mt-2">
            Tradição, Qualidade e Confiança
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Localizada em Rio do Sul, às margens da Rodovia BR-470, a Auto Elétrica Dalex é
            referência em soluções automotivas <strong>desde 1976</strong>, atuando com
            excelência em manutenção elétrica, mecânica leve e reparação de veículos.
          </p>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Forte especialização em <strong>linha pesada e máquinas agrícolas</strong>,
            com estrutura moderna, profissionais experientes e tecnologia de diagnóstico
            avançada — garantindo agilidade, precisão e segurança em cada atendimento.
          </p>
          <div className="mt-6 grid sm:grid-cols-2 gap-3">
            {["Tradição desde 1976", "Linha pesada e agrícola", "Diagnóstico avançado", "Posto Autorizado VDO"].map((t) => (
              <div key={t} className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="text-accent" size={18} /> {t}
              </div>
            ))}
          </div>
          <Link to="/sobre" className="inline-flex items-center gap-2 mt-7 text-primary font-semibold hover:gap-3 transition-base">
            Conheça mais <ArrowRight size={18} />
          </Link>
        </div>
        <div className="relative">
          <img src={tachoImg} alt="Tacógrafo digital instalado" loading="lazy" className="rounded-xl shadow-elegant w-full" />
          <div className="absolute -bottom-6 -left-6 bg-primary-gradient text-primary-foreground p-5 rounded-xl shadow-elegant hidden md:block">
            <div className="font-display font-extrabold text-3xl">1976</div>
            <div className="text-xs opacity-90">Tradição e confiança</div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-secondary py-20">
        <div className="max-w-7xl mx-auto w-full px-4">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-accent font-semibold uppercase tracking-wider text-sm">Nossos Diferenciais</span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-primary mt-2">
              Por que escolher a Dalex
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {features.map((f) => (
              <div key={f.title} className="bg-card p-6 rounded-xl shadow-card hover-lift border border-border">
                <div className="w-12 h-12 rounded-lg bg-primary-gradient grid place-items-center text-primary-foreground">
                  <f.icon size={22} />
                </div>
                <h3 className="font-display font-bold text-lg mt-4 text-primary">{f.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="max-w-7xl mx-auto w-full px-4 py-20">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-accent font-semibold uppercase tracking-wider text-sm">Serviços</span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-primary mt-2">
            Soluções completas para seu veículo
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {services.map((s) => (
            <div key={s.title} className="group p-6 rounded-xl border border-border bg-card hover-lift">
              <div className="w-14 h-14 rounded-lg bg-secondary grid place-items-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-base">
                <s.icon size={26} />
              </div>
              <h3 className="font-display font-bold text-xl mt-4 text-primary">{s.title}</h3>
              <p className="text-sm text-muted-foreground mt-2">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/servicos" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-semibold shadow-soft hover-lift">
            Ver todos os serviços <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section
        className="relative bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${elecImg})` }}
      >
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="max-w-7xl mx-auto w-full px-4 relative py-20 text-center text-primary-foreground">
          <h2 className="font-display font-extrabold text-3xl md:text-4xl">Precisa de atendimento agora?</h2>
          <p className="mt-3 opacity-90 max-w-xl mx-auto">
            Fale com nossa equipe e tire suas dúvidas. Atendimento rápido e especializado.
          </p>
          <a href={waLink()} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-whatsapp text-whatsapp-foreground px-7 py-3.5 rounded-md font-semibold shadow-elegant hover-lift mt-7">
            CHAMAR NO WHATSAPP
          </a>
        </div>
      </section>
    </>
  );
}
