export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-karu-black text-karu-text">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Back link */}
        <a
          href="https://karukera.xyz"
          className="inline-flex items-center gap-2 text-sm text-karu-muted hover:text-karu-accent transition-colors duration-200 mb-12"
        >
          <span>←</span>
          <span>Back to karukera.xyz</span>
        </a>

        {/* Header */}
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
          Privacy Policy
        </h1>
        <p className="text-karu-muted text-sm font-mono mb-12">
          Last updated: March 14, 2026
        </p>

        <div className="space-y-10 text-karu-text/90 leading-relaxed">
          {/* Intro */}
          <section>
            <p>
              KARUKERA (SIREN 930 785 530), a company registered in France,
              operates the website karukera.xyz. This policy explains how we
              collect, use, and protect your personal data in compliance with the
              General Data Protection Regulation (GDPR).
            </p>
          </section>

          {/* Data controller */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              Data Controller
            </h2>
            <div className="card-base p-5 text-sm font-mono space-y-1">
              <p>KARUKERA</p>
              <p className="text-karu-muted">SIREN 930 785 530</p>
              <p>
                Contact:{" "}
                <a
                  href="mailto:gustave@karukera.xyz"
                  className="text-karu-accent hover:underline"
                >
                  gustave@karukera.xyz
                </a>
              </p>
            </div>
          </section>

          {/* What we collect */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              What We Collect
            </h2>
            <div className="space-y-4">
              <div className="card-base p-5">
                <h3 className="text-sm font-semibold text-karu-accent font-mono mb-2">
                  Email Address
                </h3>
                <p className="text-sm text-karu-muted">
                  Collected when you subscribe to our newsletter. Used solely to
                  send you updates about KARUKERA. You can unsubscribe at any
                  time.
                </p>
              </div>
              <div className="card-base p-5">
                <h3 className="text-sm font-semibold text-karu-accent font-mono mb-2">
                  Vote Choices
                </h3>
                <p className="text-sm text-karu-muted">
                  When you participate in community votes, we store your
                  selection to tally results. Votes are not linked to personally
                  identifiable information.
                </p>
              </div>
              <div className="card-base p-5">
                <h3 className="text-sm font-semibold text-karu-accent font-mono mb-2">
                  Payment Information
                </h3>
                <p className="text-sm text-karu-muted">
                  All payment processing is handled by{" "}
                  <a
                    href="https://stripe.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-karu-cyan hover:underline"
                  >
                    Stripe
                  </a>
                  . We never store your credit card number, CVV, or full payment
                  details on our servers. Stripe may share with us your name,
                  email, and transaction confirmation.
                </p>
              </div>
            </div>
          </section>

          {/* What we do NOT collect */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              What We Do Not Collect
            </h2>
            <p>
              We do not collect or process any patient data, protected health
              information (PHI), or sensitive personal data. KARUKERA is not a
              healthcare service.
            </p>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Cookies</h2>
            <p>
              We only use essential cookies required for the site to function
              (e.g., session management). We do not use tracking cookies,
              advertising cookies, or third-party analytics cookies.
            </p>
          </section>

          {/* Legal basis */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              Legal Basis for Processing
            </h2>
            <ul className="list-disc list-inside space-y-2 text-karu-text/80">
              <li>
                <span className="text-white font-medium">Consent</span> — for
                newsletter subscriptions and community votes
              </li>
              <li>
                <span className="text-white font-medium">
                  Contract performance
                </span>{" "}
                — for processing purchases (playbooks, subscriptions)
              </li>
              <li>
                <span className="text-white font-medium">
                  Legitimate interest
                </span>{" "}
                — for essential site functionality and security
              </li>
            </ul>
          </section>

          {/* Your rights */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              Your Rights (GDPR)
            </h2>
            <p className="mb-3">
              As an EU-based company, we fully comply with GDPR. You have the
              right to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-karu-text/80">
              <li>Access your personal data</li>
              <li>Rectify inaccurate data</li>
              <li>Request erasure of your data</li>
              <li>Restrict or object to processing</li>
              <li>Data portability</li>
              <li>Withdraw consent at any time</li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, contact us at{" "}
              <a
                href="mailto:gustave@karukera.xyz"
                className="text-karu-accent hover:underline"
              >
                gustave@karukera.xyz
              </a>
              . We will respond within 30 days.
            </p>
          </section>

          {/* Data retention */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              Data Retention
            </h2>
            <p>
              We retain your data only as long as necessary for the purposes
              described above. Newsletter subscribers&apos; emails are deleted
              upon unsubscription. Transaction records are kept as required by
              French law.
            </p>
          </section>

          {/* Third parties */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              Third-Party Services
            </h2>
            <p>
              We use{" "}
              <a
                href="https://stripe.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-karu-cyan hover:underline"
              >
                Stripe
              </a>{" "}
              for payment processing. Stripe operates as an independent data
              controller for the payment data it handles. We do not sell, rent,
              or share your personal data with any other third parties.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Contact</h2>
            <p>
              For any questions about this privacy policy, contact us at{" "}
              <a
                href="mailto:gustave@karukera.xyz"
                className="text-karu-accent hover:underline"
              >
                gustave@karukera.xyz
              </a>
              .
            </p>
          </section>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-karu-border/30 text-center text-xs text-karu-muted font-mono">
          <p>© {new Date().getFullYear()} KARUKERA. All rights reserved.</p>
        </div>
      </div>
    </main>
  );
}
