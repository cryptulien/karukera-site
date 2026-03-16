function SectionTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-karu-accent/30 bg-karu-accent/5 text-karu-accent text-xs font-mono uppercase tracking-widest mb-6">
      <span className="w-1.5 h-1.5 rounded-full bg-karu-accent" />
      {children}
    </span>
  );
}

function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-karu-black/85 backdrop-blur-xl border-b border-karu-border/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-karu-accent to-karu-cyan flex items-center justify-center">
            <span className="text-karu-black font-bold text-sm">K</span>
          </div>
          <span className="font-semibold tracking-[0.12em] text-sm sm:text-base">KARUKERA</span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm text-karu-muted">
          <a href="#projects" className="hover:text-karu-accent transition-colors">Projets</a>
          <a href="#about" className="hover:text-karu-accent transition-colors">À propos</a>
          <a href="#contact" className="hover:text-karu-accent transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 grid-bg animate-grid-pulse" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[min(1000px,200vw)] h-[520px] bg-gradient-radial from-karu-accent/10 via-transparent to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[min(700px,160vw)] h-[420px] bg-gradient-radial from-karu-cyan/10 via-transparent to-transparent rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 w-full">
        <div className="max-w-4xl">
          <SectionTag>Portfolio personnel</SectionTag>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.02] tracking-tight mb-6">
            Julien Lelandais.
            <br />
            <span className="text-gradient-accent">Médecin, entrepreneur, builder.</span>
          </h1>
          <p className="max-w-2xl text-lg sm:text-xl text-karu-muted leading-relaxed mb-10">
            Je construis des projets utiles à l’intersection de la santé, du numérique et du concret.
            KARUKERA est ma vitrine personnelle : un espace pour présenter les produits que je développe,
            la manière dont je travaille, et les univers que je fais émerger.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-karu-accent text-karu-black font-semibold hover:bg-karu-accent-dim transition-all glow-accent-strong"
            >
              Voir les projets
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl border border-karu-border text-karu-text hover:border-karu-accent/50 hover:text-karu-accent transition-all"
            >
              Me contacter
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Intro() {
  return (
    <section className="relative py-20 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="card-base p-8 sm:p-10 md:p-12">
          <p className="text-xl sm:text-2xl leading-relaxed text-white">
            Je ne me définis pas par une seule case.
            <span className="text-karu-muted"> Je suis psychiatre, entrepreneur et développeur.</span>
          </p>
          <p className="mt-6 text-base sm:text-lg text-karu-muted leading-relaxed max-w-3xl">
            J’aime construire des projets clairs, utiles et crédibles, avec une exigence simple :
            comprendre finement les usages, aller vite, et transformer une intuition en quelque chose de réel.
            Aujourd’hui, mon travail s’articule autour de trois projets : <span className="text-white">SuperPagr</span>, <span className="text-white">Le Lien</span> et <span className="text-white">Le Brasero Français</span>.
          </p>
        </div>
      </div>
    </section>
  );
}

type Project = {
  title: string;
  eyebrow: string;
  description: string;
  tags: string[];
  gradient: string;
};

const PROJECTS: Project[] = [
  {
    title: "SuperPagr",
    eyebrow: "Santé · SaaS",
    description:
      "Le logiciel de gestion de plannings médicaux pensé pour le terrain. SuperPagr simplifie l’organisation des gardes, astreintes et remplacements pour les équipes médicales, avec une logique d’usage claire, concrète et opérationnelle.",
    tags: ["Planning médical", "Produit", "Organisation", "Santé"],
    gradient: "from-karu-accent/20 via-karu-accent/5 to-transparent",
  },
  {
    title: "Le Lien",
    eyebrow: "Relation · Sens",
    description:
      "Un projet centré sur la relation, la présence et ce qui relie. Le Lien explore une dimension plus humaine : créer des formats, outils ou expériences qui renforcent ce qui compte vraiment entre les personnes.",
    tags: ["Humain", "Relation", "Présence", "Expérience"],
    gradient: "from-karu-cyan/20 via-karu-cyan/5 to-transparent",
  },
  {
    title: "Le Brasero Français",
    eyebrow: "Marque · Art de vivre",
    description:
      "Un projet plus tangible, plus incarné, plus ancré dans le réel. Le Brasero Français s’inscrit dans un univers de chaleur, de partage et d’objets conçus pour créer de vrais moments autour d’une marque forte.",
    tags: ["Marque", "Objet", "Art de vivre", "Concret"],
    gradient: "from-karu-purple/20 via-karu-purple/5 to-transparent",
  },
];

