import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/PageHero";

import { Cpu, Disc3, BatteryCharging, Zap, ChevronDown, Package } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { waLink } from "@/lib/site";
import tacoBvdr1 from "@/assets/tacografo-bvdr-1.jpg";
import tacoBvdr2 from "@/assets/tacografo-bvdr-2.jpg";
import tacoPositron from "@/assets/tacografo-positron.jpg";
import bobBvdr1 from "@/assets/bobina-bvdr-1.jpg";
import bobBvdr2 from "@/assets/bobina-bvdr-2.jpg";
import bobPositron from "@/assets/bobina-positron.jpg";
import disco7d125 from "@/assets/disco-vdo-7d-125.jpg";
import disco24h125 from "@/assets/disco-vdo-24h-125.jpg";
import disco7d180 from "@/assets/disco-vdo-7d-180.jpg";
import disco24h180 from "@/assets/disco-vdo-24h-180.jpg";
import bateriaEstoque from "@/assets/bateria-moura-estoque.jpg";
import bateriaLeve from "@/assets/bateria-moura-leve.jpg";
import bateriaPesada from "@/assets/bateria-moura-pesada.jpg";
import alternador from "@/assets/produto-alternador.jpg";

export const Route = createFileRoute("/produtos")({
  head: () => ({
    meta: [
      { title: "Produtos — Auto Elétrica Dalex" },
      { name: "description", content: "Tacógrafos digitais, discos e bobinas, baterias e alternadores para linha pesada e leve." },
    ],
  }),
  component: Produtos,
});

type Photo = { src: string; label: string };
type Category = {
  id: string;
  icon: typeof Cpu;
  title: string;
  desc: string;
  photos: Photo[];
  externalLink?: string;
  externalCaption?: string;
  orcamentoLink?: string;
};

const SHOPEE_URL = "https://shopee.com.br/dalexauto?entryPoint=ShopBySearch&searchKeyword=dalexauto";
const PECAS_WA = "https://wa.me/554797430134?text=" + encodeURIComponent("Olá! Quero um orçamento de peças.");

const categories: Category[] = [
  {
    id: "todas-pecas",
    icon: Package,
    title: "Todas as Peças",
    desc: "Acesse todos os nossos produtos",
    photos: [],
    externalLink: SHOPEE_URL,
    externalCaption: "Acesse todos os nossos produtos",
    orcamentoLink: PECAS_WA,
  },
  {
    id: "tacografos",
    icon: Cpu,
    title: "Tacógrafos Digitais",
    desc: "Modelos VDO BVDR e Positron Stonebridge para linha pesada.",
    photos: [
      { src: tacoBvdr1, label: "VDO BVDR 1.0" },
      { src: tacoBvdr2, label: "VDO BVDR 2.0" },
      { src: tacoPositron, label: "Positron Stoneridge TC-100" },
    ],
  },
  {
    id: "discos-bobinas",
    icon: Disc3,
    title: "Discos e Bobinas",
    desc: "Bobinas térmicas e discos diagrama originais para todos os tacógrafos.",
    photos: [
      { src: bobBvdr1, label: "Bobina VDO BVDR 1.0" },
      { src: bobBvdr2, label: "Bobina VDO BVDR 2.0" },
      { src: bobPositron, label: "Bobina Positron" },
      { src: disco7d125, label: "Disco VDO 7 dias / 125 km/h" },
      { src: disco24h125, label: "Disco VDO 24h / 125 km/h" },
      { src: disco7d180, label: "Disco VDO 7 dias / 180 km/h" },
      { src: disco24h180, label: "Disco VDO 24h / 180 km/h" },
    ],
  },
  {
    id: "baterias",
    icon: BatteryCharging,
    title: "Baterias",
    desc: "Baterias automotivas e de linha pesada com garantia.",
    photos: [
      { src: bateriaLeve, label: "Moura Linha Leve" },
      { src: bateriaPesada, label: "Moura Linha Pesada" },
      { src: bateriaEstoque, label: "Baterias Moura Originais" },
    ],
  },
  {
    id: "alternadores",
    icon: Zap,
    title: "Alternadores",
    desc: "Alternadores novos e remanufaturados para caminhões, utilitários e máquinas agrícolas.",
    photos: [{ src: alternador, label: "Alternador Automotivo" }],
  },
];


function Produtos() {
  const [openId, setOpenId] = useState<string | null>(null);
  const [zoom, setZoom] = useState<Photo | null>(null);

  return (
    <>
      <PageHero title="Produtos/E-commerce" subtitle="Acesse nosso e-comerce e toda l inha completa para seu tacógrafo e sistema elétrico." />
      <section className="max-w-7xl mx-auto w-full px-4 py-16">
        <div className="flex flex-col gap-5 max-w-4xl mx-auto">
          {categories.map((cat) => {
            const isOpen = openId === cat.id;
            return (
              <div key={cat.id} className="rounded-xl border border-border bg-card overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : cat.id)}
                  className="group w-full p-6 text-left flex items-center gap-4 hover:bg-secondary/50 transition-base"
                >
                  <div className={`w-14 h-14 rounded-lg grid place-items-center shrink-0 transition-base ${isOpen ? "bg-primary text-primary-foreground" : "bg-secondary text-primary"}`}>
                    <cat.icon size={26} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-bold text-xl text-primary">{cat.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{cat.desc}</p>
                  </div>
                  <ChevronDown
                    className={`text-muted-foreground shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
                    size={22}
                  />
                </button>

                {isOpen && (
                  <div className="p-6 pt-2 border-t border-border bg-background/50">
                    {cat.photos.length > 0 && (
                      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                        {cat.photos.map((p, i) => (
                          <button
                            type="button"
                            key={`${p.label}-${i}`}
                            onClick={() => setZoom(p)}
                            className="relative aspect-square rounded-lg overflow-hidden bg-secondary border border-border group cursor-zoom-in"
                          >
                            <img src={p.src} alt={p.label} loading="lazy" className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-2 text-left">
                              <span className="text-xs font-semibold text-white leading-tight block">{p.label}</span>
                            </div>
                          </button>
                        ))}
                      </div>
                    )}

                    <div className="mt-6 flex flex-wrap gap-3">
                      {cat.externalLink && (
                        <a
                          href={cat.externalLink}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-base"
                        >
                          Acessar E-commerce
                        </a>
                      )}
                      <a
                        href={cat.orcamentoLink ?? waLink(`Olá! Quero um orçamento de ${cat.title}.`)}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-whatsapp text-whatsapp-foreground font-semibold text-sm hover:opacity-90 transition-base"
                      >
                        Solicitar orçamento
                      </a>
                    </div>

                    {cat.externalCaption && (
                      <p className="mt-4 text-sm text-muted-foreground italic">{cat.externalCaption}</p>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
      <Dialog open={!!zoom} onOpenChange={(o) => !o && setZoom(null)}>
        <DialogContent className="max-w-3xl p-2 bg-background">
          {zoom && (
            <img src={zoom.src} alt={zoom.label} className="w-full h-auto rounded-md object-contain max-h-[80vh]" />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
