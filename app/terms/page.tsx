export default function TermsPage() {
  return (
    <main className="min-h-screen bg-karu-black text-karu-text">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-sm text-karu-muted hover:text-karu-accent transition-colors duration-200 mb-12"
        >
          <span>←</span>
          <span>Retour à KARUKERA</span>
        </a>

        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
          Conditions d’utilisation
        </h1>
        <p className="text-karu-muted text-sm font-mono mb-12">
          Dernière mise à jour : 16 mars 2026
        </p>

        <div className="space-y-10 text-karu-text/90 leading-relaxed">
          <section>
            <p>
              Les présentes conditions encadrent l’utilisation du site karukera.xyz,
              exploité par KARUKERA (SIREN 930 785 530). En naviguant sur ce site,
              vous acceptez les présentes conditions d’utilisation.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Objet du site</h2>
            <p>
              KARUKERA est un site vitrine et portfolio personnel présentant Julien Lelandais,
              son parcours et ses projets, notamment SuperPagr, Le Lien et Le Brasero Français.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Propriété intellectuelle</h2>
            <p>
              Les textes, visuels, éléments de marque, structure du site et contenus publiés sur karukera.xyz
              sont protégés. Sauf mention contraire, ils ne peuvent pas être reproduits, diffusés ou réutilisés
              sans autorisation préalable écrite.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Usage autorisé</h2>
            <div className="card-base p-5 text-sm text-karu-muted space-y-3">
              <p>Vous pouvez consulter librement le site à des fins d’information et de découverte des projets présentés.</p>
              <p>Vous vous engagez à ne pas perturber son fonctionnement, détourner ses contenus ou en faire un usage abusif.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Absence de conseil professionnel</h2>
            <div className="card-base border-karu-gold/30 p-5 space-y-3 text-sm">
              <p>
                Les contenus publiés sur KARUKERA sont fournis à titre informatif.
              </p>
              <div className="border-l-2 border-karu-gold/50 pl-4">
                <p className="text-karu-gold font-medium">Important</p>
                <p className="text-karu-muted mt-1">
                  Rien sur ce site ne constitue un conseil médical, juridique, financier ou professionnel personnalisé.
                  Toute décision prise à partir des informations présentées relève de la responsabilité exclusive du visiteur.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Liens externes</h2>
            <p>
              Le site peut contenir des liens vers des sites ou services externes. KARUKERA n’est pas responsable du contenu,
              du fonctionnement ou des politiques de ces services tiers.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Responsabilité</h2>
            <p>
              KARUKERA s’efforce d’assurer l’exactitude et la mise à jour des informations publiées, sans garantir l’absence totale d’erreurs,
              d’omissions ou d’indisponibilités. L’utilisation du site se fait sous votre propre responsabilité.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Modification des conditions</h2>
            <p>
              KARUKERA peut modifier les présentes conditions à tout moment. La version en ligne fait foi à la date de consultation.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Droit applicable</h2>
            <p>
              Les présentes conditions sont régies par le droit français. En cas de litige, les juridictions françaises compétentes seront seules saisies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Contact</h2>
            <p>
              Pour toute question relative aux présentes conditions, vous pouvez écrire à <a href="mailto:julien@karukera.xyz" className="text-karu-accent hover:underline">julien@karukera.xyz</a>.
            </p>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-karu-border/30 text-center text-xs text-karu-muted font-mono">
          <p>© {new Date().getFullYear()} KARUKERA. Tous droits réservés.</p>
        </div>
      </div>
    </main>
  );
}
