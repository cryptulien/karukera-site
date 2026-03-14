export default function TermsPage() {
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
          Terms of Service
        </h1>
        <p className="text-karu-muted text-sm font-mono mb-12">
          Last updated: March 14, 2026
        </p>

        <div className="space-y-10 text-karu-text/90 leading-relaxed">
          {/* Intro */}
          <section>
            <p>
              These Terms of Service (&quot;Terms&quot;) govern your use of
              karukera.xyz and all products and services offered by KARUKERA
              (SIREN 930 785 530), a company registered in France. By using our
              site or purchasing our products, you agree to these Terms.
            </p>
          </section>

          {/* Definitions */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              Definitions
            </h2>
            <ul className="list-disc list-inside space-y-2 text-karu-text/80">
              <li>
                <span className="text-white font-medium">
                  &quot;Playbook&quot;
                </span>{" "}
                — a downloadable digital product (PDF or equivalent) sold on
                karukera.xyz
              </li>
              <li>
                <span className="text-white font-medium">
                  &quot;War Room&quot;
                </span>{" "}
                — the KARUKERA community, accessible via subscription
              </li>
              <li>
                <span className="text-white font-medium">
                  &quot;Content&quot;
                </span>{" "}
                — all text, data, visuals, and materials provided through our
                products and services
              </li>
            </ul>
          </section>

          {/* Digital Products */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              Digital Products (Playbook)
            </h2>
            <div className="card-base p-5 space-y-3 text-sm">
              <p>
                Playbooks are digital products delivered electronically. Upon
                successful payment, you receive immediate access to download the
                purchased playbook.
              </p>
              <div className="border-l-2 border-karu-accent/50 pl-4">
                <p className="text-white font-medium">Refund Policy</p>
                <p className="text-karu-muted mt-1">
                  Due to the nature of digital products, all sales are final
                  once the download has been initiated. No refunds will be
                  issued after the playbook has been downloaded or the download
                  link has been accessed.
                </p>
              </div>
              <p className="text-karu-muted">
                If you experience a technical issue preventing you from
                downloading your purchase, contact us at{" "}
                <a
                  href="mailto:gustave@karukera.xyz"
                  className="text-karu-accent hover:underline"
                >
                  gustave@karukera.xyz
                </a>{" "}
                and we will resolve it.
              </p>
            </div>
          </section>

          {/* Community / War Room */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              Community (War Room)
            </h2>
            <div className="card-base p-5 space-y-3 text-sm">
              <p>
                The War Room is a subscription-based community. By subscribing,
                you agree to the following:
              </p>
              <ul className="list-disc list-inside space-y-2 text-karu-muted">
                <li>
                  Your subscription renews automatically at the end of each
                  billing cycle unless cancelled
                </li>
                <li>
                  You may cancel your subscription at any time — access
                  continues until the end of the current billing period
                </li>
                <li>
                  We reserve the right to modify subscription pricing with
                  advance notice
                </li>
                <li>
                  Abusive behavior, spam, or violation of community guidelines
                  may result in termination of access without refund
                </li>
              </ul>
            </div>
          </section>

          {/* Intellectual Property */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              Intellectual Property
            </h2>
            <p>
              All content, including playbooks, site design, branding, and
              community materials, is the property of KARUKERA. You may not
              redistribute, resell, or publicly share purchased content without
              written permission.
            </p>
          </section>

          {/* AI Disclaimer */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              AI-Generated Content Disclaimer
            </h2>
            <div className="card-base border-karu-gold/30 p-5 space-y-3 text-sm">
              <p>
                Some content provided through KARUKERA&apos;s products and
                services may be generated or assisted by artificial intelligence
                tools.
              </p>
              <div className="border-l-2 border-karu-gold/50 pl-4">
                <p className="text-karu-gold font-medium">Important</p>
                <p className="text-karu-muted mt-1">
                  Nothing on karukera.xyz constitutes professional, financial,
                  legal, or medical advice. All content is provided for
                  informational and educational purposes only. You are solely
                  responsible for any decisions or actions taken based on
                  information obtained from our products or services.
                </p>
              </div>
              <p className="text-karu-muted">
                While we strive for accuracy, AI-generated content may contain
                errors or inaccuracies. Always verify critical information
                independently and consult qualified professionals where
                appropriate.
              </p>
            </div>
          </section>

          {/* Payment */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              Payment & Billing
            </h2>
            <p>
              All payments are processed securely by{" "}
              <a
                href="https://stripe.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-karu-cyan hover:underline"
              >
                Stripe
              </a>
              . By making a purchase, you agree to Stripe&apos;s{" "}
              <a
                href="https://stripe.com/legal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-karu-cyan hover:underline"
              >
                Terms of Service
              </a>
              . All prices are displayed in euros (€) unless otherwise stated.
            </p>
          </section>

          {/* Limitation of liability */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted by law, KARUKERA shall not be
              liable for any indirect, incidental, special, or consequential
              damages arising from your use of our products or services. Our
              total liability shall not exceed the amount you paid for the
              specific product or service giving rise to the claim.
            </p>
          </section>

          {/* Modifications */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              Modifications
            </h2>
            <p>
              We reserve the right to update these Terms at any time. Material
              changes will be communicated via email or a notice on our website.
              Continued use of our services after changes constitutes acceptance
              of the updated Terms.
            </p>
          </section>

          {/* Governing law */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              Governing Law
            </h2>
            <p>
              These Terms are governed by and construed in accordance with the
              laws of France. Any disputes shall be subject to the exclusive
              jurisdiction of the competent courts in France.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Contact</h2>
            <p>
              For any questions about these Terms, contact us at{" "}
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
