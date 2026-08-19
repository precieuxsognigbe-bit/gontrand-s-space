import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { categories, projects, type Category, type Project } from "@/lib/projects";
import heroImage from "@/assets/hero.jpg";
import portrait from "@/assets/portrait.jpg";

const title = "Architecture by Gontrand — AGAVOU Gontrand, architecte d'intérieur";
const description =
  "Architecte d'intérieur formé à l'ENSAD et à Penninghen. Projets résidentiels, commerciaux et rénovations haut de gamme, dessinés sur mesure.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const sections = [
  { id: "portfolio", label: "Réalisations" },
  { id: "a-propos", label: "À propos" },
  { id: "process", label: "Process" },
  { id: "temoignages", label: "Témoignages" },
  { id: "contact", label: "Contact" },
];

const steps = [
  {
    n: "01",
    title: "Prise de contact",
    text: "Une visite, une écoute. Usages, contraintes techniques, budget : tout est posé avant le premier trait.",
  },
  {
    n: "02",
    title: "Esquisse",
    text: "Plans, coupes et images de rendu. Les volumes, la lumière et les circulations se décident ici.",
  },
  {
    n: "03",
    title: "Sur-mesure",
    text: "Dessin d'exécution du mobilier et des agencements. Choix des matières en atelier, échantillon en main.",
  },
  {
    n: "04",
    title: "Réalisation",
    text: "Coordination des artisans, suivi de chantier hebdomadaire, réception ligne à ligne.",
  },
];

const testimonials = [
  {
    quote:
      "Il a compris l'appartement avant nous. Chaque mètre carré a trouvé sa fonction, sans jamais rien alourdir.",
    author: "Claire & Antoine M.",
    context: "Appartement, Paris VIIe",
  },
  {
    quote:
      "Un dossier d'exécution d'une précision rare. Les artisans savaient exactement quoi faire, le chantier n'a pas dérivé.",
    author: "Hélène R.",
    context: "Boutique, Bordeaux",
  },
  {
    quote:
      "Le mas a gardé son âme. La pierre, la lumière, et un confort que nous n'espérions plus.",
    author: "Famille D.",
    context: "Rénovation, Luberon",
  },
];

