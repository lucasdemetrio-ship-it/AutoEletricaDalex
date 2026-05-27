import { createFileRoute } from "@tanstack/react-router";
import { FileText, ExternalLink } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/emitir-gru")({
  head: () => ({
    meta: [
      { title: "Emitir GRU — Auto Elétrica Dalex" },
      { name: "description", content: "Acesse o sistema oficial do INMETRO para emissão da GRU." },
    ],
  }),
  component: GRU,
});

function GRU() {
  return (
    <>
      <PageHero title="Emissão de GRU" subtitle="Acesso direto ao sistema oficial do INMETRO." />
      <section className="max-w-7xl mx-auto w-full px-4 py-20 text-center max-w-2xl">
        <div className="w-20 h-20 mx-auto rounded-2xl bg-primary-gradient grid place-items-center text-primary-foreground shadow-elegant">
          <FileText size={36} />
        </div>
        <p className="mt-6 text-muted-foreground">
          Clique no botão abaixo para acessar diretamente o sistema oficial do
          INMETRO para emissão da GRU.
        </p>
        <a href={SITE.gruUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-primary-gradient text-primary-foreground px-8 py-4 rounded-md font-bold text-lg shadow-elegant hover-lift mt-8">
          <FileText size={20} /> EMITIR GRU <ExternalLink size={18} />
        </a>
      </section>
    </>
  );
}
