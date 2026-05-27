import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Mail, Phone, Instagram, Facebook, Send } from "lucide-react";

import { PageHero } from "@/components/PageHero";
import { SITE, waLink } from "@/lib/site";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Auto Elétrica Dalex" },
      { name: "description", content: "Fale conosco por WhatsApp, telefone ou pelo formulário de contato." },
    ],
  }),
  component: Contato,
});

const schema = z.object({
  nome: z.string().trim().min(2, "Informe seu nome").max(100),
  telefone: z.string().trim().min(8, "Telefone inválido").max(20),
  email: z.string().trim().email("E-mail inválido").max(255),
  mensagem: z.string().trim().min(5, "Mensagem muito curta").max(1000),
});

function Contato() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const r = schema.safeParse(data);
    if (!r.success) {
      const errs: Record<string, string> = {};
      r.error.issues.forEach((i) => (errs[i.path[0] as string] = i.message));
      setErrors(errs);
      return;
    }
    setErrors({});
    const text = `Olá! Sou ${r.data.nome}.\nTelefone: ${r.data.telefone}\nE-mail: ${r.data.email}\n\n${r.data.mensagem}`;
    window.open(waLink(text), "_blank");
    setSent(true);
    e.currentTarget.reset();
  };

  return (
    <>
      <PageHero title="Entre em Contato" subtitle="Estamos prontos para atender você." />
      <section className="max-w-7xl mx-auto w-full px-4 py-16 grid lg:grid-cols-3 gap-8">
        <form onSubmit={onSubmit} className="lg:col-span-2 bg-card border border-border rounded-xl p-8 shadow-card space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <Field label="Nome" name="nome" error={errors.nome} />
            <Field label="Telefone" name="telefone" error={errors.telefone} />
          </div>
          <Field label="E-mail" name="email" type="email" error={errors.email} />
          <div>
            <label className="text-sm font-medium">Mensagem</label>
            <textarea name="mensagem" rows={5} maxLength={1000} className="w-full mt-1 px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring" />
            {errors.mensagem && <p className="text-xs text-destructive mt-1">{errors.mensagem}</p>}
          </div>
          <button type="submit" className="inline-flex items-center gap-2 bg-primary-gradient text-primary-foreground px-6 py-3 rounded-md font-semibold shadow-soft hover-lift">
            <Send size={18} /> Enviar Mensagem
          </button>
          {sent && <p className="text-sm text-whatsapp">Abrindo WhatsApp para finalizar o envio...</p>}
        </form>

        <aside className="space-y-4">
          {SITE.phones.map((p) => (
            <a
              key={p.label}
              href={`https://wa.me/${p.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 bg-primary-gradient text-primary-foreground rounded-xl p-5 shadow-elegant hover-lift"
            >
              <Phone />
              <div>
                <div className="font-semibold">{p.label}</div>
                <div className="text-sm opacity-90">{p.number}</div>
              </div>
            </a>
          ))}
          <a href={`mailto:${SITE.email}`} className="flex items-center gap-3 bg-card border border-border rounded-xl p-5 shadow-card hover-lift">
            <Mail className="text-primary" /><div><div className="font-semibold">E-mail</div><div className="text-sm text-muted-foreground">{SITE.email}</div></div>
          </a>
          <div className="flex gap-3">
            <a href={SITE.instagram} target="_blank" rel="noreferrer" className="flex-1 grid place-items-center py-4 bg-card border border-border rounded-xl shadow-card hover-lift text-primary"><Instagram /></a>
            <a href={SITE.facebook} target="_blank" rel="noreferrer" className="flex-1 grid place-items-center py-4 bg-card border border-border rounded-xl shadow-card hover-lift text-primary"><Facebook /></a>
          </div>
        </aside>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", error }: { label: string; name: string; type?: string; error?: string }) {
  return (
    <div>
      <label className="text-sm font-medium">{label}</label>
      <input name={name} type={type} maxLength={255} className="w-full mt-1 px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring" />
      {error && <p className="text-xs text-destructive mt-1">{error}</p>}
    </div>
  );
}