function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14 sm:mb-16">
          <SectionTag>Projets</SectionTag>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Trois projets.
            <br />
            <span className="text-karu-muted">Une même exigence : construire quelque chose qui compte.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <article key={project.title} className="card-base p-8 relative overflow-hidden group hover:border-karu-accent/30 transition-all duration-300">
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-80`} />
              <div className="relative z-10">
                <p className="text-xs font-mono uppercase tracking-[0.2em] text-karu-accent mb-4">{project.eyebrow}</p>
                <h3 className="text-2xl font-semibold mb-4 group-hover:text-karu-accent transition-colors">{project.title}</h3>
                <p className="text-karu-muted leading-relaxed mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full border border-karu-border/50 bg-karu-black/30 text-xs text-karu-muted">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
          <div>
            <SectionTag>À propos</SectionTag>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Un parcours entre médecine,
              <br />
              <span className="text-gradient-accent">neurosciences, technologie et produit.</span>
            </h2>
            <p className="text-lg text-karu-muted leading-relaxed mb-6">
              Je suis psychiatre de formation, entrepreneur et développeur. Mon parcours m’a amené à naviguer entre la clinique,
              la recherche, la création de produits numériques et la construction de projets entrepreneuriaux.
            </p>
            <p className="text-lg text-karu-muted leading-relaxed">
              Cette trajectoire m’a donné une manière de travailler très directe : comprendre les usages réels, garder une forte exigence intellectuelle,
              prototyper vite, et transformer une idée en projet exécutable sans perdre du temps en décor inutile.
            </p>
          </div>

          <div className="card-base p-8">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-karu-accent mb-6">Ma façon de construire</p>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Comprendre les humains</h3>
                <p className="text-karu-muted">Par la clinique, l’écoute, l’observation des usages et la précision dans les besoins réels.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Construire vite</h3>
                <p className="text-karu-muted">Par le code, le prototypage et une logique d’exécution très opérationnelle.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Transformer en projet réel</h3>
                <p className="text-karu-muted">Avec une lecture entrepreneuriale orientée produit, distribution, crédibilité et impact tangible.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionTag>Contact</SectionTag>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          Parlons projet,
          <span className="text-gradient-accent"> produit ou collaboration.</span>
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-karu-muted leading-relaxed mb-10">
          Si vous souhaitez échanger autour d’un projet, d’un produit, de la santé, de la technologie ou d’une collaboration,
          vous pouvez me contacter directement.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="mailto:julien@karukera.xyz"
            className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-karu-accent text-karu-black font-semibold hover:bg-karu-accent-dim transition-all glow-accent"
          >
            julien@karukera.xyz
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl border border-karu-border text-karu-text hover:border-karu-accent/50 hover:text-karu-accent transition-all"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-karu-border/30 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-md bg-gradient-to-br from-karu-accent to-karu-cyan flex items-center justify-center">
            <span className="text-karu-black font-bold text-[10px]">K</span>
          </div>
          <span className="font-semibold tracking-[0.12em]">KARUKERA</span>
          <span className="text-karu-muted">· Portfolio personnel</span>
        </div>
        <p className="text-karu-muted">© {new Date().getFullYear()} Julien Lelandais</p>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main className="noise-bg overflow-x-hidden">
      <Nav />
      <Hero />
      <Intro />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
