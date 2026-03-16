export default function PrivacyPage() {
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
          Politique de confidentialité
        </h1>
        <p className="text-karu-muted text-sm font-mono mb-12">
          Dernière mise à jour : 16 mars 2026
        </p>

        <div className="space-y-10 text-karu-text/90 leading-relaxed">
          <section>
            <p>
              KARUKERA (SIREN 930 785 530) exploite le site karukera.xyz.
              Cette politique explique comment les données personnelles sont
              collectées, utilisées et protégées dans le cadre de ce site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Responsable du traitement</h2>
            <div className="card-base p-5 text-sm font-mono space-y-1">
              <p>KARUKERA</p>
              <p className="text-karu-muted">SIREN 930 785 530</p>
              <p>
                Contact : <a href="mailto:julien@karukera.xyz" className="text-karu-accent hover:underline">julien@karukera.xyz</a>
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Données susceptibles d’être collectées</h2>
            <div className="space-y-4">
              <div className="card-base p-5">
                <h3 className="text-sm font-semibold text-karu-accent font-mono mb-2">Messages envoyés volontairement</h3>
                <p className="text-sm text-karu-muted">
                  Si vous contactez KARUKERA par email, les informations que vous transmettez sont utilisées uniquement pour répondre à votre demande.
                </p>
              </div>
              <div className="card-base p-5">
                <h3 className="text-sm font-semibold text-karu-accent font-mono mb-2">Données techniques minimales</h3>
                <p className="text-sm text-karu-muted">
                  Comme tout site web, des données techniques minimales peuvent être traitées temporairement pour assurer la sécurité, la stabilité et le bon fonctionnement du site.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Ce site n’a pas vocation à collecter des données sensibles</h2>
            <p>
              KARUKERA n’a pas pour vocation de collecter des données médicales, des données patients ou des informations sensibles via ce site vitrine.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Cookies</h2>
            <p>
              Le site peut utiliser uniquement des cookies strictement nécessaires à son fonctionnement technique. Aucun usage publicitaire ou de traçage invasif n’est recherché dans le cadre de ce portfolio.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Base légale</h2>
            <ul className="list-disc list-inside space-y-2 text-karu-text/80">
              <li><span className="text-white font-medium">Intérêt légitime</span> — pour faire fonctionner, sécuriser et maintenir le site</li>
              <li><span className="text-white font-medium">Consentement</span> — lorsque vous choisissez de prendre contact</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Vos droits</h2>
            <p className="mb-3">
              Conformément au RGPD, vous pouvez demander l’accès, la rectification ou l’effacement de vos données, ainsi que la limitation ou l’opposition à certains traitements.
            </p>
            <p>
              Pour toute demande, vous pouvez écrire à <a href="mailto:julien@karukera.xyz" className="text-karu-accent hover:underline">julien@karukera.xyz</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Durée de conservation</h2>
            <p>
              Les données sont conservées uniquement pendant la durée nécessaire au traitement de la demande ou au bon fonctionnement du site, puis supprimées ou archivées selon les obligations légales applicables.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Contact</h2>
            <p>
              Pour toute question sur cette politique de confidentialité, vous pouvez écrire à <a href="mailto:julien@karukera.xyz" className="text-karu-accent hover:underline">julien@karukera.xyz</a>.
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
