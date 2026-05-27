import { createFileRoute } from "@tanstack/react-router";
import { Award, ExternalLink } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/certificado")({
  head: () => ({
    meta: [
      { title: "Consulta de Certificado — Auto Elétrica Dalex" },
      { name: "description", content: "Consulte certificados e informações do tacógrafo no sistema oficial." },
    ],
  }),
  component: Cert,
});

function Cert() {
  return (
    <>
      <PageHero title="Consulta de Certificado" subtitle="Acesso direto ao sistema oficial do INMETRO." />
      <section className="max-w-7xl mx-auto w-full px-4 py-20 text-center max-w-2xl">
        <div className="w-20 h-20 mx-auto rounded-2xl bg-primary-gradient grid place-items-center text-primary-foreground shadow-elegant">
          <Award size={36} />
        </div>
        <p className="mt-6 text-muted-foreground">
          Acesse o sistema oficial para consultar certificados e informações do tacógrafo.
        </p>
        <a href={SITE.certUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-primary-gradient text-primary-foreground px-8 py-4 rounded-md font-bold text-lg shadow-elegant hover-lift mt-8">
          <Award size={20} /> CONSULTAR CERTIFICADO <ExternalLink size={18} />
        </a>
      </section>
    </>
  );
}
