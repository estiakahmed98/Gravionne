import { Card, CardContent } from "@/components/ui/card";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbJsonLd, buildMetadata, webPageJsonLd } from "@/lib/seo";

const pageTitle = "Compliance & Governance";
const pageDescription =
  "Gravionne upholds rigorous compliance, governance, and data protection standards to safeguard global wellness clients.";
const pagePath = "/gravionne/compliance";

export const metadata = buildMetadata({
  title: pageTitle,
  description: pageDescription,
  path: pagePath,
});

export default function CompliancePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <JsonLd
        data={webPageJsonLd({
          title: pageTitle,
          description: pageDescription,
          path: pagePath,
        })}
        id="compliance-webpage-jsonld"
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Gravionne", path: "/gravionne" },
          { name: "Compliance & Governance", path: pagePath },
        ])}
        id="compliance-breadcrumb-jsonld"
      />

      <main className="flex-1">
        <section className="py-24">
          <div className="container mx-auto max-w-4xl px-4">
            <h1 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-balance mb-6">
              Compliance & Governance
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Gravionne maintains the highest standards of compliance and
              governance to ensure the security, privacy, and ethical handling
              of your health and wellness data across all jurisdictions where we
              operate.
            </p>
            <p className="text-sm text-muted-foreground mb-12">
              Last updated: January 15, 2025
            </p>

            <div className="space-y-8">
              <Card>
                <CardContent className="p-8">
                  <h2 className="font-heading text-2xl font-semibold mb-4">
                    Regulatory Compliance
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium mb-2">
                        HIPAA Compliance (United States)
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        We maintain HIPAA compliance for all protected health
                        information (PHI) handled within our systems, including
                        appropriate safeguards, access controls, and breach
                        notification procedures.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">
                        GDPR Compliance (European Union)
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Full compliance with the General Data Protection
                        Regulation, including data subject rights, lawful basis
                        for processing, and cross-border data transfer
                        protections.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">
                        PIPEDA Compliance (Canada)
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Adherence to the Personal Information Protection and
                        Electronic Documents Act for Canadian users, ensuring
                        appropriate consent and privacy protections.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">
                        Additional Jurisdictions
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        We continuously monitor and comply with emerging privacy
                        and health data regulations in all markets where we
                        operate, including CCPA, LGPD, and other regional
                        requirements.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h2 className="font-heading text-2xl font-semibold mb-4">
                    Security Standards
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium mb-2">
                        SOC 2 Type II Certification
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Annual SOC 2 Type II audits verify our security,
                        availability, processing integrity, confidentiality, and
                        privacy controls meet the highest industry standards.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">ISO 27001 Compliance</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Our information security management system is certified
                        to ISO 27001 standards, ensuring systematic protection
                        of sensitive information.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Encryption Standards</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        All data is encrypted using AES-256 encryption at rest
                        and TLS 1.3 in transit. Encryption keys are managed
                        through industry-standard key management systems.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h2 className="font-heading text-2xl font-semibold mb-4">
                    Ethical Standards
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium mb-2">Research Ethics</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        All research activities follow established ethical
                        guidelines, including appropriate consent procedures,
                        institutional review board oversight, and respect for
                        participant autonomy.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">
                        AI Ethics & Bias Prevention
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Our AI systems are designed with fairness, transparency,
                        and accountability principles. We regularly audit for
                        bias and ensure equitable outcomes across diverse
                        populations.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">
                        Professional Standards
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        All healthcare professionals on our team maintain
                        appropriate licenses and certifications, adhering to
                        their respective professional codes of conduct.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h2 className="font-heading text-2xl font-semibold mb-4">
                    Governance Structure
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium mb-2">Privacy Officer</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Our designated Privacy Officer oversees all
                        privacy-related matters, ensures compliance with
                        applicable regulations, and serves as the primary
                        contact for privacy concerns.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Security Committee</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        A dedicated security committee meets regularly to review
                        security policies, assess risks, and ensure continuous
                        improvement of our security posture.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Ethics Review Board</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        An independent ethics review board provides oversight
                        for research activities and ensures all practices align
                        with ethical standards and participant welfare.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h2 className="font-heading text-2xl font-semibold mb-4">
                    Audit & Monitoring
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium mb-2">Regular Audits</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        We conduct regular internal audits and engage
                        third-party auditors to verify compliance with all
                        applicable standards and regulations.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">
                        Continuous Monitoring
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Automated monitoring systems track access to sensitive
                        data, detect anomalies, and ensure ongoing compliance
                        with security and privacy requirements.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Incident Response</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Comprehensive incident response procedures ensure rapid
                        detection, containment, and resolution of any security
                        or privacy incidents, with appropriate notification to
                        affected parties.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h2 className="font-heading text-2xl font-semibold mb-4">
                    Vendor & Partner Management
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium mb-2">Due Diligence</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        All vendors and partners undergo thorough security and
                        compliance assessments before integration, ensuring they
                        meet our standards for data protection and service
                        quality.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">
                        Contractual Protections
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Business associate agreements and data processing
                        agreements ensure all third parties maintain appropriate
                        protections for your data and comply with applicable
                        regulations.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h2 className="font-heading text-2xl font-semibold mb-4">
                    Reporting & Transparency
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium mb-2">Compliance Reports</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        We publish annual compliance reports detailing our
                        adherence to privacy and security standards, audit
                        results, and continuous improvement initiatives.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Breach Notification</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        In the unlikely event of a data breach, we will notify
                        affected individuals and relevant authorities within
                        required timeframes and provide clear information about
                        the incident and remediation steps.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h2 className="font-heading text-2xl font-semibold mb-4">
                    Contact Our Compliance Team
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    For compliance-related questions, to report concerns, or to
                    request compliance documentation:
                  </p>
                  <div className="space-y-2 text-sm">
                    <p>Email: compliance@Gravionne.com</p>
                    <p>Phone: +1 (555) 123-4572</p>
                    <p>Privacy Officer: privacy@Gravionne.com</p>
                    <p>Security Team: security@Gravionne.com</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