function Index() {
  const [filter, setFilter] = useState<Category | "tous">("tous");
  const [active, setActive] = useState<Project | null>(null);

  const visible = filter === "tous" ? projects : projects.filter((p) => p.category === filter);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative flex min-h-[92vh] items-end overflow-hidden">
        <img
          src={heroImage}
          alt="Séjour contemporain en chêne et enduit clair, baigné de lumière naturelle"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-ink/20" />
        <div className="relative mx-auto w-full max-w-7xl px-6 pb-20 md:px-12 md:pb-28">
          <Reveal>
            <p className="eyebrow text-background/70">Architecte d'intérieur — Paris</p>
            <h1 className="mt-6 max-w-3xl text-5xl leading-[1.05] text-background md:text-7xl">
              AGAVOU Gontrand
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-background/85">
              La lumière, la matière, le volume. Des intérieurs dessinés sur mesure, du premier
              croquis à la dernière poignée.
            </p>
            <a
              href="#portfolio"
              className="mt-10 inline-flex items-center gap-3 border border-background/40 px-7 py-4 text-xs tracking-[0.22em] text-background uppercase transition-colors duration-500 hover:bg-background hover:text-foreground"
            >
              Découvrir le portfolio
            </a>
          </Reveal>
        </div>
      </section>

      {/* Manifesto */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:px-12 md:py-36">
        <div className="grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <p className="eyebrow rule-gold [&::after]:mt-5">Architecture by Gontrand</p>
          </Reveal>
          <Reveal delay={120} className="md:col-span-8">
            <p className="font-display text-2xl leading-[1.45] text-foreground md:text-[2.1rem]">
              Un intérieur juste se remarque peu. Il se traverse. Nous travaillons le détail
              constructif autant que la lumière du soir : proportions tenues, matières choisies en
              atelier, exécution suivie jusqu'à la réception.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-12 md:py-32">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <Reveal>
              <p className="eyebrow">Réalisations</p>
              <h2 className="mt-4 text-4xl md:text-5xl">Projets sélectionnés</h2>
            </Reveal>
            <Reveal delay={120}>
              <div className="flex flex-wrap gap-6">
                {categories.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setFilter(c.id)}
                    className={`link-underline text-xs tracking-[0.2em] uppercase transition-colors duration-300 ${
                      filter === c.id ? "text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {c.label}
                  </button>
                ))}
              </div>
            </Reveal>
          </div>

          <ul className="mt-16 grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((p, i) => (
              <Reveal as="li" key={p.slug} delay={(i % 3) * 100}>
                <button
                  onClick={() => setActive(p)}
                  className="group block w-full text-left"
                  aria-label={`Voir le projet ${p.title}`}
                >
                  <div className="overflow-hidden bg-muted">
                    <img
                      src={p.image}
                      alt={`${p.title}, ${p.place}`}
                      width={1200}
                      height={1500}
                      loading="lazy"
                      className="aspect-4/5 w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="mt-5 flex items-baseline justify-between gap-4">
                    <h3 className="text-xl">{p.title}</h3>
                    <span className="text-xs tracking-[0.18em] text-muted-foreground uppercase">
                      {p.year}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {p.place} — {p.surface}
                  </p>
                </button>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* À propos */}
      <section id="a-propos" className="border-t border-border bg-secondary/60">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:grid-cols-12 md:px-12 md:py-32">
          <Reveal className="md:col-span-5">
            <img
              src={portrait}
              alt="AGAVOU Gontrand, architecte d'intérieur, dans son atelier"
              width={1024}
              height={1280}
              loading="lazy"
              className="w-full object-cover"
            />
          </Reveal>
          <Reveal delay={140} className="md:col-span-6 md:col-start-7 md:self-center">
            <p className="eyebrow">À propos</p>
            <h2 className="mt-4 text-4xl md:text-5xl">Une méthode, deux écoles</h2>
            <div className="mt-8 space-y-5 text-[0.95rem] leading-relaxed text-muted-foreground">
              <p>
                Formé à l'ENSAD puis à Penninghen, Gontrand AGAVOU conjugue la culture du projet et
                la discipline du dessin. Deux exigences qui n'en font qu'une : comprendre l'espace
                avant de le transformer.
              </p>
              <p>
                Chaque projet commence par le relevé et l'usage. Vient ensuite le sur-mesure —
                mobilier dessiné, agencements ajustés au millimètre, artisans choisis pour la
                matière qu'ils maîtrisent.
              </p>
              <p>
                Résidentiel, commercial, rénovation de bâti ancien : l'échelle change, la méthode
                reste. Peu de projets menés en parallèle, un suivi de chantier hebdomadaire.
              </p>
            </div>
            <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
              {[
                ["ENSAD", "Arts Décoratifs"],
                ["Penninghen", "Direction artistique"],
                ["14 ans", "de pratique"],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="font-display text-xl text-foreground">{k}</dt>
                  <dd className="mt-1 text-xs tracking-[0.14em] text-muted-foreground uppercase">
                    {v}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-12 md:py-32">
          <Reveal>
            <p className="eyebrow">Collaboration</p>
            <h2 className="mt-4 max-w-xl text-4xl md:text-5xl">Quatre étapes, un seul fil</h2>
          </Reveal>
          <ol className="mt-16 grid gap-12 md:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal as="li" key={s.n} delay={i * 110}>
                <span className="font-display text-sm text-gold">{s.n}</span>
                <h3 className="mt-4 border-t border-border pt-4 text-2xl">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Témoignages */}
      <section id="temoignages" className="border-t border-border bg-sand/40">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-12 md:py-32">
          <Reveal>
            <p className="eyebrow">Témoignages</p>
          </Reveal>
          <ul className="mt-14 grid gap-14 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal as="li" key={t.author} delay={i * 120}>
                <blockquote className="font-display text-xl leading-[1.55] text-foreground">
                  « {t.quote} »
                </blockquote>
                <footer className="mt-6 text-xs tracking-[0.16em] text-muted-foreground uppercase">
                  {t.author} — {t.context}
                </footer>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-border">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 md:grid-cols-12 md:px-12 md:py-32">
          <Reveal className="md:col-span-5">
            <p className="eyebrow">Contact</p>
            <h2 className="mt-4 text-4xl md:text-5xl">Parlons de votre lieu</h2>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Une première conversation suffit à cadrer un projet : surface, calendrier, ambition.
              Réponse sous deux jours ouvrés.
            </p>
            <dl className="mt-10 space-y-4 text-sm">
              <div>
                <dt className="eyebrow">Atelier</dt>
                <dd className="mt-1 text-foreground">18 rue de Verneuil, 75007 Paris</dd>
              </div>
              <div>
                <dt className="eyebrow">Téléphone</dt>
                <dd className="mt-1 text-foreground">+33 1 45 22 08 71</dd>
              </div>
              <div>
                <dt className="eyebrow">Courriel</dt>
                <dd className="mt-1 text-foreground">studio@architecture-gontrand.fr</dd>
              </div>
            </dl>
          </Reveal>
          <Reveal delay={140} className="md:col-span-7">
            <ContactForm />
          </Reveal>
        </div>
      </section>

      <Footer />

      {active && <ProjectModal project={active} onClose={() => setActive(null)} />}
    </div>
  );
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-40 w-full transition-all duration-700 ${
        scrolled ? "bg-background/92 backdrop-blur-sm" : ""
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-12">
        <a
          href="#"
          className={`font-display text-lg tracking-[0.14em] transition-colors duration-700 ${
            scrolled ? "text-foreground" : "text-background"
          }`}
        >
          AG
          <span className="ml-3 hidden text-xs tracking-[0.28em] uppercase opacity-70 sm:inline">
            Architecture by Gontrand
          </span>
        </a>
        <nav className="hidden gap-8 md:flex">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`link-underline text-xs tracking-[0.2em] uppercase transition-colors duration-700 ${
                scrolled ? "text-muted-foreground hover:text-foreground" : "text-background/85"
              }`}
            >
              {s.label}
            </a>
          ))}
        </nav>
        <button
          onClick={() => setOpen((v) => !v)}
          className={`text-xs tracking-[0.2em] uppercase md:hidden ${
            scrolled ? "text-foreground" : "text-background"
          }`}
          aria-expanded={open}
        >
          {open ? "Fermer" : "Menu"}
        </button>
      </div>
      {open && (
        <nav className="flex flex-col gap-5 border-t border-border bg-background px-6 py-8 md:hidden">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={() => setOpen(false)}
              className="text-xs tracking-[0.2em] text-foreground uppercase"
            >
              {s.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      className="space-y-8"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <div className="grid gap-8 sm:grid-cols-2">
        <Field label="Nom" name="nom" />
        <Field label="Courriel" name="email" type="email" />
      </div>
      <div className="grid gap-8 sm:grid-cols-2">
        <Field label="Lieu du projet" name="lieu" required={false} />
        <div>
          <label
            htmlFor="nature"
            className="eyebrow block"
          >
            Nature
          </label>
          <select
            id="nature"
            name="nature"
            className="mt-3 w-full border-b border-input bg-transparent py-3 text-sm text-foreground outline-none focus:border-gold"
          >
            <option>Résidentiel</option>
            <option>Commercial</option>
            <option>Rénovation</option>
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="message" className="eyebrow block">
          Votre projet
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="mt-3 w-full resize-none border-b border-input bg-transparent py-3 text-sm text-foreground outline-none placeholder:text-muted-foreground/60 focus:border-gold"
          placeholder="Surface, calendrier, intentions…"
        />
      </div>
      <div className="flex flex-wrap items-center gap-6">
        <button
          type="submit"
          className="border border-foreground px-8 py-4 text-xs tracking-[0.22em] uppercase transition-colors duration-500 hover:bg-foreground hover:text-background"
        >
          Envoyer
        </button>
        {sent && (
          <p className="text-sm text-muted-foreground">
            Message noté. Réponse sous deux jours ouvrés.
          </p>
        )}
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = true,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="eyebrow block">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-3 w-full border-b border-input bg-transparent py-3 text-sm text-foreground outline-none focus:border-gold"
      />
    </div>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-ink/60 p-0 backdrop-blur-sm md:p-8">
      <button
        className="absolute inset-0 cursor-default"
        aria-label="Fermer le projet"
        onClick={onClose}
      />
      <div className="relative w-full max-w-5xl bg-background">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-10 bg-background/85 px-4 py-2 text-xs tracking-[0.2em] text-foreground uppercase"
        >
          Fermer
        </button>
        <img
          src={project.image}
          alt={`${project.title}, ${project.place}`}
          width={1200}
          height={1500}
          className="aspect-4/3 w-full object-cover"
        />
        <div className="grid gap-10 px-6 py-12 md:grid-cols-12 md:px-14 md:py-16">
          <div className="md:col-span-5">
            <p className="eyebrow">{project.place}</p>
            <h2 className="mt-3 text-3xl md:text-4xl">{project.title}</h2>
            <p className="mt-4 font-display text-xl text-muted-foreground">{project.intro}</p>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <p className="text-sm leading-relaxed text-muted-foreground">{project.detail}</p>
            <dl className="mt-8 grid grid-cols-2 gap-6 border-t border-border pt-6 text-sm">
              <div>
                <dt className="eyebrow">Surface</dt>
                <dd className="mt-1">{project.surface}</dd>
              </div>
              <div>
                <dt className="eyebrow">Livraison</dt>
                <dd className="mt-1">{project.year}</dd>
              </div>
              <div className="col-span-2">
                <dt className="eyebrow">Matières</dt>
                <dd className="mt-1">{project.materials.join(" · ")}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-14 md:flex-row md:items-end md:justify-between md:px-12">
        <div>
          <p className="font-display text-4xl tracking-[0.1em] text-foreground">AG</p>
          <p className="mt-2 text-xs tracking-[0.24em] text-muted-foreground uppercase">
            Architecture by Gontrand
          </p>
        </div>
        <p className="text-xs tracking-[0.14em] text-muted-foreground uppercase">
          © {new Date().getFullYear()} — Paris
        </p>
      </div>
    </footer>
  );
}
