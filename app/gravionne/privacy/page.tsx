import { Card, CardContent } from "@/components/ui/card";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbJsonLd, buildMetadata, webPageJsonLd } from "@/lib/seo";

const pageTitle = "Privacy & Dignity Policy";
const pageDescription =
  "Learn how Gravionne protects personal information and health data with transparency, dignity, and rigorous security.";
const pagePath = "/gravionne/privacy";

export const metadata = buildMetadata({
  title: pageTitle,
  description: pageDescription,
  path: pagePath,
});

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <JsonLd
        data={webPageJsonLd({
          title: pageTitle,
          description: pageDescription,
          path: pagePath,
        })}
        id="privacy-webpage-jsonld"
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Gravionne", path: "/gravionne" },
          { name: "Privacy & Dignity Policy", path: pagePath },
        ])}
        id="privacy-breadcrumb-jsonld"
      />

      <main className="flex-1">
        <section className="py-24">
          <div className="container mx-auto max-w-4xl px-4">
            <h1 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-balance mb-6">
              Privacy & Dignity Policy
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              At Gravionne, we believe privacy is fundamental to human dignity.
              This policy outlines our commitment to protecting your personal
              information and health data with the highest standards of care and
              respect.
            </p>
            <p className="text-sm text-muted-foreground mb-12">
              Last updated: January 15, 2025
            </p>

            <div className="space-y-8">
              <Card>
                <CardContent className="p-8">
                  <h2 className="font-heading text-2xl font-semibold mb-4">
                    Our Privacy Philosophy
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Gravionne operates on the principle that your health and
                    wellness data is among your most personal and valuable
                    assets. We are committed to being transparent stewards of
                    this information, using it solely to enhance your wellness
                    journey while maintaining the highest standards of privacy
                    and security.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    We believe that privacy is not just about compliance with
                    regulations—it's about respecting your fundamental right to
                    control your personal information and maintaining the trust
                    you place in us.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h2 className="font-heading text-2xl font-semibold mb-4">
                    Information We Collect
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium mb-2">Personal Information</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Name, contact information, demographic data, and
                        preferences you provide when engaging with our services
                        or creating an account.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">
                        Health & Wellness Data
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Biomarker data, genetic information, lifestyle metrics,
                        wellness goals, and health assessments collected through
                        our personalized wellness programs.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Usage Information</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        How you interact with our services, preferences, and
                        technical information necessary to provide personalized
                        experiences.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h2 className="font-heading text-2xl font-semibold mb-4">
                    How We Use Your Information
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium mb-2">
                        Personalized Wellness Services
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Creating customized wellness strategies,
                        recommendations, and interventions based on your unique
                        biological and lifestyle profile.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Service Improvement</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Enhancing our AI algorithms, developing new features,
                        and improving the effectiveness of our wellness
                        solutions through aggregated, anonymized data analysis.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Communication</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Providing updates about your wellness journey, important
                        service information, and relevant educational content.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h2 className="font-heading text-2xl font-semibold mb-4">
                    Data Protection & Security
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium mb-2">
                        Encryption & Security
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        All data is encrypted in transit and at rest using
                        industry-leading security protocols. We employ
                        multi-layered security measures including access
                        controls, monitoring, and regular security audits.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Data Minimization</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        We collect only the information necessary to provide our
                        services and retain it only as long as needed for
                        legitimate business purposes or as required by law.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Access Controls</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Strict access controls ensure that only authorized
                        personnel can access your data, and only for legitimate
                        business purposes related to your wellness services.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h2 className="font-heading text-2xl font-semibold mb-4">
                    Your Rights & Choices
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium mb-2">Access & Portability</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        You have the right to access, download, and transfer
                        your personal data at any time through your account
                        dashboard or by contacting our privacy team.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">
                        Correction & Deletion
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        You can update, correct, or request deletion of your
                        personal information. We will honor deletion requests
                        while maintaining any data required for legal or safety
                        purposes.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium mb-2">Consent Management</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        You can modify your consent preferences at any time,
                        including opting out of certain data uses or
                        communications while maintaining your core wellness
                        services.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h2 className="font-heading text-2xl font-semibold mb-4">
                    Data Sharing & Disclosure
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We do not sell, rent, or trade your personal information. We
                    may share data only in the following limited circumstances:
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• With your explicit consent for specific purposes</li>
                    <li>
                      • With trusted service providers who assist in delivering
                      our services
                    </li>
                    <li>
                      • For legitimate business purposes such as mergers or
                      acquisitions
                    </li>
                    <li>
                      • When required by law or to protect safety and security
                    </li>
                    <li>
                      • In aggregated, anonymized form for research and
                      development
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h2 className="font-heading text-2xl font-semibold mb-4">
                    Contact Our Privacy Team
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    For questions about this policy, to exercise your privacy
                    rights, or to report concerns, please contact our dedicated
                    privacy team:
                  </p>
                  <div className="space-y-2 text-sm">
                    <p>Email: privacy@Gravionne.com</p>
                    <p>Phone: +1 (555) 123-4570</p>
                    <p>
                      Response time: Within 48 hours for urgent matters, 5
                      business days for standard inquiries
                    </p>
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
