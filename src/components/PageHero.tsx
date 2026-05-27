import heroImg from "@/assets/hero-truck.jpg";

export function PageHero({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <section
      className="relative bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="max-w-7xl mx-auto w-full px-4 relative py-24 md:py-32 text-primary-foreground">
        <h1 className="font-display font-extrabold text-4xl md:text-5xl max-w-3xl animate-fade-in-up">{title}</h1>
        {subtitle && <p className="mt-4 text-lg opacity-90 max-w-2xl animate-fade-in-up">{subtitle}</p>}
      </div>
    </section>
  );
}
